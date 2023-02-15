import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import FlashMessage from "react-native-flash-message";
import { View } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Provider } from "react-redux";
import { Store } from '../redux/Store'
import ViewProfile from '../screens/ViewProfile';
import UpdateScreen from '../screens/UpdateScreen';

const stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Provider store={Store} >
 <View style={{flex:1}}>
  <NavigationContainer>
    <stack.Navigator initialRouteName='LoginScreen'
    screenOptions={{headerShown:false,}}>

        <stack.Screen name='LoginScreen' component={LoginScreen}/>
        <stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        <stack.Screen name='ViewProfile' component={ViewProfile}/>
        <stack.Screen name='UpdateScreen' component={UpdateScreen}/>

    </stack.Navigator>
  </NavigationContainer>
  <FlashMessage position="top" />
  </View>
  </Provider>
  )
}

export default Routes