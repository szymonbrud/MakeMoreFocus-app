import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTodosToday, getDoneTodos } from 'actions';
import TodoDoneAn from 'components/organisms/TodoDoneAn';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';
import TopBar from 'components/organisms/TopBar/TopBar';

const StyledMainWrapper = styled.div`
  padding: 1vh 0 1vh;
  width: 100%;
`;

class ShowDoneTodosTemplate extends Component {
  state = {
    day: 0,
    month: 0,
    year: 0,
    aktu: true,
    tab: [],
  };

  componentDidMount() {
    const { todosToday, getTodosTodayApi, getDoneTodosApi } = this.props;

    const todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth();
    const year = todayDate.getFullYear();

    this.setState({
      day,
      month,
      year,
    });
    day = this.addZeroToDate(day);
    month = this.addZeroToDate(month);

    const fullTodayDate = `${year}-${month}-${day}`;
    if (todosToday.length === 0) {
      getTodosTodayApi(null, true);
      getDoneTodosApi(null, fullTodayDate);
    }
  }

  sortowanieDanych = () => {
    const { aktu } = this.state;
    const { todosToday } = this.props;

    let lastDate;

    todosToday.forEach((elem, inde) => {
      if (inde === 0) lastDate = elem.dateCreate;
      if (inde > 0) {
        if (Date.parse(lastDate) > Date.parse(elem.dateCreate)) {
          lastDate = elem.dateCreate;
        }
      }
    });

    let date = this.getLastDayDate(0);
    let i = 1;
    const tab = [];

    while (date.fullDate !== lastDate) {
      date = this.getLastDayDate(i);
      tab[i - 1] = 'o';
      i += 1;
    }

    if (aktu === true) {
      this.setState({ tab, aktu: false });
    }
  };

  getLastDayDate = how => {
    const NamesOfDays = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];

    const { day, month, year } = this.state;

    const month2 = this.deleteZero(month);
    const day2 = this.deleteZero(day);

    const newDate = new Date(year, month2, day2 - how);
    let dayLastDay = newDate.getDate();
    const monthLastDay = newDate.getMonth();
    const yearLastDay = newDate.getFullYear();

    dayLastDay = this.addZeroToDate(dayLastDay);
    const monthLastDay2 = this.addZeroToDate(monthLastDay);

    const FullDate = {
      fullDate: `${yearLastDay}-${this.addZeroToDate2(monthLastDay)}-${dayLastDay}T00:00:00.000Z`,
      day: dayLastDay,
      month: monthLastDay2,
      year: yearLastDay,
      dayName: NamesOfDays[newDate.getDay()],
      dayNumber: newDate.getDay(),
    };

    return FullDate;
  };

  deleteZero = day => {
    if (day[0] === '0') {
      return parseInt(day[1]);
    }
    return parseInt(day);
  };

  addZeroToDate = day => {
    if (day < 10) {
      return `0${day}`;
    }
    return day;
  };

  addZeroToDate2 = day => {
    if (day < 10) {
      return `0${day + 1}`;
    }
    return day;
  };

  render() {
    const { todosToday, todoDone, allTodosNormallTest } = this.props;
    const { tab } = this.state;

    if (todosToday.length !== 0) {
      this.sortowanieDanych();
    }

    const sprawdz = (ele, date) => {
      if (ele[date.dayName] === 1 && Date.parse(ele.dateCreate) <= Date.parse(date.fullDate)) {
        return ele;
      }
      return null;
    };

    return (
      <>
        <TopBar />

        <StyledMainWrapper>
          {tab.length !== 0 ? (
            todosToday.length !== 0 &&
            tab.map((e, i) => {
              const date = this.getLastDayDate(i + 1);
              return (
                <TodoDoneAn
                  date={date}
                  todoToday={todosToday.map(ele => sprawdz(ele, date))}
                  todayDone={todoDone.map(element =>
                    element.date === date.fullDate ? element : null,
                  )}
                />
              );
            })
          ) : (
            <>
              {allTodosNormallTest === true && tab.length === 0 ? (
                <>
                  <p>nie masz jeszcze żadnych zadań</p>
                </>
              ) : (
                <AnimationLoading big />
              )}
            </>
          )}
        </StyledMainWrapper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todoDone: state.todoDone,
  todosToday: state.allTodosNormall,
  allTodosNormallTest: state.allTodosNormallTest,
});

const mapActionToProps = {
  getTodosTodayApi: getTodosToday,
  getDoneTodosApi: getDoneTodos,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(ShowDoneTodosTemplate);
