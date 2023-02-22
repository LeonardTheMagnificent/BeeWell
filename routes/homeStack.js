import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Middle from '../screens/middle';
import Left from '../screens/left';
import Right from '../screens/right';
import Login from '../screens/login';

const screens = {
   
    Middle: {
        screen: Middle
    },
    Login: {
        screen: Login
    },
    Right: {
        screen: Right
    },  
   
    Left: {
        screen: Left
    }, 
      
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
