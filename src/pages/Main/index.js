import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../services/api';

import { Container, Form, Input, SubmitButton, List,
         Repos, Avatar, Name, Title, ProfileButton, ProfileButtonText
} from './styles';


export default class Main extends Component {

    state = {
        newRepos: '',
        repos: [],
    };

    handleSubmit = async () => {
        const { repos, newRepos } = this.state;

        const response = await api.get(`/repos/${newRepos}/vagas/issues`);

        const arr= [];
    
        for (var i = 0; i < response.data.length; i++) {

            arr[i] = response.data[i].title;
      
         }

         this.setState({
            repos: arr,
            newRepos: '',
         });

         console.log('logcat  ' + arr + '\n');

         
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

            
            {/*
              * Parte de listagem não funciona ainda
            
            
            */ }
           
      


            </Container>
        );
    }
    
}

Main.navigationOptions = {
    title: 'Github Jobs',
}