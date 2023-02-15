import { View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Button,
    TouchableHighlight,
    ActivityIndicator
  } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/CommonStyles';
import {login} from '../redux/action/RootAction'
import { useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import String from '../utils/Strings';



const LoginScreen = () => {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const [userEmail, setUserEmail]= useState('');
    const [userPassword, setUserPassword]= useState('');

    const [prograssBar, setprograssBar]= useState(false);

    const handleSubmitPress =() =>{
      setprograssBar(true)
        if(!userEmail) {
          alert('Please fill email')
          setprograssBar(false)
         return
        }
       
        if(!userPassword) {
          alert('Please fill Password')
          setprograssBar(false)
          return
        }
       
        const requestData={userEmail,userPassword}
        dispatch(login(requestData,(res)=>{console.log("loginres==",res);
        console.log('res===',res.response);
        
        setprograssBar(false)

        if(res.response!=null){
          navigation.navigate('ViewProfile',{res : res})
        }else{
          showMessage({
                    message: "Invalid credentials",
                    type: 'danger',
                  });
        }
      }))

      

      }

      
  return (
 
        <SafeAreaView   style={{
        backgroundColor: '#E5E5E5',
        flex: 1,
      }}>

<Text style={[[styles.txtstyle]]}>Login</Text>

<View style={{paddingTop: 20}}>
  <TextInput onChangeText={ (setEmail) => setUserEmail(setEmail)}   style={styles.input} placeholder="email" />
  <TextInput onChangeText={(setPassword) => setUserPassword(setPassword)} style={styles.input} placeholder="Password" />

  <TouchableOpacity onPress={handleSubmitPress} style={styles.appButtonContainer} disabled={prograssBar}>
   {prograssBar? <ActivityIndicator   size={'large'}/>  :  <Text style={styles.appButtonText}>Login</Text>}  
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.forgotcontainer]}
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            <Text >Register New Account </Text>
        
          </TouchableOpacity>

           
         
          
</View>

        </SafeAreaView>
  )
}

export default LoginScreen