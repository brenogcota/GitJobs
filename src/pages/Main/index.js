import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../services/api';

import { Container, Form, Input, SubmitButton, List,
         Repos, Avatar, Name, Title, ProfileButton, ProfileButtonText
} from './styles';

import logo from '../../assets/logo.png';

export default class Main extends Component {

    state = {
        newRepos: '',
        repos: [],
    };

    handleSubmit = async () => {
        const { repos, newRepos } = this.state;

        const response = await api.get(`/repos/${newRepos}/vagas/issues?state=open`);

        const data = {
            title: response.data.title,
            login: response.data.login,
            avatar: response.data.avatar_url,
        }

        this.setState({
            repos: [...repos, data],
            newRepos: '',
        });

        Keyboard.dismiss();
    };

    render(){

        const { repos, newRepos } = this.state; 

        return (
            <Container>
              <Form>
                  <Input 
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Buscar Vagas"
                    value={newRepos}
                    onChangeText={text => this.setState({ newRepos: text })}
                    returnKeyType="send"
                    onSubmitEditing={this.handleSubmit}
                  />
                  <SubmitButton onPress={this.handleSubmit}>
                    <Icon name="github" size={25} color="#000" />
                  </SubmitButton>
              </Form>

              <List
                data={repos}
                keyExtractor={repos => repos.login}
                renderItem={({ item }) => {
                    <Repos>
                        <Avatar source={{ uri: item.avatar }} />
                        <Name>{ item.login }</Name>
                        <Title>{ item.title }</Title>
                        <ProfileButton onPress={() => {}}>
                            <ProfileButtonText>
                                Ver vaga
                            </ProfileButtonText>
                        </ProfileButton>

                    </Repos>
                }}
              /> 


                

            </Container>
        );
    }
    
}

Main.navigationOptions = {
    title: 'GitHub',
}