import Service from "../../api/Service";
import { Store } from "../Store";
import * as Endpoint from '../../api/EndPoint'

export const viewData = (data) => {
    return {
        type : 'add',
        payload : data
    };
}

export const viewAction = (requestData,onResponse) =>{
    const viewData = Store.getState()?.register?.usersViewData??[]

    return (dispatch) =>{
        const data ={
            email: requestData.userEmail,
        }
        Service.post(Endpoint.getProfile,data,onResponse)

    }
}