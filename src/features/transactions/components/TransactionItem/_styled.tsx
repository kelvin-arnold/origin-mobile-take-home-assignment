import styled from 'styled-components/native';

export const TransactionWrapper = styled.TouchableOpacity`
  padding: 24px 24px 24px 16px;
  width: 100%;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;

export const TransactionImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
  background-color: #cbcbcb;
`;

export const TransactionTouch = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  flex-direction: column;
  background-color: aliceblue;
`;
