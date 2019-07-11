import React, { Component } from 'react';
import styled from 'styled-components';
import arrow_blue_icon from 'assets/icons/arrow_blue_icon.svg';
import Icon from 'components/Icon/Icon';
import posed from 'react-pose';
import { Redirect } from 'react-router-dom';
import check_todo from 'assets/images/check_todo.svg';
import done_win from 'assets/images/done_win.svg';
import check_progress from 'assets/images/check_progress.svg';
import media from 'assets/styles/media';

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.blue};
`;

const StyledBottomBar = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledArrowBox = styled.div`
  width: 100px;
  height: 100%;
  background: #1966cd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWrapperWoods = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledWoods = styled.div`
  background: #1966cd;
  width: 40px;
  height: 15px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00429a;
    opacity: ${({ active }) => (active ? '1' : '0')};
    transition: opacity 0.6s;
  }
`;

const StyledArrowIcon = styled(Icon)`
  transform: scale(0.08);
  position: relative;
  left: 4px;
`;

const StyledWrapperImageH1 = styled.div`
  height: 100vh;
  width: 90vw;
  position: fixed;
  top: 5vh;
  left: 5vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.phone`
    top: 7vh;
  `}
`;

const StyledH1 = styled.h1`
  color: white;
  font-size: 2.6rem;
  margin: 0;
  font-weight: 400;
  width: 90%;
  position: absolute;
  top: 10vh;
  left: 0;

  ${media.phone`
    font-size: 3.6rem;
    top: 0;
  `}
`;

const StyledH12 = styled(StyledH1)`
  ${media.phone`
    font-size: 3.6rem;
    top: 10vh;
  `}
`;

const StyledImageIcon = styled(Icon)`
  transform: scale(0.25);
  ${media.phone`
    transform: scale(0.32);
  `}
`;

const StyledImageIcon2 = styled(StyledImageIcon)`
  position: relative;
  bottom: 25vh;

  ${media.phone`
    transform: scale(0.25);
    bottom: 15vh;
  `}
`;

const StyledWrapperImageH1Animate = posed(StyledWrapperImageH1)({
  before: {
    x: '100vw',
  },
  in: {
    x: 0,
  },
  after: {
    x: '-100vw',
  },
});

const StyledBottomBarAnimate = posed(StyledBottomBar)({
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
  },
});

class PresentationTemplate extends Component {
  state = {
    entry: false,
    picture: ['before', 'before', 'before'],
    index: 0,
  };

  componentDidMount() {
    this.setState({ picture: ['in', 'before', 'before'] });
    setTimeout(() => {
      this.setState({ entry: true });
    }, 500);
  }

  nextPicture = () => {
    const { picture, index } = this.state;
    const pictureVariable = picture;

    if (index < 2) {
      pictureVariable[index] = 'after';
      pictureVariable[index + 1] = 'in';

      this.setState({ picture: pictureVariable });
    }
    this.setState({ index: index + 1 });
  };

  render() {
    const { entry, picture, index } = this.state;

    if (index === 3) {
      return <Redirect to="/todo" />;
    }

    return (
      <StyledMainWrapper>
        <StyledWrapperImageH1Animate pose={picture[0]}>
          <StyledImageIcon src={check_todo} />
          <StyledH1>Szybko i łatwo zapisuj swoje postanowienia</StyledH1>
        </StyledWrapperImageH1Animate>
        <StyledWrapperImageH1Animate pose={picture[1]}>
          <StyledImageIcon2 src={check_progress} />
          <StyledH1>Sprawdzaj wyniki i poprawiaj to co ci sprawia problemy</StyledH1>
        </StyledWrapperImageH1Animate>
        <StyledWrapperImageH1Animate pose={picture[2]}>
          <StyledImageIcon2 src={done_win} />
          <StyledH12>Osiągaj cele</StyledH12>
        </StyledWrapperImageH1Animate>
        <StyledBottomBarAnimate pose={entry ? 'visible' : 'hidden'}>
          <StyledWrapperWoods>
            <StyledWoods active={index >= 0} />
            <StyledWoods active={index >= 1} />
            <StyledWoods active={index >= 2} />
          </StyledWrapperWoods>
          <StyledArrowBox>
            <StyledArrowIcon src={arrow_blue_icon} onClick={() => this.nextPicture()} />
          </StyledArrowBox>
        </StyledBottomBarAnimate>
      </StyledMainWrapper>
    );
  }
}

export default PresentationTemplate;
