import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, {FunctionComponent} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopMenu from '../../componets/topMenu/TopMenu';
import BottomMenu from '../../componets/bottomMenu/BottomMenu';
import DashInfo from '../../componets/dashInfo/DashInfo';
import Search from '../../componets/search/Search';
import Categories from '../../componets/categories/Categories';
import FeaturedMeals from '../../componets/featuredMeals/FeaturedMeals';


const Dashboard :FunctionComponent = () => {
  return (
    <>
     <TopMenu/>
      <DashInfo/>
      <Search/>
      <Categories/>
      <FeaturedMeals/>
     <BottomMenu/>
    </>
   
  )
}

export default Dashboard

