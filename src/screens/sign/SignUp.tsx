import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
    const navigation = useNavigation(); 

  return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.wrapper}>
                    <Image 
                     source={require('../../../assets/img/logoAMP.png')}
                     style={styles.img}
                    />
                    <View style={{marginTop: 20}}>
                        <Text style={styles.headertext}>Create an account</Text>
                    </View>
                    <View style={{marginTop: 40}}></View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>First Name<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput placeholder='Enter First Name...' style={styles.input}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>Email Address<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput placeholder='Enter Email Address...' style={styles.input}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>Password<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput placeholder='Enter Password...' style={styles.input}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>Confirm Password<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput placeholder='Enter Confirm Password...' style={styles.input}/>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('Signin')}
                    activeOpacity={.7} style={styles.saveButtom}>
                        <FontAwesome5 name="user-check" color={secundaryColor} style={styles.icon}/>
                         <Text style={styles.saveButtomText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        </View>
    
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: secundaryColor,
    },
    wrapper:{
        // backgroundColor: '#000',
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center'
      },
      img:{
        width: 69,
        height: 69,
      },
      headertext:{
        color: thirdColor,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 24,
        letterSpacing: 0.15,
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
      saveButtom:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
        backgroundColor: mainColor,
        padding:20,
        borderRadius:8,
        alignItems: 'center',
      },
      saveButtomText:{
        color:secundaryColor,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1.25,
        // lineHeight: 16,
       
      },
      icon:{
        fontSize:24,
        marginRight: 20,
      },

})