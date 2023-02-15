import FetchApi from './Fetch'

class RequestService {

    post (endPoint,requestData,onResponse){
        this.hanldeHeader('POST',endPoint,requestData,onResponse)
    }

    get (endPoint){
        this.hanldeHeader('GET',endPoint,null,onResponse)
    }

    hanldeHeader(methodType,endPoint,requestData,onResponse){
        let headers= {
            method: methodType,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }

        //   { && means same as if condition, it have only if part only, not have else.}
        // { FormData means it will pass directly, otherwise it will convert to stringify format and pass }
          Boolean(requestData) && [headers={
            ...headers, 
            body: requestData instanceof FormData ? requestData : JSON.stringify(requestData)
          }] 

          FetchApi.hanldeRequest(endPoint,headers,onResponse)
    }
}

const Service = new RequestService()
export default Service