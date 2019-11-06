import {SET_AUTH} from '../reducers/AuthReducer'

const alterarValorAuth = auth => ({
    type: SET_AUTH,
    auth
})

export const setValorAuth = auth => {
    return dispatch => {

        dispatch(alterarValorAuth(auth))
    }
}