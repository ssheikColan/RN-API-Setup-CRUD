const initialState ={
    usersUpdateData: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'add': {
            return{
                ...state,
                usersUpdateData : action.payload,
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