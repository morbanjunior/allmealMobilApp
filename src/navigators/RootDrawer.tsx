import React, {FunctionComponent} from 'react'

// react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryPage from '../screens/categoryPage/CategoryPage';
import Welcome from '../screens/sign/Welcome';
import Signin from '../screens/sign/Signin';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from '../componets/CustomDrawerContent';
import { AdressesStackNavigator, RootStackParamList } from './RootStack';
import TabNavigator from './TabNavigator';
import Adresses from '../screens/adresses/Adresses';


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

export default RootDrawer;