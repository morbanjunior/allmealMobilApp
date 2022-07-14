import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { FunctionComponent } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RootStackParamList } from '../../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';

type props = StackScreenProps<RootStackParamList, 'Signin'>

const Signin: FunctionComponent<props>= ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={
        require('../../../assets/img/Welcome.png')} 
        resizeMode="cover"
        style={styles.img}
        >
    <SafeAreaView>
        <View style={styles.wrapper}>
            <Image 
            source={require('../../../assets/img/logoAMP.png')}
            />
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Meal Prep</Text>
                <Text style={styles.title}>Chicago</Text>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.wrapperButton}>
                    <Text style={styles.textLogin}>Log In</Text>
                </View>
                <View style={styles.containerInput}>
                    <TextInput 
                       style={styles.input}
                       placeholder="Username or Email"
                    />
                    <TextInput 
                       style={styles.input}
                       placeholder="Password"
                    />
                </View>
                <TouchableOpacity activeOpacity={.7} 
                style={styles.buttomSignin}
                onPress={()=>navigation.navigate('Dashboard')}
                >
                        <Icon name="user-check" type="ionicon" color="#fff" style={styles.iconLogin}/>
                        <Text style={styles.textButtomLogin}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.containertextBottom}>
                    <Text style={styles.textAccount}>Don’t have an account?</Text>
                    <Text style={styles.textRegister}>Register here</Text>
                </View>
          </View>
        </View> 
    </SafeAreaView>
        
    </ImageBackground>
</View>
  )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: 420,
        height: 912,
    },
    wrapper:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30, 
    },

    title:{
        color: '#FFFFFF',
        // fontFamily: 'Poppins',
        fontsStyle: 'normal',
        fontWeight: '700',
        fontSize: 36,
        lineheight: 54,
    },
    containerTitle:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 80,
        alignItems: 'center',
        justifyContent:'center',
    },
    containerBottom:{
      marginTop:120,
      width: 420,
      height:487,
      backgroundColor: '#fff',
      borderTopEndRadius:25,
      borderTopLeftRadius:25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'flex-start',
      alignItems: 'center',

    },
    wrapperButton:{
      marginTop:30,
    },
    textLogin:{
      color: '#262626',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 22,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    containerInput:{
      marginTop:30,
    },
    input:{
      width: 328,
      height:56,
      borderWidth: 0.5,
      padding: 10,
      borderRadius: 5,
      borderColor: 'gray',
      marginBottom: 20,
      color: 'black'
      
    },
    buttomSignin:{
      display:'flex',
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#FF6F00',
      padding:20,
      borderRadius: 8,
      width:328,
      height:56,
      marginBottom:30,

  },
  textButtomLogin:{
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 16,
      textAlign: 'center',
      letterSpacing: 1.25,
      textTransform: 'capitalize',
      color: '#FFFFFF',
      
      
  },
  iconLogin:{
      color: '#FFFFFF',
      fontSize: 18,
      marginRight: 40,
      marginLeft: -60,
  },
  containertextBottom:{
      display:'flex',
      flexDirection: 'colomn', 
      alignItems: 'center',
      justifyContent: 'center',
  },
  textAccount:{
    fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 16,
      textAlign: 'center',
      letterSpacing: 1.25,
      textTransform: 'capitalize',
  },
  textRegister:{
    fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 16,
      textAlign: 'center',
      letterSpacing: 1.25,
      textTransform: 'capitalize',
      marginTop:20,
  }
})