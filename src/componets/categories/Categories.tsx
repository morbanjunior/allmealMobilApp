import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {FunctionComponent, useState} from 'react'
import CategoriesItems from './CategoriesItems'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigators/RootDrawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScreenWidth } from '../shared'
import { itemsCategories } from '../../data/categories'

type props = StackScreenProps<RootStackParamList, 'Dashboard'>



const Categories: FunctionComponent<props>= ({navigation}) => {
    const [selected, Setselected] = useState(0);
   

  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
         <Text style={styles.categoryText}>Categories</Text>
         <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.categoryItems}>
                
                {
                        itemsCategories.map((item, index)=>(
                           <TouchableOpacity 
                           onPress={()=>navigation.navigate('Category')}
                           style={styles.categoryItemsContainer}>
                                <CategoriesItems 
                                item={item} 
                                key={index} 
                                selected={selected} 
                                Setselected={Setselected}
                                index={index}
                                />
                           </TouchableOpacity>
                             
                        
                        ))
                    }
            </View>
         </ScrollView>
       </View>
       
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: -20,
        marginTop: -10,
        
    },wrapper:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20,
        width: ScreenWidth,

    },categoryText:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: '#262626',
    },categoryItems:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
        
    },
    categoryContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },categoryItemsContainer:{
        marginRight: 10,
        marginLeft: 10,
    }
})