import styled from 'styled-components/native';

export const CustomSafeView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.light};
`;
