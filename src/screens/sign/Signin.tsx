import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, NativeSyntheticEvent, TextInputChangeEventData, ActivityIndicator } from 'react-native'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RootStackParamList } from '../../navigators/RootDrawer';
import { StackScreenProps } from '@react-navigation/stack';
import { Screenheight, ScreenWidth } from '../../componets/shared';
import { useLoginUserMutation } from '../../redux/api/authApi';
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from 'react-redux';
import { loginData } from '../../redux/loginSlice';

type props = StackScreenProps<RootStackParamList, 'Signin'>

const Signin: FunctionComponent<props>= ({navigation}) => {
  const [loginUser,{data, isError, error, isLoading}] = useLoginUserMutation();
  const [email, SetUserEmail] = useState<string>('');
  const [password, SetPassword] = useState<string>('');
  const toast = useToast();
  const dispatch = useDispatch();

  // if(isLoading){
  //   return (
  //     <View style={{
  //       flex:1, justifyContent: 'center', alignItems: 'center'
  //     }}>
  //        <ActivityIndicator size='large'/>
  //     </View>
  //   );
    
  // }

  useEffect(() => {

    if(data && data.data.access_token){
     
      SetUserEmail('');
      SetPassword('');
      navigation.navigate('Home')
      // SetIsLogin(true)
      // console.log(data)
      dispatch(loginData({
        userLogin: true,
        token: data.data.access_token,
        userData: data.data.user
      }))
      
    }
   if(isError){
   
        if (error) {
          if ('status' in error) {
            // you can access all properties of `FetchBaseQueryError` here
            
            toast.show(JSON.stringify(error.data.error.message), {
              type: "danger",
              placement: "bottom",
              duration: 4000,
              animationType: "slide-in",
              
            });
            SetUserEmail('');
            SetPassword('');
          }
      }
  
   }
  
   
},[data, isError])

  const sign_in= {
    "login": email,
  "password": password
  }
  const HandlerLogin = async () =>{
  
   if(email=='' || password==''){
    toast.show('Email or password are required', {
      type: "danger",
      placement: "bottom",
      duration: 4000,
      animationType: "slide-in",
      
    });
   }
   else{
    await loginUser({sign_in})
   
   }
   
   }


const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetUserEmail(value);
}
const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetPassword(value);
}
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <KeyboardAvoidingView behavior="padding" style={styles.containerKey}>
        
          <View style={styles.container}>
          <ImageBackground source={
              require('../../../assets/img/Welcome.png')} 
              resizeMode="cover"
              style={styles.img}
              >
          <SafeAreaView>
        
              <View style={styles.wrapper}>
                  <View style={styles.header}>
                      <Image 
                      source={require('../../../assets/img/logoAMP.png')}
                      />
                      <View style={styles.containerTitle}>
                          <Text style={styles.title}>Meal Prep</Text>
                          <Text style={styles.title}>Chicago</Text>
                      </View>
                  </View>
                  <View style={styles.containerBottom}>
                      <View style={styles.wrapperButton}>
                          <Text style={styles.textLogin}>Log In</Text>
                      </View>
                      <View style={styles.containerInput}>
                          <TextInput 
                            style={styles.input}
                            placeholder="Username or Email"
                            value={email}
                            onChange={onChangeEmail}
                          />
                          <TextInput 
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true} 
                            value={password} 
                            onChange={onChangePassword}
                          />
                      </View>
                      <TouchableOpacity activeOpacity={.7} 
                      style={styles.buttomSignin}
                      // onPress={()=>navigation.navigate('Home')}
                      onPress={HandlerLogin}
                      >
                              <Icon name="user-check" type="ionicon" color="#fff" style={styles.iconLogin}/>
                              <Text style={styles.textButtomLogin}>Log In</Text>
                      </TouchableOpacity>
                      <View style={styles.containertextBottom}>
                          <Text style={styles.textAccount}>Don’t have an account?</Text>
                          <TouchableOpacity  onPress={()=>navigation.navigate('SignUp')}>
                              <Text style={styles.textRegister}>Register here</Text>
                          </TouchableOpacity>
                        
                              </View>
                        </View>
                      </View>
                    
                  </SafeAreaView>
                      
            </ImageBackground>
        </View>
            </KeyboardAvoidingView> 
       </TouchableWithoutFeedback>
  )
}

export default Signin

const styles = StyleSheet.create({
  containerKey:{
    flex: 1,
  },
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
       
    },

    img:{
        width: ScreenWidth,
        height: 912,
    },
    wrapper:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop:30, 
        height:Screenheight +50
        
    },

    title:{
        color: '#FFFFFF',
        // fontFamily: 'Poppins',
        // fontsStyle: 'normal',
        fontWeight: '700',
        fontSize: 36,
        lineheight: 54,
    },
    containerTitle:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30,
        alignItems: 'center',
        justifyContent:'center',
    },
    containerBottom:{
      
      width: ScreenWidth,
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
      flexDirection: 'column', 
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
  },
  header:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50, 
    marginBottom:80,
  }
})