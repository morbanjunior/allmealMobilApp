import React, {FunctionComponent} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/dashboard/Dashboard';
import CategoryPage from '../screens/categoryPage/CategoryPage';
import Welcome from '../screens/sign/Welcome';
import Signin from '../screens/sign/Signin';
import MyOrders from '../screens/myOrders/MyOrders';
import Wellness from '../screens/wellness/Wellness';
import MyProfile from '../screens/myProfile/MyProfile';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import MealItemPage from '../screens/categoryPage/mealItem/MealItemPage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SingleOrder from '../screens/myOrders/SingleOrder';
import Adresses from '../screens/adresses/Adresses';
import EditAddress from '../screens/adresses/EditAddress';
import NewAddress from '../screens/adresses/NewAddress';
import BookCatering from '../screens/bookCatering/BookCatering';
import Containers from '../screens/containers/Containers';
import ContactUs from '../screens/contactUs/ContactUs';
import Faq from '../screens/faq/Faq';
import Allergic from '../screens/allergic/Allergic';
import Refer from '../screens/refer/Refer';
import Pickup from '../screens/pickup/Pickup';
import MyCart from '../screens/myCart/MyCart';
import { mainColor, secundaryColor, thirdColor } from '../componets/shared';
import Checkout from '../screens/checkout/Checkout';
import CheckoutInfo from '../screens/checkout/CheckoutInfo';
import SignUp from '../screens/sign/SignUp';
import NutritionPackages from '../screens/nutritionPackages/NutritionPackages';
import GiftCards from '../screens/giftCards/GiftCards';
import NewGift from '../screens/newGift/NewGift';
import Donate from '../screens/donate/Donate';
import Password from '../screens/password/Password';
import PostDetails from '../screens/wellness/PostDetails';
import Wallet from '../screens/wallet/Wallet';
import AmpStore from '../screens/ampStore/AmpStore';
import { useSelector} from 'react-redux'
import {  selectUserData, selectcartTotalQuantity } from '../redux/store';
import CartNotification from '../componets/cartNotification';
import ForgotPassword from '../screens/sign/ForgotPassword';
import ResetPassword from '../screens/sign/ResetPassword';
// import CartNotification from '../componets/CartNotification';



export type RootStackParamList = {
  Home: undefined;
  Category:undefined;
  Signin: undefined;
  Welcome: undefined;
  Signup: undefined;
  ForgotPassword:undefined;
  ResetPassword:undefined;
  MyOrders: undefined;
  SingleOrder:undefined;
  Wellness:undefined;
  MyProfile:undefined;
  MealItemPage:undefined;
  Adresses:undefined;
  EditAddress:undefined;
  NewAddress:undefined;
  BookCatering:undefined;
  Containers:undefined;
  ContactUs:undefined;
  Faq:undefined;
  Allergic:undefined;
  Refer:undefined;
  Pickup:undefined;
  MyCart:undefined;
  Checkout:undefined;
  CheckoutInfo:undefined;
  SignUp:undefined;
  NutritionPackages:undefined;
  GiftCards:undefined;
  NewGift:undefined;
  Donate:undefined;
  Password:undefined;
  PostDetails:undefined;
  Wallet:undefined;
  AmpStore:undefined;
  
};



const Stack = createStackNavigator<RootStackParamList>();

export const SigninStackNavigator: FunctionComponent = () =>{
    
    return (
    <Stack.Navigator 
    screenOptions={{
        // headerShown: false,
        gestureEnabled: false
      }}>
        <Stack.Screen 
        options = {{
          headerShown: false,
        }}
        name="Signin" component={Signin} />
      </Stack.Navigator>
    )
}

