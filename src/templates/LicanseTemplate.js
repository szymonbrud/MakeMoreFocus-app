import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const Styledh1 = styled.h1`
  margin: 5%;
`;

const StyledP = styled.p`
  margin: 5%;
`;

const LicanseTemplate = () => (
  <StyledMainWrapper>
    <Styledh1>Warunki użytkowania</Styledh1>
    <StyledP>
      Aktualna wersja aplikacji makeMoreFocus to wersja testowa więc. <br />
      -Twórca aplikacji nie ponosi odpowiedzialności za utratę danych oraz za wszelkie szkody
      powstałe w wyniku użytkowania aplikacji.
      <br /> -użytkownik musi zdawać sobie sprawę iż aplikacja jest w fazie testów i mogą zdarzyć
      się różne błędy a nawet aplikacja może zostać wyłączona na czas nieokreślony.
    </StyledP>
  </StyledMainWrapper>
);

export default LicanseTemplate;
