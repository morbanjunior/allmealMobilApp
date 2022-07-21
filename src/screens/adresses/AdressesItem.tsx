import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { FunctionComponent } from 'react'
import mailPhote from '../../../assets/img/mealPhote.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import receipt from '../../../assets/img/receipt.png'
import calendar from '../../../assets/img/calendar.png'
import { ScreenWidth, thirdColor } from '../../componets/shared';

const AdressesItem = () => {
  return (
    <TouchableOpacity  style={styles.container}

     onPress={()=>navigation.navigate('SingleOrder')}
    >
        <View style={styles.wrapper}>
            <View tyle={styles.containerTopButtom}>
              <View style={styles.TopButtom}></View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default AdressesItem

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
        shadowOpacity: 0.3, 
        shadowRadius: 10, 
        shadowOffset: { height: 3, width: 3 },
        elevation: 1.4,
        backgroundColor: '#fff',
        width: ScreenWidth-20,
        height: 170,
        padding:15,
        marginBottom:25,
        
    },
    headerButtomContainer:{
        // marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: 210,

    },
    headerButtomTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',

        marginRight:10,

    },
    headerButtomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#FF6F00',
        
    },
    headerDeliveryText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#000',
        
    }
    
    ,buttom:{
        display: 'flex',
        flexDirection: 'row',
        
    },
    buttomItem:{
        marginLeft:10,
        marginRight:10,
    },
    headerButtomIcon:{
        color: '#FF6F00',
        fontSize: 20,

    },
    number:{
        marginLeft: 10,
        marginRight:10,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
    },
    headerText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        marginTop:5,

    },
    headerTextp:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 15,
        letterSpacing: 0.15,
        marginTop:5,
    },
    ButtomContainer:{
        marginLeft: 10,
        width: 220,
    },
    icon:{
        width: 16,
      height: 16,
      marginRight:5,
    },
    bottomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#000',
        
    },
    containerTopButtom:{
        position: 'relative',
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        // width: '100%'
       
    },
    TopButtom:{
        position: 'absolute',
        backgroundColor: thirdColor,
        width: 50,
        height: 50,
        top:-40

    }
})