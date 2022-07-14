import React, {FunctionComponent} from 'react'

// react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/dashboard/Dashboard';
import CategoryPage from '../screens/categoryPage/CategoryPage';
import Welcome from '../screens/sign/Welcome';
import Signin from '../screens/sign/Signin';

export type RootStackParamList = {
    Dashboard: undefined;
    Category:undefined;
    Signin: undefined;
    Welcome: undefined;
    Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () =>{
    return (
        <NavigationContainer>
           <Stack.Navigator 
           initialRouteName="Welcome"
           screenOptions={{
            headerShown: false,
            // swipeEnabled: false,
            gestureEnabled: false
          }}
           
           >
                <Stack.Screen 
                    name='Dashboard'
                    component={Dashboard}
                    
                />

                <Stack.Screen 
                    name='Category'
                    component={CategoryPage}
                />
                 <Stack.Screen 
                    name='Welcome'
                    component={Welcome}
                />
                  <Stack.Screen 
                    name='Signin'
                    component={Signin}
                />
                  <Stack.Screen 
                    name='Signup'
                    component={Welcome}
                />
            </Stack.Navigator> 
        </NavigationContainer>
    )
}

export default RootStack;