import React, {Fragment} from 'react'
import {connect} from 'react-redux'
 
import AppHeader from '../../Layout/AppHeader/'
import AppSidebar from '../../Layout/AppSidebar/'
import AppFooter from '../../Layout/AppFooter/'
import PageTitle from 'Layout/AppMain/PageTitle'
 
 
const renderItensCarrinho = (props) => {
 
   return (
       <Fragment>
          
           {props.carrinho.map((item, idx) => {
               return (
                   <div key={item.id}>
                       {item.nome}
                   </div>
               )
           })}
 
       </Fragment>
   )
}
 
const Carrinho = (props) => {
 
   return (
       <Fragment>               
           <AppHeader/>
          
           <div className="app-main">
              
               <div className="app-main__outer">
                   <div className="app-main__inner">
 
                       {renderItensCarrinho(props)}
 
                   </div>
               </div>
                  
           </div>
           <AppFooter></AppFooter>
       </Fragment>
   )
}
 
const mapStateToProps = state => ({
   carrinho: state.CarrinhoReducer.itensCarrinho
})
 
const mapDispatchToProps = dispatch => {
   return {    
        addItemCarrinho: (item) => { dispatch(addItemCarrinho(item)) },
        remItemCarrinho: (item) => { dispatch(remItemCarrinho(item)) },   
   };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)