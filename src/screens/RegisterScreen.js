import {   View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Button,
    TouchableHighlight} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/CommonStyles';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/action/RootAction';
import String from '../utils/Strings';

const RegisterScreen = () => {
    const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch() ;

  let signup = useSelector((store) => store?.signup?.users)??[];


  const storeData = async () => {
    if (!userName) {
      alert('Please fill Name')
      return
    }
    if (!userEmail) {
      alert('Please fill Email');
      return
    }
    if (!userPassword) {
      alert('Please fill Password')
      return
    }
    if (!userPhone) {
        alert('Please fill Phone')
        return
      }

    const requestData ={userName, userEmail, userPassword, userPhone}
   dispatch(register(requestData,(res)=>{console.log('final=  ',res);}))


   
  }


  return (
    <SafeAreaView   style={{
        backgroundColor: '#E5E5E5',
        flex: 1,
      }}>

<Text style={[[styles.txtstyle]]}>Register</Text>

<View style={{paddingTop: 20}}>
<TextInput
              onChangeText={UserName => setUserName(UserName)}
              style={[styles.input]}
              placeholder="Name"></TextInput>

            <TextInput
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              style={[styles.input]}
              placeholder="Email"></TextInput>

            <TextInput
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              style={[styles.input]}
              placeholder="Password"></TextInput>

  <TextInput
              onChangeText={UserPhone => setUserPhone(UserPhone)}
              style={[styles.input]}
              placeholder="Phone"></TextInput>

    <TouchableOpacity
            onPress={() => {
              storeData();
            }}
            style={[styles.appButtonContainer]}>
            <Text style={styles.appButtonText}>{String.singup}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.forgotcontainer]}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text>{String.alreadyaccount}</Text>
        
          </TouchableOpacity>
</View>

        </SafeAreaView>
  )
}

export default RegisterScreen