import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: ${({ theme }) => theme.space.ml};
`;
