import React, { Component } from 'react';
import { Keyboard,  SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../services/api';

import { Container, Form, Input, SubmitButton, Bio,
         Repos, Avatar, Name, Title, ProfileButton, ProfileButtonText
} from './styles';


export default class Main extends Component {

    static navigationOptions = {
        title: 'Github Jobs',
    };

    static propTyps = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        newRepos: '',
        repos: [],
    };

    handleSubmit = async () => {

        const { repos, newRepos } = this.state;

        const response = await api.get(`/repos/${newRepos}/vagas/issues`);

        const arr = [{}];

    
        for (var i = response.data.length -1; i >= 0 ; i--) {

            const userRef = response.data[i].user;

            arr[i] = {
                title: response.data[i].title,
                body: response.data[i].body,
                login: userRef.login,
                avatar: userRef.avatar_url,
            };

            /*
                *Os dados são retornados porém ainda não são listados na tela da forma correta
            */

         }


         this.setState({
            repos: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], arr[10],
                    arr[11], arr[12], arr[13], arr[14], arr[15], arr[16], arr[17], arr[18], arr[19], arr[20],
                    arr[21], arr[22], arr[23], arr[24], arr[25], arr[26], arr[27], arr[28], arr[29], arr[20]
                   ],
            newRepos: '',
        });

         console.log('logcat  ' + response.data.length);

         
        Keyboard.dismiss();
    };


    handleNavigate = (repo) => {
        const { navigation } = this.props;

        navigation.navigate('User', { repo });
    }

    render(){

        const { repos, newRepos } = this.state;

        return (
            <Container>
              <Form>
                  <Input 
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Busque por frontendbr ou backend-br"
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

            

            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                     { repos.map(repo => (
                        <Repos>
                            <Avatar source={{ uri: repo.avatar }} />
                            <Name>{ repo.login }</Name>
                            <Title>
                                {repo.title}
                            </Title>
                            <Bio>
                                {repo.body}
                            </Bio>
                            <ProfileButton onPress={ () => {
                                this.handleNavigate(repo)
                              }}
                            >
                                <ProfileButtonText>Ver Vaga</ProfileButtonText>
                            </ProfileButton>
                        </Repos>
                      ))  
                     } 
                 </ScrollView>
            </SafeAreaView>
              
           
      


            </Container>
        );
    }
    
}

