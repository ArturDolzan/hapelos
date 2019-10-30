export const ADICIONAR_CARRINHO = 'ADICIONAR_CARRINHO';
export const REMOVER_CARRINHO = 'REMOVER_CARRINHO';
 
const initialState = {
   itensCarrinho: []
}
 
export default (state = initialState, action) => {
  
   let carrinho = null,
       existente = null
 
   switch(action.type) {
       case ADICIONAR_CARRINHO:
 
           carrinho = [...state.itensCarrinho]
 
           existente = carrinho.filter(item => item.id === action.item.id)[0]
 
           if (!existente) {
               action.item.qtde = 1
               carrinho.push(action.item)
           }else {
               existente.qtde++
           }
          
           return {
               ...state,
               itensCarrinho: carrinho
           }           
           break
 
       case REMOVER_CARRINHO:
 
           carrinho = [...state.itensCarrinho]
 
           existente = carrinho.filter(item => item.id === action.item.id)[0]
 
           if (existente) {
               if (existente.qtde === 1){
                   carrinho = carrinho.filter(item => item.id !== existente.id)
               } else {
                   existente.qtde--
               }               
           }
           return {
               ...state,
               itensCarrinho: carrinho
           }
           break
 
       default:
           return state;
   }
}
