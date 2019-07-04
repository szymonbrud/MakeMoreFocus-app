import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { addTodo, finallyAddTodo } from 'actions';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import left_arrow from 'assets/icons/left_arrow.svg';
import web_dev from 'assets/images/web_dev.svg';
import {
  StyledMainTemplate,
  StyledForm,
  StyledArrowIcon,
  StyledNameSection,
  StyledInput,
  StyledWrppaerForTime,
  StyledCheckboxDay,
  StyledMainWrapperDays,
  StyledWrapperWeekDays,
  StyledWrapperAllDays,
  StyledAllChecboxDays,
  StyledWrapperImages,
  StyledOneImage,
  StyledImageIcon,
  StyledMoreImage,
  StyledWrapperPositionButtons,
  StyledBack,
  StyledLeaveButton,
} from 'StyledTemplates/AddTodoTemplate.style';
import LogAndRegButton from 'components/atoms/LogAndRegButton/LogAndRegButton';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';

class AddTodoTemplate extends Component {
  state = {
    daysOfWeek: [],
    dayWeek: [],
    loading: false,
  };

  changeDay = i => {
    this.setState({ dayWeek: [false, false] });
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

  changeDayWeek = i => {
    this.setState({});
    if (i === 0) {
      this.setState({
        dayWeek: [true, false],
        daysOfWeek: [true, true, true, true, true, true, true],
      });
    } else {
      this.setState({
        dayWeek: [false, true],
        daysOfWeek: [true, true, true, true, true, false, false],
      });
    }
  };

  render() {
    const { daysOfWeek, dayWeek, loading } = this.state;
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
            // eslint-disable-next-line
            const hours = parseInt(value.h);
            // eslint-disable-next-line
            const minutes = parseInt(value.m);

            if (hours <= 24 && minutes <= 60 && value.title.length > 3) {
              this.setState({ loading: true });
              addTodos(value.title, daysOfWeek, hours, minutes, 4);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <StyledBack to="/todo">
                <StyledArrowIcon src={left_arrow} />
              </StyledBack>
              <StyledNameSection>Nazwa zadania</StyledNameSection>
              <StyledInput as={Field} type="text" placeholder="nazwa zadania" name="title" />
              <StyledNameSection>Ile czasu chcemy na to poświęcać</StyledNameSection>
              <StyledWrppaerForTime>
                <StyledInput as={Field} type="number" placeholder="godziny" name="h" time />
                <StyledInput as={Field} type="number" placeholder="minuty" name="m" time />
              </StyledWrppaerForTime>
              <StyledNameSection center>W jakie dni chcesz je wykonywać</StyledNameSection>
              <StyledMainWrapperDays>
                <StyledWrapperWeekDays>
                  <StyledCheckboxDay onClick={() => this.changeDayWeek(0)} active={dayWeek[0]}>
                    codziennie
                  </StyledCheckboxDay>
                  <StyledCheckboxDay onClick={() => this.changeDayWeek(1)} active={dayWeek[1]}>
                    w tygodniu
                  </StyledCheckboxDay>
                </StyledWrapperWeekDays>
                <StyledWrapperAllDays>
                  {weekDays.map((e, i) => (
                    <StyledAllChecboxDays
                      onClick={() => this.changeDay(i)}
                      active={daysOfWeek[i] === true}
                    >
                      {e}
                    </StyledAllChecboxDays>
                  ))}
                </StyledWrapperAllDays>
              </StyledMainWrapperDays>
              <StyledNameSection center>Obrazek do zadania</StyledNameSection>
              <StyledWrapperImages>
                <StyledOneImage>
                  <StyledImageIcon src={web_dev} />
                </StyledOneImage>
                <StyledOneImage>
                  <StyledImageIcon src={web_dev} />
                </StyledOneImage>
                <StyledOneImage>
                  <StyledImageIcon src={web_dev} />
                </StyledOneImage>
                <StyledOneImage>
                  <StyledImageIcon src={web_dev} />
                </StyledOneImage>
                <StyledOneImage>
                  <StyledImageIcon src={web_dev} />
                </StyledOneImage>
                <StyledOneImage>
                  <StyledImageIcon src={web_dev} />
                </StyledOneImage>
              </StyledWrapperImages>
              <StyledMoreImage>więcej</StyledMoreImage>
              <StyledWrapperPositionButtons>
                {loading ? (
                  <AnimationLoading />
                ) : (
                  <>
                    <LogAndRegButton radius type="submit" disabled={isSubmitting}>
                      zapisz
                    </LogAndRegButton>
                    <StyledLeaveButton to="/todo">anuluj</StyledLeaveButton>
                  </>
                )}
              </StyledWrapperPositionButtons>
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