export const SignUpStackNavigator: FunctionComponent = () =>{
    
  return (
  <Stack.Navigator 
  screenOptions={{
      // headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen 
         options ={({ navigation, route }) => ({
          headerLeft: () =>(
            <AntDesign name='arrowleft' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.navigate('Signin')}
            />
          ),
          headerTransparent:true,
          title: "",
        })}
      name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export const ForgoPasswordStackNavigator: FunctionComponent = () =>{
    
  return (
  <Stack.Navigator 
  screenOptions={{
      // headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen 
      options = {{
        headerShown: false,
      }}
      name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export const ResetPasswordStackNavigator: FunctionComponent = () =>{
    
  return (
  <Stack.Navigator 
  screenOptions={{
      // headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen 
      options = {{
        headerShown: false,
      }}
      name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  )
}

export const WelcomeStackNavigator: FunctionComponent = () =>{
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        // gestureEnabled: false
      }}>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    )
}


export const DashboardStackNavigator: FunctionComponent = () =>{
    const navigation = useNavigation(); 
    const userData = useSelector(selectUserData);
    const {first_name}=userData
    const totalQuantity = useSelector(selectcartTotalQuantity);
    return (
    <Stack.Navigator>
        <Stack.Screen 
            options ={{
              title:"",
                        headerLeft: () =>(
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
                          backgroundColor='white'
                          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
                          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:20}}>
                              <Text style={styles.textWelcom}>Welcome, </Text>
                              <Text style={styles.textName}>{first_name}</Text>
                          </View>
                          </View>
                        ),
                        headerRight: () =>(
                         <CartNotification/>
                        ),
                      }}
        name="Home" component={Dashboard} />
      </Stack.Navigator>
    )
}

export const CategoryStackNavigator: FunctionComponent = () =>{
    const navigation = useNavigation(); 
    return (
    <Stack.Navigator>
        <Stack.Screen 
        
         options ={{
            headerLeft: () =>(
              <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
            )
            ,headerRight: () =>(
              <CartNotification/>
                        ),
          }}
        name="Category" component={CategoryPage} />
        <Stack.Screen 
         options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#fff" style={{marginLeft: 10}}
              // backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            headerTransparent:true,
            title: "",
            
          })}
        name="MealItemPage" component={MealItemPage} />
      </Stack.Navigator>
    )
}

export const MyOrderstackNavigator: FunctionComponent = () =>{
    const navigation = useNavigation(); 
    return (
    <Stack.Navigator>
        <Stack.Screen 
         options ={{
            headerLeft: () =>(
              <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            title: "My Orders",
          }}
        name="MyOrders" component={MyOrders} />
         <Stack.Screen 
          options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            // headerTransparent:true,
            title: "Order 4100F5",
            
          })}
        name="SingleOrder" component={SingleOrder} />
      </Stack.Navigator>
    )
}

export const WellnessstackNavigator: FunctionComponent = () =>{
    const navigation = useNavigation(); 
    return (
    <Stack.Navigator>
        <Stack.Screen 
          options ={{
            headerLeft: () =>(
              <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
            )
            ,headerRight: () =>(
              <CartNotification/>
                        ),
          }}
        
        name="Wellness" component={Wellness} />
        <Stack.Screen 
         options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#fff" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            headerTransparent:true,
            title: "",
            
          })}
        name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    )
}


export const MyProfilestackNavigator: FunctionComponent = () =>{
    const navigation = useNavigation(); 
    return (
    <Stack.Navigator>
        <Stack.Screen 
       options ={{
        title: "Profile",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <View style={{
              flexDirection: 'row', 
              justifyContent: 'center', 
              alignItems: 'center'}}>
               <TouchableOpacity activeOpacity={.7} style={styles.button}>
                  <Text style={styles.buttonText}>Save</Text>
               </TouchableOpacity>
            </View>
           
          ),
        }}
        name="MyProfile" component={MyProfile} />
         <Stack.Screen 
         options ={({ navigation, route }) => ({
          headerLeft: () =>(
            <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () =>(
            <CartNotification/>
          ),
          // headerTransparent:true,
          title: "Adresses",
          
        })}
      name="Adresses" component={Adresses}  />
      <Stack.Screen 
          options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
             
            ),
            // headerTransparent:true,
            title: "Edit Address",
            
          })}
        name="EditAddress" component={EditAddress} />

      <Stack.Screen 
          options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            // headerTransparent:true,
            title: "New adress",
            
          })}
        name="NewAddress" component={NewAddress} />
      <Stack.Screen 
          options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            // headerTransparent:true,
            title: "Password",
            
          })}
          name="Password" component={Password} />

      <Stack.Screen 
          options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            // headerTransparent:true,
            title: "New adress",
            
          })}
          name="Allergic" component={Allergic} />

      </Stack.Navigator>
    )
}

// export const AdressesStackNavigator: FunctionComponent = () =>{
//   const navigation = useNavigation(); 
//   return (
//   <Stack.Navigator>
//       <Stack.Screen 
//           options ={{
//                       headerLeft: () =>(
//                         <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
//                         backgroundColor='white'
//                         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
//                       ),
//                       headerRight: () =>(
//                         <View style={{
//                           flexDirection: 'row', 
//                           justifyContent: 'center', 
//                           alignItems: 'center'}}>
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>2</Text>
//                                 </View>

