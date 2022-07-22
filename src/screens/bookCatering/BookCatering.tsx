import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ModalPicker from '../../componets/modal/ModalPicker';



const BookCatering = () => {
    const [selectedprotein, setSelectedprotein] = useState('Select your protein');
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <View style={styles.container}>
      <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width:ScreenWidth, marginBottom:5,}}>
          <View style={styles.viewScroll}>
            <View style={styles.inputContainerHeader}>
                <Text style={styles.textHeader}>In order to make a Catering reservation 
                    please fill out the form</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>How Many People</Text>
              <TextInput placeholder='Minimum Value is 15...' style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Select your protein:</Text>
                <View style={styles.picker}>
                   <Text style={styles.textHeaderPicker}>{selectedprotein}</Text>
                   <TouchableOpacity onPress={()=>setModalVisible(true)}>
                     <MaterialIcons name="arrow-drop-down" color={thirdColor} style={styles.icon}/>
                   </TouchableOpacity>
                  
                </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Select quantitys</Text>
              <TextInput placeholder='Select quantity...' style={styles.input}/>
            </View>
            <TouchableOpacity activeOpacity={.7} style={styles.addButtom}>
                <MaterialIcons name="add-circle" color={secundaryColor} style={styles.icon}/>
                <Text style={styles.saveButtomText}>Add Another Protein</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Pick your first side</Text>
                <View style={styles.picker}>
                   <Text style={styles.textHeaderPicker}>{selectedprotein}</Text>
                   <TouchableOpacity onPress={()=>setModalVisible(true)}>
                     <MaterialIcons name="arrow-drop-down" color={thirdColor} style={styles.icon}/>
                   </TouchableOpacity>
                  
                </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Pick your second side</Text>
                <View style={styles.picker}>
                   <Text style={styles.textHeaderPicker}>{selectedprotein}</Text>
                   <TouchableOpacity onPress={()=>setModalVisible(true)}>
                     <MaterialIcons name="arrow-drop-down" color={thirdColor} style={styles.icon}/>
                   </TouchableOpacity>
                  
                </View>
            </View>
            <View style={styles.textDivide}>
                <MaterialIcons name="delivery-dining" color={mainColor} style={styles.icon}/>
                <Text style={styles.textDivideFont}>Delivery Details</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Enter Delivery Location</Text>
              <TextInput placeholder='Type Your Location...' style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Enter Billing Address<Text style={{color:mainColor}}>*</Text></Text>
              <TextInput placeholder='Type Your Location...' style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Select Date</Text>
                <View style={styles.picker}>
                   <Text style={styles.textHeaderPicker}>{selectedprotein}</Text>
                   <TouchableOpacity onPress={()=>setModalVisible(true)}>
                     <MaterialIcons name="calendar-today" color={thirdColor} style={styles.icon}/>
                   </TouchableOpacity>
                  
                </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Select Time</Text>
                <View style={styles.picker}>
                   <Text style={styles.textHeaderPicker}>{selectedprotein}</Text>
                   <TouchableOpacity onPress={()=>setModalVisible(true)}>
                     <Fontisto name="clock" color={thirdColor} style={styles.icon}/>
                   </TouchableOpacity>
                  
                </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Mobile Number</Text>
              <TextInput placeholder='Type Number...'  keyboardType='number-pad'  style={styles.input}/>
            </View>
            <View style={styles.textDivide}>
                <MaterialIcons name="credit-card" color={mainColor} style={styles.icon}/>
                <Text style={styles.textDivideFont}>Card Details</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Card Number</Text>
              <TextInput placeholder='4566-2222-3333-4532'  keyboardType='number-pad'  style={styles.input}/>
            </View>

            <View style={styles.containerCard}>
            <View style={styles.inputContainerCard}>
              <Text style={styles.headerTextInput}>Expiration</Text>
              <TextInput placeholder='4566-2222-3333-4532'  keyboardType='number-pad'  style={styles.input}/>
            </View>
            <View style={styles.inputContainerCard}>
              <Text style={styles.headerTextInput}>CVC</Text>
              <TextInput placeholder='4566-2222-3333-4532'  keyboardType='number-pad'  style={styles.input}/>
            </View>
            </View>
            <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                <Text style={styles.saveButtomText}>Pay $33.36</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
        
      </View>
    </View>
    <ModalPicker 
    selectedprotein={selectedprotein} 
    modalVisible={modalVisible}
    setSelectedprotein={setSelectedprotein}
    setModalVisible={setModalVisible}
    />
    </>
  )
}

export default BookCatering

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secundaryColor,
    },
    wrapper:{
        // backgroundColor: '#000',
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center'
      },
      viewScroll:{
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center',
        // padding:1,
        // marginBottom:320,
        marginBottom: 'auto',
        marginTop:20,
        
        
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
      textDivide:{
        flexDirection:'row',
        width: ScreenWidth-20,
        marginBottom:20,
        alignItems: 'center',


      },
      icon:{
        fontSize:24,
        marginRight: 20,
      },
      textDivideFont:{
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: thirdColor,
      }
      ,
      instructionsText:{
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: thirdColor,
        width: 286,
        height: 'auto',
      },
      instructionsTextsub:{
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: thirdColor,
        width: 286,
        height: 'auto',
      },

      saveButtom:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
        backgroundColor: mainColor,
        padding:20,
        borderRadius:8,
      },
      saveButtomText:{
        color:secundaryColor,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1.25,
        lineHeight: 16,
      },
      inputContainerHeader:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
        alignItems: 'center'
      },
      textHeader:{
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: thirdColor,
        width: 250,
        textAlign: 'center',
      },
      picker:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: ScreenWidth-20,
        marginBottom:20,
        alignItems: 'center',
        padding:20,
        marginTop:10,
        borderWidth: 0.5,
        borderRadius:5,
        borderColor:'rgba(0, 0, 0, 0.12)',
      },
      textHeaderPicker:{
        color: 'rgba(0, 0, 0, 0.62)',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
      },
      addButtom:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        marginBottom:20,
        backgroundColor: mainColor,
        padding:10,
        borderRadius:8,
        alignSelf: 'flex-start',
        marginLeft:10,
    },
    containerCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: ScreenWidth-20,

    },
    inputCard:{
        padding:20,
        marginTop:10,
        borderWidth: 0.5,
        borderRadius:5,
        borderColor:'rgba(0, 0, 0, 0.12)',
        width: 100,
      },
      inputContainerCard:{
        flexDirection: 'column',
        justifyContent: 'center',
        width: 169,
        marginBottom:20,
        // marginRight: 10,
      },
})