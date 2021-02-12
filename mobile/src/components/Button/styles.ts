import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 60px;

  margin: 8px 0;

  background: #ff9000;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;
