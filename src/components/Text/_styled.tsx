import styled from 'styled-components/native';

export type StyledTextTypes = {
  type?: 'SMALL' | 'MEDIUM' | 'LARGE' | 'EXTRA_LARGE';
  weight?: 'NORMAL' | 'SEMI' | 'BOLD';
  color?: 'PRIMARY' | 'DARK' | 'LIGHT' | 'DANGER' | 'INFO' | 'SUCCESS';
};

export const StyledText = styled.Text<StyledTextTypes>`
  font-size: ${({type, theme}) => {
    switch (type) {
      case 'EXTRA_LARGE':
        return `${theme.sizes.xl}px`;
      case 'LARGE':
        return `${theme.sizes.lg}px`;
      case 'MEDIUM':
        return `${theme.sizes.md}px`;
      default:
        return `${theme.sizes.md - 2}px`;
    }
  }};
  font-weight: ${({weight}) =>
    weight === 'NORMAL' ? '400' : weight === 'SEMI' ? '500' : '600'};
  color: ${({color, theme}) => {
    switch (color) {
      case 'PRIMARY':
      case 'DARK':
        return theme.colors.dark;
      case 'DANGER':
        return theme.colors.error100;
      case 'SUCCESS':
        return theme.colors.success100;
      case 'LIGHT':
        return theme.colors.light;
      case 'INFO':
        return theme.colors.info100;
      default:
        return theme.colors.dark;
    }
  }};
`;
