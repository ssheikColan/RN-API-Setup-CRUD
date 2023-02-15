import { Store } from "../Store";

import {useNavigation} from '@react-navigation/native'
import Service from "../../api/Service";
import * as Endpoints from '../../api/EndPoint'

export const saveData =(data) =>{
    return {
        type :'add',
        payload :data
    };
}

export const retriveData =(data) =>{
    return {
        type :'retrive',
    };
}


export const register = (requestData,onResponse) =>{
 
    let signup = Store.getState()?.register?.users??[]
  
     return (dispatch)=>{

                    const data= { email: requestData.userEmail,
                password: requestData.userPassword,
                phone: requestData.userPhone,
                name: requestData.userName}

      Service.post(Endpoints.register,data,onResponse)

      // (res)=>{console.log('final=  ',res);}



  
      // fetch('http://192.168.7.27:9000/register', {
      //         method: 'POST',
      //         headers: {
      //           Accept: 'application/json',
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify({
      //           email: requestData.userEmail,
      //           password: requestData.userPassword,
      //           phone: requestData.userPhone,
      //           name: requestData.userName,
      //         }),
      //       }) .then(response => response.json())
      //       .then(json => {
            
      //         let resOutput ={...json, ...requestData }
      //         console.log("outp=",resOutput) 
      //         signup.push(resOutput)
  
      //        dispatch(saveData(signup)) 

            
      //       })
      //       .catch(error => {
      //         console.error(error);
      //       }); 
          }
  }