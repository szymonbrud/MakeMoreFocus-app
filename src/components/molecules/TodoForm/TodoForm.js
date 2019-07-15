import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Photos } from 'functions/Names';
import Icon from 'components/Icon/Icon';

const StyledContentInformation = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.ligth_blue};
  height: ${({ status }) => (status ? '200px' : '230px')};
  margin: 10px 0;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

const StyledH1Information = styled.h1`
  color: ${({ theme }) => theme.blue};
  width: 50%;
  margin: 20px 10px 0;
`;

const StyledWrapperForSvg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 22vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIconInformation = styled(Icon)`
  transform: scale(0.1);
`;

const StyledFormInformation = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const StyledInformationP = styled.p`
  color: ${({ theme }) => theme.blue};
  margin: 0 0 10px 0;
`;

const StyledInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInformationInput = styled(Field)`
  background: white;
  border: 1px solid ${({ theme }) => theme.blue};
  width: 47%;
  height: 32px;
  border-radius: 5px;
  text-align: center;
`;

const StyledInformationButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: ${({ theme }) => theme.blue};
  color: white;
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 30%;
`;

// eslint-disable-next-line
const TodoForm = ({ data }) => (
  <Form>
    <StyledContentInformation>
      <StyledH1Information>{data.title}</StyledH1Information>
      <StyledWrapperForSvg>
        <StyledIconInformation src={Photos[data.images]} />
      </StyledWrapperForSvg>
      <StyledFormInformation>
        <StyledInformationP>Ile czasu udało ci się na to poświęcić</StyledInformationP>
        <StyledInformationWrapper>
          <StyledInformationInput as={Field} type="number" name="h" placeholder="godziny" />
          <StyledInformationInput as={Field} type="number" name="m" placeholder="minuty" />
        </StyledInformationWrapper>
      </StyledFormInformation>
      <StyledInformationButton>zapisz</StyledInformationButton>
    </StyledContentInformation>
  </Form>
);

export default TodoForm;
