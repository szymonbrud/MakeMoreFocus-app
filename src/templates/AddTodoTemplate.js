import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { addTodo } from 'actions';
import propTypes from 'prop-types';
import left_arrow from 'assets/icons/left_arrow.svg';
import { NameOfDaysLongPL, Photos } from 'functions/Names';
import LogAndRegButton from 'components/atoms/LogAndRegButton/LogAndRegButton';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';
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
  StyledWrapperPositionButtons,
  StyledBack,
  StyledLeaveButton,
} from 'StyledTemplates/AddAndEditTemplate.style';

class AddTodoTemplate extends Component {
  state = {
    daysOfWeek: [false, false, false, false, false, false, false],
    dayWeek: [false, false],
    loading: false,
    photoNumber: 0,
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

  checkPhoto = i => {
    this.setState({ photoNumber: i });
  };

  render() {
    const { daysOfWeek, dayWeek, loading, photoNumber } = this.state;
    const { addTodos } = this.props;

    return (
      <StyledMainTemplate>
        <Formik
          initialValues={{ title: '', h: '', m: '' }}
          onSubmit={(value, { setSubmitting }) => {
            const hours = parseInt(value.h, 10);
            const minutes = parseInt(value.m, 10);

            if (hours <= 24 && minutes <= 60 && value.title.length > 3) {
              this.setState({ loading: true });
              addTodos(value.title, daysOfWeek, hours, minutes, photoNumber);
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
                  {NameOfDaysLongPL.map((e, i) => (
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
                {Photos.map((e, i) => (
                  <StyledOneImage onClick={() => this.checkPhoto(i)} active={photoNumber === i}>
                    <StyledImageIcon src={e} />
                  </StyledOneImage>
                ))}
              </StyledWrapperImages>
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

const mapActionToProps = {
  addTodos: addTodo,
};

AddTodoTemplate.propTypes = {
  addTodos: propTypes.func.isRequired,
};

export default connect(
  null,
  mapActionToProps,
)(AddTodoTemplate);
