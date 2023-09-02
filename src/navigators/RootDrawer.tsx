import React, {FunctionComponent} from 'react'

// react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryPage from '../screens/categoryPage/CategoryPage';
import Welcome from '../screens/sign/Welcome';
import Signin from '../screens/sign/Signin';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from '../componets/CustomDrawerContent';
import { ForgoPasswordStackNavigator, ResetPasswordStackNavigator, RootStackParamList, SigninStackNavigator, SignUpStackNavigator } from './RootStack';
import TabNavigator from './TabNavigator';
import Adresses from '../screens/adresses/Adresses';
import CheckoutInfo from '../screens/checkout/CheckoutInfo';


const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const RootDrawer: FunctionComponent = () =>{
    return (
        <NavigationContainer>
           <Drawer.Navigator 
           initialRouteName="Welcome"
           screenOptions={{
            headerShown: false,
            swipeEnabled: false,
            // gestureEnabled: false
          }}
        //   drawerContent={props => <DrawerContent {...props}/>}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
           
                <Drawer.Screen 
                    name='Home'
                    component={TabNavigator}
                    
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
                    component={SigninStackNavigator}
                />

                <Drawer.Screen 
                    name='SignUp'
                    component={SignUpStackNavigator}
                />

                <Drawer.Screen 
                    name='ForgotPassword'
                    component={ForgoPasswordStackNavigator}
                />

                <Drawer.Screen 
                    name='ResetPassword'
                    component={ResetPasswordStackNavigator}
                />
                 
                <Drawer.Screen 
                    name='CheckoutInfo'
                    component={CheckoutInfo}
                />
                  
            </Drawer.Navigator> 
        </NavigationContainer>
    )
}

export default RootDrawer;