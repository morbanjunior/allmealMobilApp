import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TopMenu from '../../../componets/topMenu/TopMenu'
import TopMenuCategoryItem from '../../../componets/topMenu/TopMenuCategoryItem'
import AntDesign from 'react-native-vector-icons/AntDesign';

const itemsProps=[1,2,3,4,5,6]

const MealItemPage = () => {
  return (
    
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <ImageBackground source={
        require('../../../../assets/img/meailMenu.png')} 
        resizeMode="cover"
        style={styles.img}
        >
        </ImageBackground>
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.containerMeal}>
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
                        <Image style={{marginTop: 20}} source={require('../../../../assets/img/minilogo.png')} />
                    </View>
                    <View style={styles.containerDetails}>
                        <View style={styles.headerDetails}>
                            <Image source={require('../../../../assets/img/fork.png')} style={{marginRight:10}}/>
                            <Text style={styles.bottomText}>Nutrition Facts</Text>
                        </View>

                        <View style={styles.containersubItems}>
                                {
                                    itemsProps.map((item, index)=>(
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsText}>377.0 g</Text>
                                            <Text style={styles.subItemsTextSecond}>Calories</Text>
                                        </View>
                                    ))
                                }
                            </View>
                    </View>
                    <View style={styles.containerDetails}>
                        <View style={styles.headerDetails}>
                            <Image source={require('../../../../assets/img/huevo.png')} style={{marginRight:10}}/>
                            <Text style={styles.bottomText}>Ingrediends</Text>
                        </View>

                        <View style={styles.containersubItems}>
                                {
                                    itemsProps.map((item, index)=>(
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsTextSecond}>Potatoes (oz)</Text>
                                        </View>
                                    ))
                                }
                            </View>
                    </View>
                    
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default MealItemPage

const styles = StyleSheet.create({

    
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    img:{
        height: 228,
    },
    containerMeal:{
      backgroundColor:'#fff',
      position: 'absolute',
      width: 342,
      height: 169,
      borderRadius: 8,

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 2,
    }
    ,
    headerButtomContainer:{
        // marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: 300,

    },
    headerButtomTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        width: 128,
        alignItems: 'center'
    },
    headerButtomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#FF6F00',
        
    },
    bottomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#000',
        
    }
    ,
    buttom:{
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
       padding: 20,
        width: 350,
    },
    containerDetails:{
        marginTop:20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    headerDetails:{
    //   marginTop:8,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    containersubItems:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:10,
        justifyContent: 'flex-start',
    },
    subItems:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        alignItems: 'center',
        margin:5, 
        flexDirection: 'row', 
        justifyContent: 'center',
        width: 111,
        height: 32,
        
    },
    subItemsText:{
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#F26E21',
        marginRight: 5,
    },
    subItemsTextSecond:{
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#000',
    }

})