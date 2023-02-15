const initialState ={
    usersLoginData: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'add': {
            return{
                ...state,
                usersLoginData : action.payload,
            }
        };
        case 'retrive':{
            return {
                ...state
            }
        };
        default:
            return state;
    }
}