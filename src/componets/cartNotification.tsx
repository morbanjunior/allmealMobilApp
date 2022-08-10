import { View, Text } from 'react-native'
import React from 'react'

const cartNotification = () => {
  return (
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
                <Text style={styles.textbel}>{totalQuantity}</Text>
              </View>
              <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
              onPress={() => navigation.navigate('MyCart')}
              />
          </View>
      </View>
  )
}

export default cartNotification