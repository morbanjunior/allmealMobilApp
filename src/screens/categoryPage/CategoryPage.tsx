import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FunctionComponent, useState } from 'react'
import { RootStackParamList } from '../../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
import BottomMenu from '../../componets/bottomMenu/BottomMenu';
import TopMenuCategory from '../../componets/topMenu/TopMenuCategory';
import CategoryPageItem from './CategoryPageItem';
import MealItem from './mealItem/MealItem';

const itemsCategories = [
  {
      id: 1,
      text: 'Meal Prep Menu',
      
  },
  {
      id: 2,
      text: 'Bulk Meal Prep Menu',
     
  },
  {
      id: 3,
      text: 'Preselected Meals',
      
  },
  {
      id: 4,
      text: '$8 Meal Prep Menu',
     
  },
  {
      id: 5,
      text: 'Keto Meals',
      
  },
];


type props = StackScreenProps<RootStackParamList, 'Category'>

const CategoryPage: FunctionComponent<props>= ({navigation}) => {
  const [selected, Setselected] = useState(0);

  return (
    <View>
      <TopMenuCategory />
        <View style={styles.container}>
            <View style={styles.wrapper}>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                      <View style={styles.categoryItems}>
                          
                          {
                                  itemsCategories.map((item, index)=>(
                                    <TouchableOpacity 
                                    onPress={()=>navigation.navigate('Category')}
                                    style={styles.categoryItemsContainer}>
                                          <CategoryPageItem 
                                          // item={item} 
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
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View style={styles.mealItems}>
                          
                          {
                                  itemsCategories.map((item, index)=>(
                                    <TouchableOpacity 
                                    onPress={()=>navigation.navigate('Category')}
                                    style={styles.categoryItemsContainer}>
                                          <MealItem 
                                          // item={item} 
                                          // key={index} 
                                          // selected={selected} 
                                          // Setselected={Setselected}
                                          // index={index}
                                          />
                                    </TouchableOpacity>
                                      
                                  
                                  ))
                              }
                      </View>
                    </ScrollView>
                
            </View>
          
        </View>
      <BottomMenu/>
    </View>
  )
}

export default CategoryPage

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'flex-start',
    justifyContent: 'center',
   
   
    
},
wrapper:{
  display:'flex',
  flexDirection: 'column', 
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: 20,
},
categoryItems:{
  marginTop: 10,
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: 20,
  paddingTop: 20,
},

mealItems:{
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 20,
  paddingTop: 20,
},
})