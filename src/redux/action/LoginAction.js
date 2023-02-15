import Service from "../../api/Service";
import { Store } from "../Store";
import * as Endpoint from '../../api/EndPoint'

export const saveloginData =(data) =>{
    return {
        type :'add',
        payload :data
    };
}


export const login = (requestData,onResponse) =>{
 
    let signup = Store.getState()?.register?.usersLoginData??[]
  
     return (dispatch)=>{

      const data = {
                        email: requestData.userEmail,
                password: requestData.userPassword,
      }

      Service.post(Endpoint.login,data,onResponse)




  
      // fetch('https://reqres.in/api/register', {
      //         method: 'POST',
      //         headers: {
      //           Accept: 'application/json',
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify({
      //           email: requestData.userEmail,
      //           password: requestData.userPassword,
      //         }),
      //       }) .then(response => response.json())
      //       .then(json => {
            
      //         let resOutput ={...json, ...requestData }
      //         console.log(resOutput) 
      //         signup.push(resOutput)
  
      //        dispatch(saveloginData(signup)) 
            
      //       })
      //       .catch(error => {
      //         console.error(error);
      //       }); 

          }
  }