import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const StyledMainTemplate = styled.div`
  width: 100%;
`;

class ShowDoneTodoOneTemplate extends Component{

  componentDidMount(){
    const { id } = this.props.match.params;
    const userId = sessionStorage.getItem('key');

    axios
      .get(`https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/day`, {
        params: {
          id,
          userId,
        },
      })
      .then(res => {
        console.log(res);
      });
  }

  render(){
    return(
      <StyledMainTemplate>
        <h1>cos tam</h1>
      </StyledMainTemplate>
    )
  }
};

export default ShowDoneTodoOneTemplate;
