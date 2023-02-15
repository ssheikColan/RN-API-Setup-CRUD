import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {updateAction} from '../redux/action/RootAction'
import styles from '../styles/CommonStyles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const UpdateScreen = ({route}) => {
    const dispatch =useDispatch()
  
    const [userEmail, setUserEmail ]= useState('')
    const [userName, setUserName ]= useState('')
    const [userPhone, setUserPhone ]= useState('')

    const navigation = useNavigation()

    let res= route?.params?.res??null;

    let email= res?.response?.email

    useFocusEffect(React.useCallback(() =>{
        setUserName(res?.response?.name)
        setUserPhone(res?.response?.phone)
    }, []))
    
  

    const handleSubmitPress =() =>{
        console.log('ready=', email,userPhone,userName);
        const requestData ={email,userPhone,userName}
        dispatch(updateAction(requestData),(res)=>{
            console.log('updatedata==', res);
            if(res.response!=null){
                navigation.navigate('ViewProfile',{res : res})
              }else{
                showMessage({
                          message: res.message ,
                          type: 'danger',
                        });
              }
        })

        // navigation.navigate('UpdateScreen')
      }

  return (
    <View>
     <Text >Name</Text>
    <TextInput value={userName}  style={styles.input} onChangeText={(setName)=>{setUserName(setName)}}/>

    <Text >Phone</Text>
    <TextInput value={userPhone}  style={styles.input} onChangeText={(setPhone)=>{setUserPhone(setPhone)}}/>

    <TouchableOpacity onPress={handleSubmitPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Update</Text>
        </TouchableOpacity>
    </View>
  )
}

export default UpdateScreen