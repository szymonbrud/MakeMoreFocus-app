import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import Icon from 'components/Icon/Icon';
import BGLogin2 from 'assets/images/BGLogin2.png';
import { Link } from 'react-router-dom';

export const StyledMainTemplate = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;

export const StyledBack = styled(Link)`
  margin: 15px;
`;

export const StyledArrowIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const StyledNameSection = styled.p`
  font-weight: 500;
  font-size: 1.7rem;
  margin: 14px 0 0 15px;

  ${({ center }) =>
    center &&
    css`
      margin: 14px 0 0 0;
      text-align: center;
    `}
`;

export const StyledInput = styled(Field)`
  height: 38px;
  width: 80%;
  max-width: 300px;
  padding: 5px;
  color: ${({ theme }) => theme.opacityBlack};
  font-size: 1.6rem;
  margin: 4px 15px 0;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 5px;

  ${({ time }) =>
    time &&
    css`
      text-align: center;
      margin-right: 6px;
      width: 25%;
      max-width: 100px;
    `}
`;

export const StyledWrppaerForTime = styled.div`
  display: flex;
`;

export const StyledCheckboxDay = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  font-size: 1.4rem;
  width: 100px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: white;
  user-select: none;

  :nth-child(2) {
    margin-top: 8px;
  }

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.blue};
    `}
`;

export const StyledMainWrapperDays = styled.div`
  margin-top: 5px;
  display: flex;
  height: 140px;
  margin-bottom: 10px;
`;

export const StyledWrapperWeekDays = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    right: 2%;
    top: 10%;
    height: 80%;
    width: 1px;
    background: black;
  }
`;

export const StyledWrapperAllDays = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledAllChecboxDays = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  font-size: 1.4rem;
  width: 47%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 2%;
  background: white;
  user-select: none;

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.blue};
    `}
`;

export const StyledWrapperImages = styled.div`
  margin-top: 5px;
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 15px;
`;

export const StyledOneImage = styled.div`
  width: 48%;
  height: 28vw;
  background: ${({ theme }) => theme.opacityBlue2};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border: none;

  ${({ active }) =>
    active &&
    css`
      border: 4px solid ${({ theme }) => theme.blue};
    `}
`;

export const StyledImageIcon = styled(Icon)`
  transform: scale(0.1);
`;

export const StyledMoreImage = styled.p`
  margin: 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.blue};
  text-align: center;
`;

export const StyledWrapperPositionButtons = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const StyledLeaveButton = styled(Link)`
  width: 40%;
  max-width: 150px;
  color: white;
  border: none;
  margin: 11px 0;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.red};
  border-radius: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
