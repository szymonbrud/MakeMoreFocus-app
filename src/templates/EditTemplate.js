import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteTodo, finallyDeleteTodo } from 'actions';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

const StyledMainTemplate = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const StyledDelete = styled.div`
  background: ${({ theme }) => theme.blue};
  color: white;
  width: 40%;
  height: 50px;
`;

class EditTemplate extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    // eslint-disable-next-line
    const { id } = this.props.match.params;
    const userId = sessionStorage.getItem('key');

    axios
      .get(`http://localhost:9000/day`, {
        params: {
          id,
          userId,
        },
      })
      .then(res => {
        this.setState({ data: res.data.data[0] });
      });
  }

  render() {
    const { data } = this.state;
    // eslint-disable-next-line
    const { deleteTodoApi, deleteTodo, finallyDeleteTodoApi } = this.props;

    // eslint-disable-next-line
    const { id } = this.props.match.params;

    if (deleteTodo) {
      finallyDeleteTodoApi(129);
      return <Redirect to="/todo" />;
    }

    return (
      <StyledMainTemplate>
        {data.length !== 0 ? (
          <>
            <h1>{data.title}</h1>
            <StyledDelete onClick={() => deleteTodoApi(id)}>delete</StyledDelete>
          </>
        ) : null}
      </StyledMainTemplate>
    );
  }
}

const mapActionToProps = {
  deleteTodoApi: deleteTodo,
  finallyDeleteTodoApi: finallyDeleteTodo,
};

const mapStateToProps = state => ({
  deleteTodo: state.deleteTodo,
});

EditTemplate.propTypes = {
  deleteTodoApi: propTypes.func.isRequired,
  deleteTodo: propTypes.bool.isRequired,
  finallyDeleteTodoApi: propTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(EditTemplate);
