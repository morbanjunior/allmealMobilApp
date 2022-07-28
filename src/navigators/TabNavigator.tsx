// ./navigation/TabNavigator.js
import React, { FunctionComponent } from "react";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdressesStackNavigator, AllergicStackNavigator, BookCateringStackNavigator, CategoryStackNavigator, CheckoutInfoStackNavigator, CheckoutStackNavigator, ContactUsStackNavigator, ContainersStackNavigator, DashboardStackNavigator, FaqStackNavigator, GiftCardsStackNavigator, MyCartStackNavigator, MyOrderstackNavigator, MyProfilestackNavigator, NutritionPackagesStackNavigator, PickupStackNavigator, ReferStackNavigator, WelcomeStackNavigator, WellnessstackNavigator } from "./RootStack";
import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CustomButtom from "../componets/customButtom/CustomButtom";

// type props = {
//   children: JSX.Element | undefined ,
//   onPress(): void
// };

const Tab = createBottomTabNavigator();

// const CustomTabBarButton: FunctionComponent<props> = ({children, onPress}) =>(
//   <TouchableOpacity
//     style={{
//       top:-10,
//       justifyContent: 'center',
//       alignItems: 'center', 
     
//     }}
//     onPress={onPress}
//   >
//       <View 
//         style={{ 
//         width:67,
//         height:67,
        
//       }}
//       >
//         {children}
//       </View>
//   </TouchableOpacity>
// )

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    
    screenOptions={{
        headerShown: false,
        // gestureEnabled: false
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor: '#262626',
          
        }
      }}
    >
      <Tab.Screen name="Home" component={DashboardStackNavigator} 
        options={{
          tabBarIcon:({focused})=>(
            <View style={{
              justifyContent:'center',
              alignItems:'center',
              top: 10,
            }}>
              <Ionicons name="home-outline" type="ionicon"
              style={{
                fontSize: 25,
                color: focused ? '#FF6F00' : '#fff',
              }}
              />
              <Text 
              style={{
                fontSize: 10,
                color: focused ? '#FF6F00' : '#fff',
                fontFamily: 'Poppins',
                fontWeight: '600',
                lineHeight: 20,
                letterSpacing: 0.15,
              }}
              >Home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="MyOrders" component={MyOrderstackNavigator} 
      options={{
        tabBarIcon:({focused})=>(
          <View style={{
            justifyContent:'center',
            alignItems:'center',
            top: 10,
          }}>
            <MaterialIcons name="list-alt" type="ionicon"
            style={{
              fontSize: 25,
              color: focused ? '#FF6F00' : '#fff',
            }}
            />
            <Text 
            style={{
              fontSize: 10,
              color: focused ? '#FF6F00' : '#fff',
              fontFamily: 'Poppins',
              fontWeight: '600',
              lineHeight: 20,
              letterSpacing: 0.15,
            }}
            >My Orders</Text>
          </View>
        )
      }}
      />
      <Tab.Screen name="Category" component={CategoryStackNavigator} 
        // options={{
        //   tabBarIcon:({focused})=>(
        //     <Image source={require('../../assets/img/menuIcom.png')} 
        //     resizeMode='contain'
        //     style={{
        //       width:67,
        //       height:67,
        //       tintColor: '#fff'
        //     }}/>
        //   ),
        //   tabBarButton: (props) =>(
        //     <CustomTabBarButton {...props}/>
        //   )
        // }}
        options={{
          tabBarIcon:({size, color})=>(
            <CustomButtom />
          )
        }}

      />

      <Tab.Screen name="Wellness" component={WellnessstackNavigator} 
      options={{
        tabBarIcon:({focused})=>(
          <View style={{
            justifyContent:'center',
            alignItems:'center',
            top: 10,
          }}>
            <MaterialIcons name="list-alt"  type="ionicon"
            style={{
              fontSize: 25,
              color: focused ? '#FF6F00' : '#fff',
            }}
            />
            <Text 
            style={{
              fontSize: 10,
              color: focused ? '#FF6F00' : '#fff',
              fontFamily: 'Poppins',
              fontWeight: '600',
              lineHeight: 20,
              letterSpacing: 0.15,
            }}
            >Wellness</Text>
          </View>
        )
      }}
      />
      <Tab.Screen name="MyProfile" component={MyProfilestackNavigator}
      options={{
        tabBarIcon:({focused})=>(
          <View style={{
            justifyContent:'center',
            alignItems:'center',
            top: 10,
          }}>
            <FontAwesome5 name="user-circle" type="ionicon"
            style={{
              fontSize: 25,
              color: focused ? '#FF6F00' : '#fff',
            }}
            />
            <Text 
            style={{
              fontSize: 10,
              color: focused ? '#FF6F00' : '#fff',
              fontFamily: 'Poppins',
              fontWeight: '600',
              lineHeight: 20,
              letterSpacing: 0.15,
            }}
            >My Profile</Text>
          </View>
        )
      }}
      />
      <Tab.Screen 
      name="Adresses" component={AdressesStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />

      <Tab.Screen 
      name="BookCatering" component={BookCateringStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />

      <Tab.Screen 
      name="Containers" component={ContainersStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />   

      <Tab.Screen 
      name="ContactUs" component={ContactUsStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />  
      <Tab.Screen 
      name="Faq" component={FaqStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      /> 

      <Tab.Screen 
      name="Allergic" component={AllergicStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />   

     <Tab.Screen 
      name="Refer" component={ReferStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      /> 

      <Tab.Screen 
      name="Pickup" component={PickupStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      /> 
      <Tab.Screen 
      name="MyCart" component={MyCartStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      /> 

      <Tab.Screen 
      name="NutritionPackages" component={NutritionPackagesStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />

      <Tab.Screen 
      name="GiftCards" component={GiftCardsStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

