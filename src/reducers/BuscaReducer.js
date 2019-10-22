  
export const SET_VALOR_BUSCA = 'SET_VALOR_BUSCA';

const initialState = {
    valor: ''
}

export default (state = initialState, action) => {
    
    switch(action.type) {
        case SET_VALOR_BUSCA:
                
        return {
            ...state,
            valor: action.valor
        }        
        default:
            return state;
    }
}
