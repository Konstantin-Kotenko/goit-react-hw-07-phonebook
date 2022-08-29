import styled from 'styled-components';

export const FirstHeader = styled.h1`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SecondHeader = styled.h2`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
