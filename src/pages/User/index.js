import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { Container, Bio, Repos, Avatar, Name, Title,
} from './styles';

export default class User extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('repo').login,
    });

    render() {

        const { navigation } = this.props;
        const repos = navigation.getParam('repo');

        return (
           <Container>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>

                        <Repos>
                            <Avatar source={{ uri: repos.avatar }} />
                            <Name>{ repos.login }</Name>
                            <Title>
                                {repos.title}
                            </Title>
                            <Bio>
                                {repos.body}
                            </Bio>
                                
                        </Repos>
                 </ScrollView>
            </SafeAreaView>
           </Container>
        );
    }
}
