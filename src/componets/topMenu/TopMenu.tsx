import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TopMenu = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.headerContainer}>
                    <View activeOpacity={.7} style={styles.rightside}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Entypo name="menu" type="ionicon" color="#262626" style={styles.iconLogin}/>
                     </TouchableOpacity>   
                        <Text style={styles.textWelcome}>Welcome, </Text>
                        <Text style={styles.textUserName}>Marco</Text>
                    </View>
                </View>
                <View style={styles.leftside}>
                    <TouchableOpacity activeOpacity={.7} style={styles.topContainer}>
                        <View style={styles.bellContainer}>
                            <Text style={styles.textbel}>3</Text>
                        </View>
                        <Icon name="bell-outline" type="ionicon" color="#262626" style={styles.iconLogin}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} style={styles.topContainer}>
                        <View style={styles.bellContainer}>
                            <Text style={styles.textbel}>3</Text>
                        </View>
                       <AntDesign name="shoppingcart" type="ionicon" color="#262626" style={styles.iconLogin}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default TopMenu

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper:{
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerContainer:{
        flex:1,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:20,
        

    },
    iconLogin:{
        marginRight:20,
        fontSize: 30,
    },
    rightside:{
        flex:1,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    textWelcome:{
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: '#262626',
    },
    textUserName:{
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: '#262626',
    },
    leftside:{
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    bellContainer:{
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
        backgroundColor: '#F26E21',
        borderRadius: 30,
        width: 30,
        height: 30,
        position: 'absolute',
        top: -22,
        left: 10,
        
    },
    topContainer:{
        position: 'relative',
    },
    textbel:{
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: '700',
    }
})