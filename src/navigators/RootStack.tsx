import React, {FunctionComponent} from 'react'

// react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/dashboard/Dashboard';
import CategoryPage from '../screens/categoryPage/CategoryPage';
import Welcome from '../screens/sign/Welcome';
import Signin from '../screens/sign/Signin';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParamList = {
    Dashboard: undefined;
    Category:undefined;
    Signin: undefined;
    Welcome: undefined;
    Signup: undefined;
};
const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () =>{
    return (
        <NavigationContainer>
           <Drawer.Navigator 
           initialRouteName="Welcome"
           screenOptions={{
            headerShown: false,
            // swipeEnabled: false,
            // gestureEnabled: false
          }}
           
           >
                <Drawer.Screen 
                    name='Dashboard'
                    component={Dashboard}
                    
                />

                <Drawer.Screen 
                    name='Category'
                    component={CategoryPage}
                />
                 <Drawer.Screen 
                    name='Welcome'
                    component={Welcome}
                />
                  <Drawer.Screen 
                    name='Signin'
                    component={Signin}
                />
                  <Drawer.Screen 
                    name='Signup'
                    component={Welcome}
                />
            </Drawer.Navigator> 
        </NavigationContainer>
    )
}

export default RootStack;