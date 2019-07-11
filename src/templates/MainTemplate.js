import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/GlobalStyle';
import propTypes from 'prop-types';
import BGLogin2 from 'assets/images/BGLogin2.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { finallyActionAPI, getNewData } from 'actions';
import media from 'assets/styles/media';
import Icon from 'components/Icon/Icon';
import forPhone from 'assets/images/forPhone.svg';

const StyledMainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${BGLogin2});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 6vh;
`;

const StyledInSideWrapper = styled.div`
  min-height: 94vh;
  width: 92%;
  position: relative;
  top: 3vh;
  left: 4%;
  background: white;
  border-radius: 10px;
`;

const StyledCanNotWrapper = styled.div`
  display: none;
  ${media.tablet`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0%;
    background: white;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 2.5rem;
  width: 80%;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

// eslint-disable-next-line
const MainTemplate = ({ children, statusOfApi, finallyActionApi, getNewDataApi }) => {
  if (statusOfApi) {
    finallyActionApi(false);
    getNewDataApi(true);
    return <Redirect to="/todo" />;
  }

  return (
    <>
      <StyledCanNotWrapper>
        <StyledP>
          Witaj drogi użytkowniku, cieszę się że tu jesteś, ale prosił bym cię abyś odplił
          aplikacjie na telefonie. Ale nie mart się już niedługo będzie na wszystko.
        </StyledP>
      </StyledCanNotWrapper>
      <StyledMainWrapper>
        <StyledInSideWrapper>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledInSideWrapper>
      </StyledMainWrapper>
    </>
  );
};

MainTemplate.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired,
};

const mapActionToProps = {
  finallyActionApi: finallyActionAPI,
  getNewDataApi: getNewData,
};

const mapStateToProps = state => ({
  statusOfApi: state.statusOfApi,
});

export default connect(
  mapStateToProps,
  mapActionToProps,
)(MainTemplate);
