import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #444;
`;

export const Form = styled.View`
    flex-direction: row;
    border-color: #FFF;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#000',
})`
    flex: 1;
    height: 40px;
    background: #FFF;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #FFF;
`;

export const SubmitButton = styled(RectButton)`
   justify-content: center;
   align-items: center;
   background: #eee;
   border-radius: 4px;
   margin-left: 10px;
   padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Repos = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    margin-top: 20px;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #FFF;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #FFF;
    margin-top: 5px;
    text-align: center;
`;

export  const State = styled.Text`
    padding: 0 4px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
    border-radius: 4px;
    background: #5ac18e;
    color: #eee;
    justify-content: center;
    align-items: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 6,
})`
    font-size: 10px;
    line-height: 18px;
    color: #eee;
    margin-top: 10px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #eee;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
`;
