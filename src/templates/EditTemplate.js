import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { deleteTodo, changeTodo } from 'actions';
import propTypes from 'prop-types';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';
import left_arrow from 'assets/icons/left_arrow.svg';
import icon_trash from 'assets/icons/icon_trash.svg';
import Icon from 'components/Icon/Icon';
import LogAndRegButton from 'components/atoms/LogAndRegButton/LogAndRegButton';
import { NameOfDaysLongPL, Photos } from 'functions/Names';
import {
  StyledForm,
  StyledBack,
  StyledArrowIcon,
  StyledInput,
  StyledMainTemplate,
  StyledWrppaerForTime,
  StyledMainWrapperDays,
  StyledWrapperWeekDays,
  StyledCheckboxDay,
  StyledWrapperAllDays,
  StyledAllChecboxDays,
  StyledWrapperPositionButtons,
  StyledLeaveButton,
  StyledOneImage,
  StyledImageIcon,
  StyledWrapperImages,
} from 'StyledTemplates/AddAndEditTemplate.style';

const StyledBackRight = styled(StyledBack)`
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledArrowIconRight = styled(StyledArrowIcon)`
  transform: scale(0.25) translate(-180%, -170%);
`;

const StyledWarpperImage = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.2);
`;

const StyledInputEdit = styled(StyledInput)`
  color: black;
  margin-top: 12px;
`;

const StyledWrapperPositionButtonsEdit = styled(StyledWrapperPositionButtons)`
  margin-top: 30px;
`;

const StyledWrapperImagesEdit = styled(StyledWrapperImages)`
  margin-top: 30px;
`;

class EditTemplate extends Component {
  state = {
    data: {},
    dayWeek: [],
    loading: false,
    daysOfWeek: [],
    block: true,
    loadingSend: false,
    photoNumber: 0,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const userId = sessionStorage.getItem('key');

    axios
      .get(`https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/day`, {
        params: {
          id,
          userId,
        },
      })
      .then(res => {
        this.setState({ data: res.data.data[0] });
        this.setState({ photoNumber: res.data.data[0].images });
        this.setState({ loading: true });
      });
  }

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

  deleteThisTodo = () => {
    const { data } = this.state;
    const { deleteTodoApi } = this.props;
    deleteTodoApi(data.id);
  };

  checkPhoto = i => {
    this.setState({ photoNumber: i });
  };

  render() {
    const { data, loading, dayWeek, daysOfWeek, loadingSend, block, photoNumber } = this.state;
    const { changeTodoApi } = this.props;

    const NamesOfDays = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];

    const tabDays = [];

    if (block === true) {
      if (data.monday !== undefined) {
        NamesOfDays.forEach((element, index) => {
          if (data[element] === 1) {
            tabDays[index] = true;
          } else {
            tabDays[index] = false;
          }
        });
        this.setState({ block: false, daysOfWeek: tabDays });
      }
    }
    return (
      <StyledMainTemplate>
        {loading ? (
          <Formik
            initialValues={{ title: data.title, h: data.hours, m: data.minutes }}
            onSubmit={(value, { setSubmitting }) => {
              if (value.title.length > 3) {
                this.setState({ loadingSend: true });
                changeTodoApi(data.id, value.title, daysOfWeek, value.h, value.m, photoNumber);
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <StyledBack to="/todo">
                  <StyledArrowIcon src={left_arrow} />
                </StyledBack>
                <StyledBackRight onClick={() => this.deleteThisTodo()}>
                  <StyledArrowIconRight src={icon_trash} />
                </StyledBackRight>
                <StyledWarpperImage>
                  <StyledIcon src={Photos[data.images]} />
                </StyledWarpperImage>
                <StyledInputEdit as={Field} type="text" placeholder="nazwa zadania" name="title" />
                <StyledWrppaerForTime>
                  <StyledInputEdit as={Field} type="number" placeholder="godziny" name="h" time />
                  <StyledInputEdit as={Field} type="number" placeholder="minuty" name="m" time />
                </StyledWrppaerForTime>
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
                <StyledWrapperImagesEdit>
                  {Photos.map((e, i) => (
                    <StyledOneImage onClick={() => this.checkPhoto(i)} active={photoNumber === i}>
                      <StyledImageIcon src={e} />
                    </StyledOneImage>
                  ))}
                </StyledWrapperImagesEdit>
                <StyledWrapperPositionButtonsEdit>
                  {loadingSend ? (
                    <AnimationLoading />
                  ) : (
                    <>
                      <LogAndRegButton radius type="submit" disabled={isSubmitting}>
                        zapisz
                      </LogAndRegButton>
                      <StyledLeaveButton to="/todo">anuluj</StyledLeaveButton>
                    </>
                  )}
                </StyledWrapperPositionButtonsEdit>
              </StyledForm>
            )}
          </Formik>
        ) : (
          <AnimationLoading big />
        )}
      </StyledMainTemplate>
    );
  }
}

EditTemplate.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  }).isRequired,
  changeTodoApi: propTypes.func.isRequired,
  deleteTodoApi: propTypes.func.isRequired,
};

const mapActionToProps = {
  deleteTodoApi: deleteTodo,
  changeTodoApi: changeTodo,
};

export default connect(
  null,
  mapActionToProps,
)(EditTemplate);
