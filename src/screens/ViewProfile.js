import { View, Text, Image,TouchableOpacity,TextInput,BackHandler,Alert } from 'react-native'
import React,{useEffect, useState} from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
import {viewAction} from '../redux/action/RootAction'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from '../styles/CommonStyles';


export default function ViewProfile({route}) {

  const dispatch =useDispatch()
  const navigation = useNavigation()
  
  const [userEmail, setUserEmail ]= useState('')
  const [userName, setUserName ]= useState('')
  const [userPhone, setUserPhone ]= useState('')


  let res= route?.params?.res??null;
    // useEffect(() => {
    //     ImageCropPicker.openPicker({
    //         multiple: true
    //       }).then(images => {
    //         console.log("imggg==",images);
    //       });
    // }, [])


    console.log('viewres==',res);

    let email= res?.response?.email
    let name= res?.response?.name
    let phone= res?.response?.phone

    const handleSubmitPress =() =>{
      navigation.navigate('UpdateScreen',{res : res})
    }



    // {back exit popup}
      useFocusEffect(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);

  // const requestData=res.email
    
  //   dispatch(viewAction(requestData,(res)=>{console.log('view==',res);}))



  return (
    <View style={{flex:1}}>

       <TouchableOpacity onPress={handleSubmitPress} style={styles.appButtonContainerTop}>
          <Text style={styles.appButtonText}>Update</Text>
        </TouchableOpacity>

        <Text style={styles.txtstyle}>Email</Text>
      <Text  style={{fontSize:20,margin:15}}>{email}</Text>
      <Text style={styles.txtstyle}>Name</Text>
      <Text  style={{fontSize:20,margin:15}}>{name}</Text>
      <Text style={styles.txtstyle}>Phone</Text>
      <Text  style={{fontSize:20,margin:15}}>{phone}</Text>



      {/* <Image source={require("file:///data/user/0/com.curdapi/cache/react-native-image-crop-picker/Screenshot_20230203_114133.jpg")}/>  */}
      
    </View>
  )
}