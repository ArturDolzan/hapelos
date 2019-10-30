import {ADICIONAR_CARRINHO} from '../reducers/CarrinhoReducer'
import {REMOVER_CARRINHO} from '../reducers/CarrinhoReducer'
 
const adicionarCarrinho = item => ({
   type: ADICIONAR_CARRINHO,
   item
})
 
export const addItemCarrinho = item => {
   return dispatch => {
 
       dispatch(adicionarCarrinho(item))
   }
}
 
const removerCarrinho = item => ({
   type: REMOVER_CARRINHO,
   item
})
 
export const remItemCarrinho = item => {
   return dispatch => {
 
       dispatch(removerCarrinho(item))
   }
}

