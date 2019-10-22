// import axios from 'axios'
import {SET_VALOR_BUSCA} from '../reducers/BuscaReducer'

const alterarValorBusca = valor => ({
    type: SET_VALOR_BUSCA,
    valor
})

export const setValorBusca = valor => {
    return dispatch => {

        // axios.post('http://localhost:57967/api/ParamObjetos/RecuperarExtensaoLimite')
        //   .then((response) => {
        //     dispatch(alterarValorBusca(valorBusca))
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //   })

        dispatch(alterarValorBusca(valor))
    }
}