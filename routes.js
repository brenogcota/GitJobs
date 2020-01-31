import { CreateAppContainer, createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './src/pages/Main';
import User from './src/pages/User';

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        User
    }, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000',    
            },
        headerTintColor: '#FFF',
       },
     }
    )

);

export default Routes;