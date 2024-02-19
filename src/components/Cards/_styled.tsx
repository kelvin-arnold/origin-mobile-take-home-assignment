import styled from 'styled-components/native';

export type TCardWrapperProps = {
  type?: 'INFO' | 'ERROR' | 'LIGHT';
};

export const CardWrapper = styled.View<TCardWrapperProps>`
  padding: ${({theme}) => theme.sizes.md}px;
  border-radius: ${({theme}) => theme.sizes.sm}px;
  text-align: center;
  align-items: center;
  background-color: ${({type, theme}) => {
    switch (type) {
      case 'INFO':
        return theme.colors.info20;
      case 'ERROR':
        return theme.colors.error20;
      default:
        return theme.colors.gray;
    }
  }};
`;
