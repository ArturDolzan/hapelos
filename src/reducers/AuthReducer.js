export const SET_AUTH = 'SET_AUTH'
 
const initialState = {
   auth: false
}
 
export default (state = initialState, action) => {
 
   switch(action.type) {
       case SET_AUTH:
  
           return {
                ...state,
                auth: action.auth
            }         
           break
 
       default:
           return state;
   }
}
