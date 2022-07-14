import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Initial() {
  return (
      <View style={styles.container}>
        <Image source={require('../../../assets/img/logoAMP.png')}/>
      </View>
 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
})