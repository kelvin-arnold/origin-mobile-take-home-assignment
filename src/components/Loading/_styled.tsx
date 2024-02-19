import styled from 'styled-components/native';

export const LoadingView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: ${({theme}) => theme.sizes.md}px;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const ActivityIndicator = styled.ActivityIndicator`
  color: ${({theme}) => theme.colors.dark};
`;
