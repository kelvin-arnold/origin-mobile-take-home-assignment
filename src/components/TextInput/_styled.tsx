import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  height: ${({theme}) => theme.base.spacing * 12}px;
  border-radius: ${({theme}) => theme.sizes.md}px;
  padding-left: ${({theme}) => theme.sizes.sm}px;
  padding-right: ${({theme}) => theme.sizes.sm}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.dark};
`;