//                            <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
//                               // onPress={() => navigation.goBack()}
//                               />
//                             </View >
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>12</Text>
//                                 </View>
//                                 <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
//                                   onPress={() => navigation.navigate('MyCart')}
//                                 />
//                             </View>
//                         </View>
                       
//                       ),
//                     }}
//       name="Adresses" component={Adresses} />
//       <Stack.Screen 
//           options ={({ navigation, route }) => ({
//             headerLeft: () =>(
//               <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
//               backgroundColor='white'
//               onPress={() => navigation.goBack()}
//               />
//             ),
//             headerRight: () =>(
//               <View style={{
//                 flexDirection: 'row', 
//                 justifyContent: 'center', 
//                 alignItems: 'center'}}>
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>2</Text>
//                       </View>

//                  <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#000" style={{marginRight: 20}}
//                     // onPress={() => navigation.goBack()}
//                     />
//                   </View >
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>12</Text>
//                       </View>
//                       <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#000" style={{marginRight: 20}}
//                       onPress={() => navigation.navigate('MyCart')}
//                       />
//                   </View>
//               </View>
             
//             ),
//             // headerTransparent:true,
//             title: "Edit Address",
            
//           })}
//         name="EditAddress" component={EditAddress} />

//       <Stack.Screen 
//           options ={({ navigation, route }) => ({
//             headerLeft: () =>(
//               <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
//               backgroundColor='white'
//               onPress={() => navigation.goBack()}
//               />
//             ),
//             headerRight: () =>(
//               <View style={{
//                 flexDirection: 'row', 
//                 justifyContent: 'center', 
//                 alignItems: 'center'}}>
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>2</Text>
//                       </View>

//                  <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#000" style={{marginRight: 20}}
//                     // onPress={() => navigation.goBack()}
//                     />
//                   </View >
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>12</Text>
//                       </View>
//                       <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#000" style={{marginRight: 20}}
//                       onPress={() => navigation.navigate('MyCart')}
//                       />
//                   </View>
//               </View>
             
//             ),
//             // headerTransparent:true,
//             title: "New adress",
            
//           })}
//         name="NewAddress" component={NewAddress} />

//     </Stack.Navigator>
//   )
// }

export const BookCateringStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Book Catering",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="BookCatering" component={BookCatering} />
     
    </Stack.Navigator>
  )
}

export const ContainersStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Containers",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
             ),
        }}
      name="Containers" component={Containers} />
     
    </Stack.Navigator>
  )
}

export const AmpStoreStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Amp Store",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="AmpStore" component={AmpStore} />
     
    </Stack.Navigator>
  )
}

export const ContactUsStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Contact Us",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="ContactUs" component={ContactUs} />
     
    </Stack.Navigator>
  )
}

export const FaqStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Faq",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="Faq" component={Faq} />
     
    </Stack.Navigator>
  )
}

// export const AllergicStackNavigator: FunctionComponent = () =>{
//   const navigation = useNavigation(); 
//   return (
//   <Stack.Navigator>
//       <Stack.Screen 
//        options ={{
//         title: "Allergic Preferences",
//           headerLeft: () =>(
//             <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
//             backgroundColor='white'
//             onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
//           )
//           ,headerRight: () =>(
//                         <View style={{
//                           flexDirection: 'row', 
//                           justifyContent: 'center', 
//                           alignItems: 'center'}}>
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>2</Text>
//                                 </View>

//                            <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
//                               // onPress={() => navigation.goBack()}
//                               />
//                             </View >
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>12</Text>
//                                 </View>
//                                 <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
//                                 onPress={() => navigation.navigate('MyCart')}
//                                 />
//                             </View>
//                         </View>
                       
//                       ),
//         }}
//       name="Allergic" component={Allergic} />
     
//     </Stack.Navigator>
//   )
// }

export const ReferStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Refer & Earn",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="Refer" component={Refer} />
     
    </Stack.Navigator>
  )
}

export const PickupStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Pickup Glassware",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="Pickup" component={Pickup} />
     
    </Stack.Navigator>
  )
}

