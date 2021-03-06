import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #444;
`;

export const Repos = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    margin-top: 20px;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 16px;
    color: #ccc;
    font-weight: bold;
    margin-top: 8px;
    text-align: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    line-height: 18px;
    color: #FFF;
    margin-top: 12px;
    text-align: center;
`;

export const Bio = styled.Text`
    font-size: 14px;
    line-height: 18px;
    color: #FFF;
    margin-top: 36px;
    text-align: center;
`;
