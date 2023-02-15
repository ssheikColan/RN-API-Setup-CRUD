const initialState ={
    usersViewData: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'add': {
            return{
                ...state,
                usersViewData : action.payload,
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