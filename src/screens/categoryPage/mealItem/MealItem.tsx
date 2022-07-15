import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

import mailPhote from '../../../../assets/img/mealPhote.png'
const MealItem = () => {
  return (
    <TouchableOpacity  style={styles.container}>
        <View style={styles.wrapper}>
            <Image source={mailPhote} />
            <View style={styles.headerButtomContainer}>
                <View style={styles.headerButtomTextContainer}>
                   <Text style={styles.headerButtomText}>$10.99 / Meal</Text>
                </View>
                <View style={styles.buttom}>
                    <Text style={styles.buttomItem}>-</Text>
                    <Text>1</Text>
                    <Text style={styles.buttomItem}>+</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10,
    },
    wrapper: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft:5,
        marginRight:5,
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        backgroundColor: '#fff',
        // backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 363,
        height: 126,
        padding:15,
        marginBottom:25,
        
    },
    headerButtomContainer:{
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: 230,

    },
    headerButtomTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        width: 120,
    },
    headerButtomText:{
        fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#FF6F00',
        
    },buttom:{
        display: 'flex',
        flexDirection: 'row',
        
    },
    buttomItem:{
        marginLeft:10,
        marginRight:10,
    }
})