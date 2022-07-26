import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import MyItem from './MyItem'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

const item=[1,2,3,4,5]

const MyCart = () => {
    const [checked, Setchecked]= useState('glassware');
    const [bag, Setbag]= useState('bag');
    const [isMembership, setMembership] = useState(true);
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false} style={{width:ScreenWidth, marginBottom:5,}}>
            <View style={styles.viewScroll}>
                {/* scroll */}

                {
                    item.map((item, index)=>(
                        <MyItem/>
                    ))
                }
                <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <MaterialIcons name="takeout-dining" color={mainColor} style={styles.icon}/>
                      <Text style={styles.textDivideFont}>Use reusable glassware</Text>
                    </View>
                        <View style={styles.headerButtomTextContainer}>
                          <Text style={styles.headerButtomText}>$40.00</Text>
                        </View>
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                        <View style={[checked==='glassware' ? styles.radiobutomActive : styles.radiobutom]}>
                            <RadioButton
                                value="glassware"
                                // label="Carto Base MAp"
                                status={checked=== 'glassware' ? 'checked' : 'unchecked'}
                                onPress={() => Setchecked('glassware')}
                                color={mainColor}
                                />
                        </View>
                        
                    <Text style={styles.radioText}>Use reusable glassware</Text>
                    </View>
                          <Text style={styles.radioPriceText}>8x$5.00</Text>
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                        <View style={[checked==='Plastic' ? styles.radiobutomActive : styles.radiobutom]}>
                            <RadioButton
                                value="Plastic"
                                // label="Carto Base MAp"
                                status={checked=== 'Plastic' ? 'checked' : 'unchecked'}
                                onPress={() => Setchecked('Plastic')}
                                color={mainColor}
                                />
                        </View>
                        
                    <Text style={styles.radioText}>Use Plastic</Text>
                    </View>
                         
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                    <MaterialCommunityIcons name="shopping-outline" color={mainColor} style={styles.icon}/>
                      <Text style={styles.textDivideFont}>Bag</Text>
                    </View>
                        <View style={styles.headerButtomTextContainer}>
                          <Text style={styles.headerButtomText}>$5.00</Text>
                        </View>
                    
                </View>
                
                <View style={styles.details}>
                    <Text style={styles.radioDetails}>No. of foods Per bag: 10
                    Bag Price: $5.00
                    Total Foods Count: 8</Text>
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                        <View style={[bag==='bag' ? styles.radiobutomActive : styles.radiobutom]}>
                            <RadioButton
                                value="bag"
                                // label="Carto Base MAp"
                                status={bag=== 'bag' ? 'checked' : 'unchecked'}
                                onPress={() => Setbag('bag')}
                                color={mainColor}
                                />
                        </View>
                        
                    <Text style={styles.radioText}>Use existing Bag</Text>
                    </View>
                          <Text style={styles.radioPriceText}>1x$5.00</Text>
                </View>
                <View style={{marginBottom:20}}>

                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <MaterialIcons name="loyalty" color={mainColor} style={styles.icon}/>
                      <Text style={styles.textDivideFont}>Prime Membership ($119.00)</Text>
                    </View>
                </View>
                <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isMembership}
                         onValueChange={setMembership}
                         style={styles.checkbox}
                         color={isMembership ? mainColor : undefined}
                       />
                        <Text style={styles.radioDetails}>Activate Prime Membership (free delivery for 1 Year)</Text>
                     </View>
                
                {/* End scroll */}
            </View>
        </ScrollView>
         </View>
    </View>
  )
}

export default MyCart

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secundaryColor,
    },
    wrapper:{
        // backgroundColor: '#000',
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center'
      },
      viewScroll:{
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center',
        // padding:1,
        // marginBottom:320,
        marginBottom: 'auto',
        marginTop:20,
      },
      icon:{
        fontSize:24,
        marginRight: 20,
      },
      textDivideFont:{
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: thirdColor,
      },
      textDivide:{
        flexDirection:'row',
        // width: ScreenWidth-20,
        alignItems: 'center',
      },
    headerButtomTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        borderRadius: 8,
        width: 111,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerButtomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#FF6F00',
        
    },
    headerContainer:{
        flexDirection:'row',
        width: ScreenWidth-20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:20,
    },
    radiobutom:{
        // backgroundColor: 'rgba(242, 110, 33, 0.15)',
        borderRadius: 30,
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderColor:'rgba(0, 0, 0, 0.54)',
        borderWidth: 0.3,
    },
    radiobutomActive:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        borderRadius: 30,
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderColor:'rgba(242, 110, 33, 0.15)',
        borderWidth: 0.3,
    },
    radioText:{
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: thirdColor,
      },
      radioPriceText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        // color: '#FF6F00',
        
    },
    details:{
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: 'black',
        width: ScreenWidth-20,
        height:100,
    },
    radioDetails:{
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: thirdColor,
        width: 162,
      },
    
  containerChekbox:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  checkbox:{
    marginRight: 10,
  },
})