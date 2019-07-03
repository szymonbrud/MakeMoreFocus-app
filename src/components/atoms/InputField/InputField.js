import styled from 'styled-components';
import { Field } from 'formik';

const InputField = styled(Field)`
  width: 70%;
  height: 30px;
  max-width: 230px;
  border: 1px solid ${({ theme }) => theme.blue};
  margin: 5px 0;
  border-radius: 5px;
  padding: 5px;
`;

export default InputField;
