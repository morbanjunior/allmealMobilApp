import * as React from 'react';
import { View, Text, Button, StyleSheet , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import user from '../../assets/img/user.png'

export function CustomDrawerContent(props: DrawerContentComponentProps) {
    const navigation = useNavigation(); 

    return (
     <View style={{flex:1, marginTop: -20}}>
        <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
               <View style={styles.topSection}>
                  <AntDesign 
                  name="close"
                  type="ionicon" 
                  color="#000" 
                  onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
                  style={styles.iconClose}/>
                       
                </View>
          <View style={styles.userInfoSection}>
               <Image source={user}/>
               <View style={styles.userInfoDetails}>
                    <Text style={styles.textName}>Marco Williams</Text>
                    <Text style={styles.textEmail}>marcowilliams@allmealprep.com</Text>
               </View>
          </View>
          <Divider width={1} style={{marginTop:20}}/>
        
        <View style={styles.items}>

        <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="clipboard-list-outline" 
                color={color}
                size={size} />
               )}

            label="My Orders"
            onPress={() =>{props.navigation.navigate('MyOrders')}}
            />

          <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="badge-account-horizontal-outline" 
                color={color}
                size={size} />
               )}

            label="Adresses"
            onPress={() =>{props.navigation.navigate('Adresses')}}
            />
          <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="food-takeout-box-outline" 
                color={color}
                size={size} />
               )}

            label="Book Catering"
            onPress={() =>{props.navigation.navigate('BookCatering')}}
            />

          <DrawerItem
          icon={(
            {color, size}
          ) => (
            <AntDesign 
                name="CodeSandbox" 
                color={color}
                size={size} />
               )}

            label="Containers"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
            <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="hand-heart-outline" 
                color={color}
                size={size} />
               )}

            label="Donate"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
            <DrawerItem
          icon={(
            {color, size}
          ) => (
            <AntDesign 
                name="wallet" 
                color={color}
                size={size} />
               )}

            label="Digital Wallet"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
            <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="help-circle-outline" 
                color={color}
                size={size} />
               )}

            label="FAQ"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
            <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="wallet-giftcard" 
                color={color}
                size={size} />
               )}

            label="Gift Card"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
            <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="spa-outline" 
                color={color}
                size={size} />
               )}

            label="Nutrition Packages"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
            <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="truck-outline" 
                color={color}
                size={size} />
               )}

            label="Pickup Glasssware"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
            <DrawerItem
          icon={(
            {color, size}
          ) => (
            <FontAwesome 
                name="dollar" 
                color={color}
                size={size} />
               )}

            label="Refer & Earn"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
        <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="dots-horizontal" 
                color={color}
                size={size} />
               )}

            label="Password"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />

        </View>
        <Divider width={1} />
        <View style={styles.items}>
        <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="email-outline" 
                color={color}
                size={size} />
               )}

            label="Contact Us"
            onPress={() =>{props.navigation.navigate('Dashboard')}}
            />
        </View>
        <Divider width={1} />
         <View style={styles.bottomLink}>
            <Text>www.allmealprep.com</Text>
            <View style={styles.bottomSocial}>
                <Material name="instagram" style={styles.social}/>
                <Material name="facebook" style={styles.social}/>
                
            </View>
        </View>
        </View>
        </DrawerContentScrollView>

    </View>
    );
  }

  const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
        padding:20,
      },
      topSection:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

      },iconClose:{
        fontSize:24,
    },
    
      userInfoSection: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      userInfoDetails:{
        marginLeft: 8,
      },
      textName:{
        // fontFamily: 'Poppins',
        color: '#262626',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
      },
      textEmail:{
        // fontFamily: 'Poppins',
        color: '#262626',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 30,
        letterSpacing: 0.15,
      },
      items:{
        marginLeft: -15,
      },
      bottomLink:{
        display:'flex',
        flexDirection: 'row',
        marginTop:5,
        alignItems: 'center',
        justifyContent: 'space-between',
      }
      ,
      bottomSocial:{
        display:'flex',
        flexDirection: 'row',
        marginTop:10,
      },
      social:{
        marginLeft:5,
        marginRight:5,
        fontSize:21,
      }
})