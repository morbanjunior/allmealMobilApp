import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { FunctionComponent } from 'react'
import mailPhote from '../../../../assets/img/mealPhote.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/RootDrawer';
import { useNavigation } from '@react-navigation/native';


const MealItem: FunctionComponent = () => {
    const navigation = useNavigation(); 

  return (
    <TouchableOpacity  style={styles.container}

     onPress={()=>navigation.navigate('MealItemPage')}
    >
        <View style={styles.wrapper}>
            <Image source={mailPhote} />
           <View style={styles.ButtomContainer}>
                 <View style={styles.headerButtomContainer}>
                    <View style={styles.headerButtomTextContainer}>
                    <Text style={styles.headerButtomText}>$10.99 / Meal</Text>
                    </View>
                    <View style={styles.buttom}>
                        <TouchableOpacity>
                            <AntDesign name="minuscircle" type="ionicon" style={styles.headerButtomIcon}/>
                        </TouchableOpacity>
                        <Text style={styles.number}>1</Text>
                        <TouchableOpacity>
                            <AntDesign name="pluscircle" type="ionicon" style={styles.headerButtomIcon}/>
                        </TouchableOpacity>
                    
                    </View>
                </View>
                <Text style={styles.headerText}>Blackened Grilled Chicken</Text>
                <Text style={styles.headerTextp}>Makes for the perfect protein-loaded energizing breakfast to get the day started!</Text>
               
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
        width: 343,
        height: 126,
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
        width: 120,
    },
    headerButtomText:{
        // fontFamily: 'Poppins',
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
    }
})