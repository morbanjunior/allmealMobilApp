import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SingleOrder = () => {
  const [selected, Setselected] = useState('1');
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.headerContainer} >
             <TouchableOpacity onPress={()=>Setselected('1')} activeOpacity={.7} style={[selected=== '1' ? styles.headerButtomActive : styles.headerButtom]}>
                <Text style={[selected=== '1' ? styles.headertextActive : styles.headertext]}>Order Details</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>Setselected('2')} activeOpacity={.7} style={[selected=== '2' ? styles.headerButtomActive : styles.headerButtom]}>
                <Text style={[selected=== '2' ? styles.headertextActive : styles.headertext]}>Renewal Orders</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.orderDetails}>
            <View style={styles.orderDetailsItems}>
               <View style={styles.detailsItems}>
               <Ionicons name="ios-receipt-outline" color={mainColor} style={styles.icon}/>
                 <View style={{marginLeft: 7}}>
                    <Text style={styles.headerItemsText}>Order Number</Text>
                    <Text style={styles.headerItemsTextsub}>4100F5</Text>
                 </View>
               </View>
               <View style={styles.detailsItems}>
               <MaterialCommunityIcons name="calendar-blank" color={mainColor} style={styles.icon}/>
                 <View style={{marginLeft: 7}}>
                    <Text style={styles.headerItemsText}>Order Placed</Text>
                    <Text style={styles.headerItemsTextsub}>07-Aug-2021</Text>
                 </View>
               </View>
            </View>
            <View style={styles.orderDetailsItems}>
               <View style={styles.detailsItems}>
               <MaterialCommunityIcons name="shopping-outline" color={mainColor} style={styles.icon}/>
                 <View style={{marginLeft: 7}}>
                    <Text style={styles.headerItemsText}>Quantity</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.headerItemsTextsubSpace}>Food: 6</Text>
                      <Text style={styles.headerItemsTextsub}>Combo: 6</Text>
                    </View>
                 </View>
               </View>
               <View style={styles.detailsItems}>
                <View style={styles.iconDot}>
                   <Entypo name="dots-three-horizontal" color={mainColor} style={styles.iconDotsub}/>
                </View>
                
                 <View style={{marginLeft: 7}}>
                    <Text style={styles.headerItemsText}>Status</Text>
                    <Text style={styles.headerItemsTextsub}>Delivered</Text>
                 </View>
               </View>
            </View>
          </View>
          <View style={styles.orderDetailsTotal}>
              <View style={{flexDirection: 'row'}}>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="local-offer" color={secundaryColor} style={styles.icon}/>
                    <View>
                      <Text style={styles.totalText}>Total</Text>
                      <Text style={styles.totalText}>Amount</Text>
                    </View>
                  </View>
              </View>
              <View>
                <Text style={styles.totalTextNumber}>$126.33</Text>
                <Text style={styles.totalTextNumbersub}>Paid by Manually</Text>
              </View>
          </View>
          <View style={styles.addressContainer}>
            <View style={styles.adressSub}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <MaterialCommunityIcons name="calendar-blank" color={thirdColor} style={styles.iconAdres}/>
                  <Text>Adresses</Text>
                </View>
                <View><Text>Rigth</Text></View>
            </View>
          </View>
          {/* wrapper end */}
        </View>
    </View>
  )
}

export default SingleOrder

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
    
  },
  wrapper:{
    // backgroundColor: '#000',
    width: ScreenWidth-20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
    
    
  },
  headerButtom:{
    width: 156,
    height: 36,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    shadowOpacity: 0.1, 
    shadowRadius: 20, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    
  },
  headertext:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
  },
  headerButtomActive:{
    backgroundColor: mainColor,
    width: 156,
    height: 36,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  headertextActive:{
    color: secundaryColor
  },
  orderDetails:{
    width: '100%',
    height: 149,
    backgroundColor: secundaryColor,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    shadowOpacity: 0.1, 
    shadowRadius: 20, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
  },
  orderDetailsItems:{
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
    padding:20,
  
  },
  detailsItems:{
    flexDirection: 'row',
    marginRight:50,

  },
  headerItemsText:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  headerItemsTextsub:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  headerItemsTextsubSpace:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight:15,
  },
  icon:{
    fontSize:24,
  },
  iconDotsub:{
    fontSize:15,
  },
  iconDot:{
    borderWidth: 2,
    borderRadius: 30,
    borderColor: mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    // padding:5
    width: 24,
    height: 24, 
  },
  
  orderDetailsTotal:{
    width: '100%',
    // height: 64,
    backgroundColor: mainColor,
    borderRadius: 8,
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    shadowOpacity: 0.1, 
    shadowRadius: 20, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
    padding: 20,
    flexDirection: 'row',
  },
  totalText:{
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
    color: secundaryColor,
    marginLeft: 11,
  },
  totalTextNumber:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15,
    marginRight:15,
    color: secundaryColor,
    marginLeft: 11,
  },
  totalTextNumbersub:{
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
    color: secundaryColor,
    marginLeft: 11,
  },
  addressContainer:{
    marginTop: 41,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width:'100%',
  },
  adressSub:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%'
  },
  iconAdres:{
    fontSize:24,
  },
})