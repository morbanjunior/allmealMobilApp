import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FunctionComponent, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import CategoryPageItem from './CategoryPageItem';
import MealItem from './mealItem/MealItem';
import { mealsList } from '../../data/meals';


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
  {
    id: 6,
    text: '$8 Meal Prep Menu',
   
},
{
    id: 7,
    text: 'Keto Meals',
    
},
{
  id: 8,
  text: '$8 Meal Prep Menu',
 
},
{
  id: 9,
  text: 'Keto Meals',
  
},
{
id: 10,
text: '$8 Meal Prep Menu',

},
{
id: 11,
text: 'Keto Meals',

},
];


type props = StackScreenProps<RootStackParamList, 'Category'>

const CategoryPage: FunctionComponent<props>= ({navigation}) => {
  const [selected, Setselected] = useState(0);

  return (
    <View>
      {/* <TopMenuCategory /> */}
        <View style={styles.container}>
            <View style={styles.wrapper}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
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
                    <ScrollView showsVerticalScrollIndicator={false}  
                                showsHorizontalScrollIndicator={false} 
                                horizontal={false} alwaysBounceVertical={true}>
                      <View style={styles.mealItems}>
                          
                          {
                                  mealsList.map((item, index)=>(
                                    <TouchableOpacity 
                                    onPress={()=>navigation.navigate('Category')}>
                                          <MealItem 
                                          item={item} 
                                          key={index} 
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
      {/* <BottomMenu/> */}
    </View>
  )
}

export default CategoryPage

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 65,
},
wrapper:{
  display:'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'center',
  // padding: 20,
},
categoryItems:{
  marginTop: 10,
  display: 'flex',
  flexDirection: 'row',
  padding: 10,
},

mealItems:{
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 20,
  paddingTop: 20,
},
})