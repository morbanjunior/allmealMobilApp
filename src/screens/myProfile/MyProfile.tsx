import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import { RadioButton } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const MyProfile = () => {
  const [selected, Setselected] = useState('1');
  const [gender, SetGender]= useState('Male');

  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.headerTop}>
            <TouchableOpacity onPress={()=>Setselected('1')} style={styles.containerItem}>
                <View style={[selected === '1' ? styles.wrapperActive :  styles.wrapperItem]}>
                    <Text style={[selected === '1' ? styles.textActive :  styles.text]}>Basic Details</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Setselected('2')} style={styles.containerItem}>
                <View style={[selected === '2' ? styles.wrapperActive :  styles.wrapperItem]}>
                    <Text style={[selected === '2' ? styles.textActive :  styles.text]}>How did you know about us?</Text>
                </View>
            </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{width:ScreenWidth, marginBottom:5,}}>
            {
              selected ==='1' ? (
                <View style={styles.viewScroll}>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>First Name<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type first Name...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Date of Birth<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type last Name*...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Phone Number<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type email...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Secondary Phone Number<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type amount...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Gender</Text>
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                        <View style={[gender==='Male' ? styles.radiobutomActive : styles.radiobutom]}>
                            <RadioButton
                                value="Male"
                                // label="Carto Base MAp"
                                status={gender=== 'Male' ? 'checked' : 'unchecked'}
                                onPress={() => SetGender('Male')}
                                color={mainColor}
                                />
                        </View>
                        
                    <Text style={styles.radioText}>Male</Text>
                    </View>
                    <View style={styles.textDivide}>
                        <View style={[gender==='Female' ? styles.radiobutomActive : styles.radiobutom]}>
                            <RadioButton
                                value="Female"
                                // label="Carto Base MAp"
                                status={gender=== 'Female' ? 'checked' : 'unchecked'}
                                onPress={() => SetGender('Female')}
                                color={mainColor}
                                />
                        </View>
                        
                    <Text style={styles.radioText}>Female</Text>
                    </View>
                    <View style={styles.textDivide}>
                        <View style={[gender==='Other' ? styles.radiobutomActive : styles.radiobutom]}>
                            <RadioButton
                                value="Other"
                                // label="Carto Base MAp"
                                status={gender=== 'Other' ? 'checked' : 'unchecked'}
                                onPress={() => SetGender('Other')}
                                color={mainColor}
                                />
                        </View>
                        
                    <Text style={styles.radioText}>Other</Text>
                    </View>
                </View>
                <View style={styles.buttomContainer}>
                  <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                      <Feather name="log-out" color={secundaryColor} style={styles.icon}/>
                      <Text style={styles.saveButtomText}>Logout</Text>
                  </TouchableOpacity>
                </View>
                
             </View>
              ):(<>
              <View style={styles.viewScroll}>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Referrer<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type Referrer...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Referral Email<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type Referral Email*...' style={styles.input}/>
                </View>
                </View>
              </>)
            }
            
            </ScrollView>
            
        </View>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: secundaryColor,
    
  },
  wrapper:{
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerTop:{
    marginTop:20,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  containerItem: {
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
},
wrapperItem: {
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5,
    marginRight:5,
    borderRadius:8,
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 'auto',
    height: 46,
    padding:15,
    
},

wrapperActive: {
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5,
    marginRight:5,
   borderRadius:8,
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: '#FF6F00',
    width: 'auto',
    height: 46,
    padding:15,
    
},
text:{
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: '#000',
},
textActive:{
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: '#fff',
}
,
      viewScroll:{
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center',
        // padding:1,
        // marginBottom:320,
        marginBottom: 'auto',
        marginTop:30,
      },
      inputContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
      },
      headerTextInput:{
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 0.15,
        color: thirdColor,
      },
      input:{
        padding:20,
        marginTop:10,
        borderWidth: 0.5,
        borderRadius:5,
        borderColor:'rgba(0, 0, 0, 0.12)'
      },
      textDivide:{
        flexDirection:'row',
        // width: ScreenWidth-20,
        marginBottom:20,
        alignItems: 'center',

      },
      icon:{
        fontSize:24,
        marginRight: 10,
      },
      saveButtom:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: 134,
        height:40,
        marginBottom:20,
        backgroundColor: mainColor,
        // padding:20,
        borderRadius:8,
        alignItems: 'center',
      },
      saveButtomText:{
        color:secundaryColor,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1.25,
        lineHeight: 16,
      },
      headerContainer:{
        flexDirection:'row',
        width: ScreenWidth-20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:20,
    },
    headerContainerRadio:{
        flexDirection:'row',
        // width: ScreenWidth-20,
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:20,
        marginRight:20,
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
    buttomContainer:{
      flexDirection: 'row',
      width: ScreenWidth -20,
    }

})