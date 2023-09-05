import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { categoryDataProps } from './types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props{
    item: {
        id: number;
        text: string;
        code: string;
        img: string;
        icon:{
            iconType: 'ionicons' | 'material-community';
            name: string;
            size: number;
        }
       
    };
    selected: number;
    Setselected: React.Dispatch<React.SetStateAction<number>>;
    index: number,
}

const CategoriesItems: React.FC<Props> = ({item, selected, index, Setselected}) => {
    
    const IconComponent =(iconType:string)=>{
        if(iconType === "material-community"){
            return <MaterialCommunityIcons name={item.icon.name} size={item.icon.size}/>
        }else{
            return <Ionicons name={item.icon.name} size={item.icon.size}/>
        }
        
    }
  return (
        <TouchableOpacity onPress={()=>Setselected(index)} activeOpacity={.7} style={styles.buttom}>
                <View style={[selected === index ? styles.iconItemActive :  styles.iconItem]}>
                   {/* <Image source={require('../../../assets/img/plate.png')} style={styles.imgContainer}/> */}
                   {IconComponent(item.icon.iconType)}
                </View> 
                <Text style={styles.textCategory}>{item.text}</Text>
       </TouchableOpacity>
  )
}

export default CategoriesItems

const styles = StyleSheet.create({
    iconItem:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        backgroundColor: '#fff',
        width: 100,
        height: 85,
    },
    iconItemActive:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        backgroundColor: '#FF6F00',
        width: 100,
        height: 85,
    },textCategory:{
        marginTop: 10,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: '#262626',
        width: 100,
        // height: 40,
    },buttom:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
    },imgContainer:{
        width: 55,
        height: 55,
    }
})