export const MyCartStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "My Cart",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
                        <View style={{
                          flexDirection: 'row', 
                          justifyContent: 'center', 
                          alignItems: 'center'}}>
                           <TouchableOpacity activeOpacity={.7} style={styles.button} onPress={()=>navigation.navigate('Checkout')}>
                              <Text style={styles.buttonText}>Checkout</Text>
                           </TouchableOpacity>
                        </View>
                       
                      ),
        }}
      name="MyCart" component={MyCart} />

<Stack.Screen 
         options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#3C3C3C"  style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>2</Text>
                      </View>

                 <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C"  style={{marginRight: 20}}
                    // onPress={() => navigation.goBack()}
                    />
                  </View >
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>12</Text>
                      </View>
                      <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C"  style={{marginRight: 20}}
                      onPress={() => navigation.navigate('MyCart')}
                      />
                  </View>
              </View>
             
            ),
            // headerTransparent:true,
            title: "Checkout",
            
          })}
        name="Checkout" component={Checkout} />
     
    </Stack.Navigator>
  )
}

export const NutritionPackagesStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Nutrition Packages",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="NutritionPackages" component={NutritionPackages} />
     
    </Stack.Navigator>
  )
}

export const CheckoutInfoStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "",
        headerShown: false,
          // headerLeft: () =>(
          //   <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
          //   backgroundColor='white'
          //   onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          // )
          // ,headerRight: () =>(
          //               <View style={{
          //                 flexDirection: 'row', 
          //                 justifyContent: 'center', 
          //                 alignItems: 'center'}}>
          //                   <View style={{position: 'relative'}} >
          //                       <View style={styles.bellContainer}>
          //                         <Text style={styles.textbel}>2</Text>
          //                       </View>

          //                  <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
          //                     // onPress={() => navigation.goBack()}
          //                     />
          //                   </View >
          //                   <View style={{position: 'relative'}} >
          //                       <View style={styles.bellContainer}>
          //                         <Text style={styles.textbel}>12</Text>
          //                       </View>
          //                       <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
          //                       onPress={() => navigation.navigate('MyCart')}
          //                       />
          //                   </View>
          //               </View>
                       
          //             ),
        }}
      name="CheckoutInfo" component={CheckoutInfo} />
     
    </Stack.Navigator>
  )
}

export const GiftCardsStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Gift Cards",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="GiftCards" component={GiftCards} />

<Stack.Screen 
         options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#3C3C3C"  style={{marginLeft: 10}}
              backgroundColor='white'
              onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () =>(
              <CartNotification/>
            ),
            // headerTransparent:true,
            title: "New Gift card",
            
          })}
        name="NewGift" component={NewGift} />
     
    </Stack.Navigator>
  )
}

export const DonateStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Donate",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="Donate" component={Donate} />
     
    </Stack.Navigator>
  )
}

export const PasswordstackNavigator: FunctionComponent = () =>{
    const navigation = useNavigation(); 
    return (
    <Stack.Navigator>
        <Stack.Screen 
       options ={{
        title: "Password",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <View style={{
              flexDirection: 'row', 
              justifyContent: 'center', 
              alignItems: 'center'}}>
               <TouchableOpacity activeOpacity={.7} style={styles.button}>
                  <Text style={styles.buttonText}>Save</Text>
               </TouchableOpacity>
            </View>
           
          ),
        }}
        name="Password" component={Password} />
      </Stack.Navigator>
    )
}

export const WalletStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Digital Wallet",
          headerLeft: () =>(
            <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
            backgroundColor='white'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          )
          ,headerRight: () =>(
            <CartNotification/>
                      ),
        }}
      name="Wallet" component={Wallet} />
     
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  bellContainer:{
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    // padding:5,
    backgroundColor: '#F26E21',
    borderRadius: 30,
    width: 18,
    height: 18,
    position: 'absolute',
    top: -12,
    left: 10,
  },
  textbel:{
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    LineHeight: 16,
    Letter:1.25,
    textAlign: 'center',
  },
  button:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: 92,
    height: 32,
    backgroundColor: mainColor,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 5,
  },
  buttonText:{
    color: secundaryColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    LineHeight: 16,
    Letter:1.25,
    textAlign: 'center',
  },
  textWelcom:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    LineHeight: 16,
    Letter:1.25,
    textAlign: 'center',
  },
  textName:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    LineHeight: 16,
    Letter:1.30,
    textAlign: 'center',
  },
})