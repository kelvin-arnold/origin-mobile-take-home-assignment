import styled from 'styled-components/native';

export type StyledButtonProps = {
  type?: 'DARK' | 'LIGHT' | 'LINK';
  size?: 'SMALL' | 'MEDIUM';
};

export const ButtonWrapper = styled.TouchableOpacity<StyledButtonProps>`
  opacity: ${({disabled}) => (disabled ? '.5' : '1')};
  background-color: ${({type, theme}) =>
    type === 'DARK'
      ? theme.colors.light
      : type === 'LINK'
      ? 'transparent'
      : theme.colors.dark};
  padding-left: ${({theme}) => theme.sizes.md}px;
  padding-right: ${({theme}) => theme.sizes.md}px;
  border-radius: ${({theme}) => theme.radius}px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({size, theme}) =>
    size === 'SMALL' ? theme.sizes.xl : theme.sizes.xxxl}px;
`;

export const ButtonText = styled.Text<StyledButtonProps>`
  color: ${({type, theme}) =>
    type === 'DARK' || type === 'LINK'
      ? theme.colors.dark
      : theme.colors.light};
  font-weight: 600;
`;
