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
import { View, Text, StyleSheet } from 'react-native';
import SingleOrder from '../screens/myOrders/SingleOrder';
import Adresses from '../screens/adresses/Adresses';
import EditAddress from '../screens/adresses/EditAddress';
import NewAddress from '../screens/adresses/NewAddress';
import BookCatering from '../screens/bookCatering/BookCatering';
import Containers from '../screens/containers/Containers';
import ContactUs from '../screens/contactUs/ContactUs';
import Faq from '../screens/faq/Faq';
import Allergic from '../screens/allergic/Allergic';


export type RootStackParamList = {
  Home: undefined;
  Category:undefined;
  Signin: undefined;
  Welcome: undefined;
  Signup: undefined;
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
};


const Stack = createStackNavigator<RootStackParamList>();

export const SigninStackNavigator: FunctionComponent = () =>{
    
    return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
        // gestureEnabled: false
      }}>
        <Stack.Screen name="Signin" component={Signin} />
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
                          <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'center', 
                            alignItems: 'center'}}>
                              <View style={{position: 'relative'}} >
                                  <View style={styles.bellContainer}>
                                    <Text style={styles.textbel}>2</Text>
                                  </View>

                             <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                              </View >
                              <View style={{position: 'relative'}} >
                                  <View style={styles.bellContainer}>
                                    <Text style={styles.textbel}>12</Text>
                                  </View>
                                  <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                  // onPress={() => navigation.goBack()}
                                  />
                              </View>
                          </View>
                         
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
                          <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'center', 
                            alignItems: 'center'}}>
                              <View style={{position: 'relative'}} >
                                  <View style={styles.bellContainer}>
                                    <Text style={styles.textbel}>2</Text>
                                  </View>

                             <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                              </View >
                              <View style={{position: 'relative'}} >
                                  <View style={styles.bellContainer}>
                                    <Text style={styles.textbel}>12</Text>
                                  </View>
                                  <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                  // onPress={() => navigation.goBack()}
                                  />
                              </View>
                          </View>
                         
                        ),
          }}
        name="Category" component={CategoryPage} />
        <Stack.Screen 
         options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#fff" style={{marginLeft: 10}}
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

                 <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#fff" style={{marginRight: 20}}
                    // onPress={() => navigation.goBack()}
                    />
                  </View >
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>12</Text>
                      </View>
                      <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#fff" style={{marginRight: 20}}
                      // onPress={() => navigation.goBack()}
                      />
                  </View>
              </View>
             
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
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>2</Text>
                      </View>

                 <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                    // onPress={() => navigation.goBack()}
                    />
                  </View >
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>12</Text>
                      </View>
                      <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                      // onPress={() => navigation.goBack()}
                      />
                  </View>
              </View>
             
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
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>2</Text>
                      </View>

                 <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#000" style={{marginRight: 20}}
                    // onPress={() => navigation.goBack()}
                    />
                  </View >
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>12</Text>
                      </View>
                      <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#000" style={{marginRight: 20}}
                      // onPress={() => navigation.goBack()}
                      />
                  </View>
              </View>
             
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
    <Stack.Navigator
    screenOptions={{
        headerShown: true,
        // gestureEnabled: false
      }}>
        <Stack.Screen name="Wellness" component={Wellness} />
      </Stack.Navigator>
    )
}


export const MyProfilestackNavigator: FunctionComponent = () =>{
    const navigation = useNavigation(); 
    return (
    <Stack.Navigator
    screenOptions={{
        headerShown: true,
        // gestureEnabled: false
      }}>
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    )
}

export const AdressesStackNavigator: FunctionComponent = () =>{
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
                        <View style={{
                          flexDirection: 'row', 
                          justifyContent: 'center', 
                          alignItems: 'center'}}>
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>2</Text>
                                </View>

                           <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                              // onPress={() => navigation.goBack()}
                              />
                            </View >
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>12</Text>
                                </View>
                                <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                            </View>
                        </View>
                       
                      ),
                    }}
      name="Adresses" component={Adresses} />
      <Stack.Screen 
          options ={({ navigation, route }) => ({
            headerLeft: () =>(
              <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
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

                 <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#000" style={{marginRight: 20}}
                    // onPress={() => navigation.goBack()}
                    />
                  </View >
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>12</Text>
                      </View>
                      <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#000" style={{marginRight: 20}}
                      // onPress={() => navigation.goBack()}
                      />
                  </View>
              </View>
             
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
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>2</Text>
                      </View>

                 <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#000" style={{marginRight: 20}}
                    // onPress={() => navigation.goBack()}
                    />
                  </View >
                  <View style={{position: 'relative'}} >
                      <View style={styles.bellContainer}>
                        <Text style={styles.textbel}>12</Text>
                      </View>
                      <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#000" style={{marginRight: 20}}
                      // onPress={() => navigation.goBack()}
                      />
                  </View>
              </View>
             
            ),
            // headerTransparent:true,
            title: "New adress",
            
          })}
        name="NewAddress" component={NewAddress} />

    </Stack.Navigator>
  )
}

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
                        <View style={{
                          flexDirection: 'row', 
                          justifyContent: 'center', 
                          alignItems: 'center'}}>
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>2</Text>
                                </View>

                           <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                              // onPress={() => navigation.goBack()}
                              />
                            </View >
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>12</Text>
                                </View>
                                <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                            </View>
                        </View>
                       
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
                        <View style={{
                          flexDirection: 'row', 
                          justifyContent: 'center', 
                          alignItems: 'center'}}>
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>2</Text>
                                </View>

                           <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                              // onPress={() => navigation.goBack()}
                              />
                            </View >
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>12</Text>
                                </View>
                                <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                            </View>
                        </View>
                       
                      ),
        }}
      name="Containers" component={Containers} />
     
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
                        <View style={{
                          flexDirection: 'row', 
                          justifyContent: 'center', 
                          alignItems: 'center'}}>
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>2</Text>
                                </View>

                           <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                              // onPress={() => navigation.goBack()}
                              />
                            </View >
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>12</Text>
                                </View>
                                <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                            </View>
                        </View>
                       
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
                        <View style={{
                          flexDirection: 'row', 
                          justifyContent: 'center', 
                          alignItems: 'center'}}>
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>2</Text>
                                </View>

                           <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                              // onPress={() => navigation.goBack()}
                              />
                            </View >
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>12</Text>
                                </View>
                                <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                            </View>
                        </View>
                       
                      ),
        }}
      name="Faq" component={Faq} />
     
    </Stack.Navigator>
  )
}

export const AllergicStackNavigator: FunctionComponent = () =>{
  const navigation = useNavigation(); 
  return (
  <Stack.Navigator>
      <Stack.Screen 
      
       options ={{
        title: "Allergic Preferences",
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
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>2</Text>
                                </View>

                           <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
                              // onPress={() => navigation.goBack()}
                              />
                            </View >
                            <View style={{position: 'relative'}} >
                                <View style={styles.bellContainer}>
                                  <Text style={styles.textbel}>12</Text>
                                </View>
                                <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
                                // onPress={() => navigation.goBack()}
                                />
                            </View>
                        </View>
                       
                      ),
        }}
      name="Allergic" component={Allergic} />
     
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
  }
})