import { StyleSheet, View} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider } from 'react-native-elements/dist/divider/Divider';

const DrawerContent = (props:any | undefined) => {

    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                          <View>
                              <Avatar.Image
                                  source={require('../../../assets/img/user.png')}
                                  size={50}
                              />
                          </View>
                          <View>
                              <Title style={styles.title}>Ramon Morban</Title>
                              <Caption style={styles.caption}>Administrator</Caption>
                          </View>
                  </View>
                  <Divider width={1} style={{marginTop:20}}/>
                  <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name="view-dashboard" 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='DASHBOARD'
                      onPress={() =>{props.navigation.navigate('Dashboard')}}
  
                  />
                   <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name="map-marker" 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='AREA / LOCATION'
                      onPress={() =>{props.navigation.navigate('Area / Location')}}
  
                  />
                   <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name="garage" 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='EQUIPMENT'
                      onPress={() =>{props.navigation.navigate('Equipment')}}
  
                  />
                   <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name="calendar-month" 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='MAINTENANCE'
                      onPress={() =>{props.navigation.navigate('Maintenance')}}
  
                  />
                   <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name='note-plus' 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='WORK ORDER'
                      onPress={() =>{props.navigation.navigate('Work Order')}}
  
                  />
                   <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name="currency-usd" 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='FIXED COSTS'
                      onPress={() =>{props.navigation.navigate('Fixed Costs')}}
  
                  />
                   <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name="clock-time-five" 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='HISTORY'
                      onPress={() =>{}}
  
                  />
                   <DrawerItem 
                      icon={({color, size}) => (
                          <Icon 
                              name="cog" 
                              color={color}
                              size={size}
                      />
  
                              )}
                      label='Settings'
                      onPress={() =>{props.navigation.navigate('Settings')}}
  
                  />
                  </Drawer.Section>
  
              </View>
        </DrawerContentScrollView>
  
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
              icon={({color, size}) => (
                  <Icon 
                      name="exit-to-app" 
                      color={color}
                      size={size}
                  />
  
              )}
              label='Sign Out'
              onPress={() =>{props.navigation.navigate('Signin')}}
  
            />
        </Drawer.Section>
      </View>
    )
  }
  
  export default DrawerContent
  
  const styles = StyleSheet.create({
  
      drawerContent: {
          flex: 1,
        },
        userInfoSection: {
          alignItems: 'center',
        },
        title: {
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold',
          color: '#3C3C3C'
        },
        caption: {
          fontSize: 14,
          lineHeight: 14,
          color: '#57C9D5',
          paddingLeft:10
  
        },
        row: {
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
        section: {
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15,
        },
        paragraph: {
          fontWeight: 'bold',
          marginRight: 3,
        },
        drawerSection: {
          marginTop: 15,
        },
        bottomDrawerSection: {
            marginBottom: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
        },
        preference: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
        },
  })