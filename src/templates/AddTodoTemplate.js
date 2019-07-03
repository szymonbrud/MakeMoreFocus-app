import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { addTodo, finallyAddTodo } from 'actions';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

const StyledMainTemplate = styled.div`
  min-height: 100%;
  width: 100%;
`;

const StyledForm = styled(Form)`
  width: 95%;
  margin: 2vh 0 0 5%;
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  margin: 0 0 3px 0;
  font-weight: 400;
`;

const StyledField = styled(Field)`
  width: 60%;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 5px;
  height: 4vh;
  max-height: 40px;
  min-height: 30px;
  padding: 5px;
  margin-bottom: 17px;
`;

const StyledFieldTime = styled(StyledField)`
  width: 20%;
  margin-right: 10px;
  text-align: center;
`;

const StyledCheckDay = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  color: black;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: white;
  height: 4vh;
  border-radius: 5px;
  width: 80%;
  font-size: 1.4rem;

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.blue};
    `}
`;

const StyledMainWrapperCheckDay = styled.div`
  width: 100%;
  display: flex;
`;

const StyledWrapperFirstCheckDays = styled.div`
  width: 30%;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 20vh;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSecoundDays = styled(StyledCheckDay)`
  width: 96%;
`;

const StyledWrappeSecoundCheckDays = styled.div`
  margin-left: 10px;
  width: 70%;
  height: 15vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const StyledButtonLogin = styled.button`
  width: 40%;
  height: 40px;
  border: none;
  color: white;
  background: ${({ theme }) => theme.blue};
  margin: 5vh auto;
  border-radius: 5px;
`;

class AddTodoTemplate extends Component {
  state = {
    daysOfWeek: [],
  };

  changeDay = i => {
    const { daysOfWeek } = this.state;
    const days = daysOfWeek;
    const newDays = days;
    if (days[i] !== true) {
      newDays[i] = true;
    } else {
      newDays[i] = false;
    }
    this.setState({ daysOfWeek: newDays });
  };

  render() {
    const { daysOfWeek } = this.state;
    // eslint-disable-next-line
    const { addTodos, addTodo, addTodoAct } = this.props;

    const weekDays = [
      'poniedziałek',
      'wtorek',
      'środa',
      'czwartek',
      'piątek',
      'sobota',
      'niedziela',
    ];

    if (addTodo || addTodo[0] === true) {
      addTodoAct(199, false);
      return <Redirect to="/todo" />;
    }

    return (
      <StyledMainTemplate>
        <Formik
          initialValues={{ title: '', h: '', m: '' }}
          onSubmit={(value, { setSubmitting }) => {
            addTodos(value.title, daysOfWeek);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <StyledP>nazwa zadania</StyledP>
              <StyledField as={Field} type="text" placeholder="nazwa zadania" name="title" />
              <StyledP>ile czsu chcę na to poświęcić w dniu</StyledP>
              <div>
                <StyledFieldTime as={Field} type="number" placeholder="godziny" name="h" />
                <StyledFieldTime as={Field} type="number" placeholder="minuty" name="m" />
              </div>
              <StyledP>wybierz dni w których chcesz wykonywać zadanie</StyledP>
              <StyledMainWrapperCheckDay>
                <StyledWrapperFirstCheckDays>
                  <StyledCheckDay>codziennie</StyledCheckDay>
                  <StyledCheckDay>w tygodniu</StyledCheckDay>
                </StyledWrapperFirstCheckDays>
                <StyledWrappeSecoundCheckDays>
                  {weekDays.map((element, i) => (
                    <StyledSecoundDays
                      onClick={() => this.changeDay(i)}
                      active={daysOfWeek[i] === true}
                    >
                      {element}
                    </StyledSecoundDays>
                  ))}
                </StyledWrappeSecoundCheckDays>
              </StyledMainWrapperCheckDay>
              <StyledButtonLogin type="submit" disabled={isSubmitting}>
                akceptuje
              </StyledButtonLogin>
            </StyledForm>
          )}
        </Formik>
      </StyledMainTemplate>
    );
  }
}

const mapStateToProps = state => ({
  addTodo: state.addTodo,
});

const mapActionToProps = {
  addTodos: addTodo,
  addTodoAct: finallyAddTodo,
};

AddTodoTemplate.propTypes = {
  addTodos: propTypes.func.isRequired,
  addTodoAct: propTypes.func.isRequired,
  addTodo: propTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(AddTodoTemplate);
