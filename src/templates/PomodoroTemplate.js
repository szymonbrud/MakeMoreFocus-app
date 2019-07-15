/* eslint-disable */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon/Icon';
import TopBar from 'components/organisms/TopBar/TopBar';
import clock_light_white from 'assets/icons/clock_light_white.svg';
import coffy_break from 'assets/images/coffy_break.svg';
import media from 'assets/styles/media';

const StyledMainTemplate = styled.div`
  width: 100%;
  padding-bottom: 5vh;
`;

const StyledWrapperForClocks = styled.div`
  width: 40%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSmallClocks = styled(Icon)``;

const WrapperForTimeAndButton = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTime = styled.p`
  margin: 0;
  font-size: 3.5rem;
  font-weight: 600;
  position: relative;
  z-index: 1000;
`;

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background: ${({ theme }) => theme.blue};
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1.7rem;
  cursor: pointer;

  ${({ next }) =>
    next &&
    css`
      margin-right: 20px;
      color: ${({ theme }) => theme.blue};
      background: white;
      border: 1px solid ${({ theme }) => theme.blue};
    `}
`;

const StyledCircle = styled.div`
  width: 64vw;
  height: 64vw;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 33vw);
  left: calc(50% - 33vw);
  background: ${({ theme }) => theme.blue};
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    background: #c3bebe;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: transform 4s;
    transform: translateY(${({ active }) => (active ? '0' : '-100%')});
  }
  transition: transform 4s;
`;

const StyledCircieInside = styled.div`
  width: calc(64vw - 10px);
  height: calc(64vw - 10px);
  background: white;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 33vw + 5px);
  left: calc(50% - 33vw + 5px);
  z-index: 500;
`;

const StyledWrapperPostion = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8vh;
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.blue};
  margin: 0;
  font-size: 2rem;
`;

const StyledWrapperButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSecoundWrapperClocks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const StyledIconBig = styled(Icon)`
  transform: scale(1.5);
`;

const StyledWord = styled.div`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 30px;
  position: relative;

  ${media.phone`
    height: 23vh;
  `};
  height: 40vh;
`;

const StyledImageCoffy = styled(Icon)`
  transform: scale(0.15);
  margin-left: -50%;
`;

const StyledPNextToCoffy = styled.p`
  width: 50%;
  color: ${({ theme }) => theme.blue};
  font-size: 2rem;
  position: absolute;
  height: 100%;
  right: 0;
  top: 10%;
`;

const StyledPWIll = styled.p`
  font-size: 2.2rem;
  text-align: center;
  margin: 0;
`;

const StyledBigTextWrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0vh;
  left: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class PomodoroTemplate extends Component {
  state = {
    gradient: false,
    m: '25',
    s: '00',
    end: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ gradient: true });
    }, 500);
  }

  clicked = () => {
    const nowTime = this.getNowTime();

    const datePlus = new Date(
      nowTime.dateYear,
      nowTime.dateMonth,
      nowTime.dateDay,
      nowTime.dateHours,
      nowTime.dateMinutes,
      nowTime.dateSecound + 1500,
    );

    this.calculate(datePlus);
  };

  calculate = datePlus => {
    const date = new Date();

    const timePlus = datePlus.getTime();
    const time = date.getTime();
    const clearTime = timePlus - time;
    let s = Math.floor(clearTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    s %= 60;
    m %= 60;
    h %= 24;

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    if (m <= 0 && s <= 0) {
      this.setState({
        s,
        m,
      });
    } else {
      this.setState({
        s,
        m,
      });
      setTimeout(() => {
        this.calculate(datePlus);
      }, 1000);
    }
  };

  getNowTime = () => {
    const date = new Date();
    const dateMonth = date.getMonth();
    const dateDay = date.getDate();
    const dateYear = date.getFullYear();
    const dateHours = date.getHours();
    const dateMinutes = date.getMinutes();
    const dateSecound = date.getSeconds();

    return {
      dateMonth,
      dateDay,
      dateYear,
      dateHours,
      dateMinutes,
      dateSecound,
    };
  };

  render() {
    const { gradient, m, s } = this.state;
    return (
      <>
        <TopBar />
        <StyledBigTextWrapper>
          <StyledPWIll>ta część aplikacji będzie wkrótce dostępna</StyledPWIll>
        </StyledBigTextWrapper>
        <StyledMainTemplate>
          <StyledWrapperForClocks>
            <StyledSmallClocks src={clock_light_white} />
            <StyledSmallClocks src={clock_light_white} />
            <StyledSmallClocks src={clock_light_white} />
            <StyledSmallClocks src={clock_light_white} />
          </StyledWrapperForClocks>
          <WrapperForTimeAndButton>
            <StyledTime>{`${m}:${s}`}</StyledTime>
            <StyledCircle active={gradient} />
            <StyledCircieInside />
          </WrapperForTimeAndButton>
          <StyledWrapperButton>
            <StyledButton next>pomiń</StyledButton>
            <StyledButton onClick={() => this.clicked()}>start</StyledButton>
          </StyledWrapperButton>
          <StyledWrapperPostion>
            <StyledP>jak ci idzie</StyledP>
            <StyledSecoundWrapperClocks>
              <StyledIconBig src={clock_light_white} />
              <StyledIconBig src={clock_light_white} />
              <StyledIconBig src={clock_light_white} />
              <StyledIconBig src={clock_light_white} />
            </StyledSecoundWrapperClocks>
            <StyledWord>
              <StyledImageCoffy src={coffy_break} />
              <StyledPNextToCoffy>
                parcuj dalej, a już po 4 sesjach będzie czas na dłuższą przerwę
              </StyledPNextToCoffy>
            </StyledWord>
          </StyledWrapperPostion>
        </StyledMainTemplate>
      </>
    );
  }
}

export default PomodoroTemplate;
