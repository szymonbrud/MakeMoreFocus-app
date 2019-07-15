import React from 'react';
import Date from 'components/atoms/Date/Date';
import TodoDidNotDone from 'components/molecules/TodoDidNotDone/TodoDidNotDone';
import TodoDoneDone from 'components/molecules/TodoDoneDone/TodoDoneDone';
import propTypes from 'prop-types';
import { NameOfMonthShortPL, NameOfDaysPL } from 'functions/Names';

const TodoDoneAn = ({ date, todoToday, todayDone }) => {
  let przep = false;
  const tab = [];
  let leng = 0;

  if (todoToday.length !== 0) {
    todoToday.forEach((e, i) => {
      przep = false;
      leng = todayDone.length;
      if (e !== null) {
        todayDone.forEach((element, index) => {
          if (przep === false) {
            if (leng - 1 === index) {
              if (element !== null) {
                if (element.idTodo === e.id) {
                  tab[i] = element;
                  przep = true;
                }
              } else {
                tab[i] = e;
              }
            } else if (element !== null) {
              if (element.idTodo === e.id) {
                tab[i] = element;
                przep = true;
              }
            }
          }
        });
      }
    });
  }

  const transformDate = datee => {
    const month = date.month[0] === '0' ? parseInt(datee.month[1], 10) : parseInt(datee.month, 10);

    return `${NameOfDaysPL[datee.dayNumber]} ${datee.day} ${NameOfMonthShortPL[month + 1]}`;
  };

  return (
    <div>
      <Date big>{transformDate(date)}</Date>
      {tab.map(e => (
        <>
          {e !== null && (
            <>
              {e.date === undefined ? (
                <>
                  <TodoDidNotDone data={e} />
                </>
              ) : (
                <>
                  {e.state === 1 ? (
                    <TodoDoneDone data={e}>zrobione</TodoDoneDone>
                  ) : (
                    <TodoDidNotDone data={e} />
                  )}
                </>
              )}
            </>
          )}
        </>
      ))}
    </div>
  );
};

TodoDoneAn.propTypes = {
  date: propTypes.objectOf(propTypes.number, propTypes.string),
  todoToday: propTypes.arrayOf(propTypes.objectOf(propTypes.string, propTypes.number)),
  todayDone: propTypes.arrayOf(propTypes.object),
};

TodoDoneAn.defaultProps = {
  date: {},
  todoToday: [],
  todayDone: [],
};

export default TodoDoneAn;
