import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWidth, secundaryColor } from '../../componets/shared'
import { TextInput } from 'react-native-gesture-handler'
import ContainersItem from './ContainersItem'

const Containers = () => {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.search}>
                <TextInput style={styles.input} placeholder='Search Containers'/>
            </View>
            <View>
            <ContainersItem/>
            <ContainersItem/>
            </View>
        </View>
    </View>
  )
}

export default Containers

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: secundaryColor,
        
      },
      wrapper:{
        // backgroundColor: '#000',
        width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center'
      },
    search:{
        width: '100%',
        marginBottom: 20,
    },
    input:{
        padding:20,
        marginTop:10,
        borderWidth: 0.5,
        borderRadius:5,
        borderColor:'rgba(0, 0, 0, 0.12)'
    }

})