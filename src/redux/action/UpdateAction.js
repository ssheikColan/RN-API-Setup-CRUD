import Service from "../../api/Service";
import { Store } from "../Store";
import * as Endpoint from '../../api/EndPoint'

export const updateData = (data) => {
    return {
        type : 'add',
        payload : data
    };
}

export const updateAction = (requestData,onResponse) =>{
    const viewData = Store.getState()?.register?.usersUpdateData??[]

    return (dispatch) =>{
        const data ={
            email: requestData.email,      
            phone: requestData.userPhone,
            name: requestData.userName,
        }

        
        Service.post(Endpoint.updateProfile,data,onResponse)

    }
}