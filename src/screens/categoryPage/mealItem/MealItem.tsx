import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { FunctionComponent, useState } from 'react'
import mailPhote from '../../../../assets/img/mealPhote.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { CartModel } from '../../../model/CartModel';
import { addToCart, getTotals } from '../../../redux/cartSlice';


const MealItem: FunctionComponent = () => {
    const navigation = useNavigation(); 
    const [quantity, SetQuantity] = useState<number>(1);
    const id = Math.floor(Math.random() * 10);

    const handleControl = (direction: string) =>{

        if(direction === 'increase'){
            if(quantity <= 99){
                SetQuantity((currentQuantity) => currentQuantity + 1);
                
            }
            
        }
        else if(direction === 'decrease'){
            if(quantity >= 2){
                SetQuantity((currentQuantity) => currentQuantity - 1);
            }
        }
    }

    const selectedItems = () => {
  
        if(quantity){
            dispatch(addToCart({...singleFood} ))
            dispatch(getTotals())
        //   SetQuantity(1);
        } else{
        //   toast.error(`Please add quantity on ${singleFood.name}`, {
        //     position: "bottom-left",
        //   });
        }
        
      }


    const singleFood:CartModel =
  {
    id: 1,
    cartQuantity:quantity,
    quantity:quantity,
    name: 'Asian Chicken Fried Rice Combo',
    price: 10.20,
    desc: 'A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.',
    nutricion: ['Calories 656', 'Carbs 656','Protein 656', 'Fat 656', 'Fiber 653', 'Sodium 656'],
    ingredients: 'A delicious twist on a classical favorite packed with lean protein'

  };


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
                            <AntDesign 
                            name="minuscircle" 
                            type="ionicon" 
                            style={styles.headerButtomIcon}
                            onPress={()=>handleControl('decrease')}
                           
                            />
                        </TouchableOpacity>
                        <Text style={styles.number}>{quantity}</Text>
                        <TouchableOpacity>
                            <AntDesign 
                            name="pluscircle" 
                            type="ionicon" 
                            style={styles.headerButtomIcon}
                            onPress={()=>
                            //    { 
                                // handleControl('increase')
                                selectedItems()
                            // }
                            }
                            />
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

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
