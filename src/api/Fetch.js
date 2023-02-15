import { baseURL } from './EndPoint'

class Fetch {
    hanldeRequest(endPoint, headers,onResponse){
        fetch(`${baseURL}${endPoint}`,headers) 
        .then(response => this.handleResponse(response))
          .then(([statusCode,data]) => {
            console.log('resfinal=',statusCode,data);

            if(statusCode==200){
                onResponse(data)
            }else{
                onResponse(null)
            }

          
          })
          .catch(error => {
            console.error(error);
          }); 
    }

    handleResponse(response){
       const statusCode= response.status
        const data=response.json()
        return Promise.all([statusCode,data])
    }
}

const FetchApi = new Fetch() 
export default FetchApi