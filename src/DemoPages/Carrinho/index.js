import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {addItemCarrinho, remItemCarrinho} from '../../actions/CarrinhoAction'

import {
    Col, Row, Container,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Progress, Label, ListGroup, ListGroupItem, Table
} from 'reactstrap'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 
import AppHeader from '../../Layout/AppHeader/'
import AppSidebar from '../../Layout/AppSidebar/'
import AppFooter from '../../Layout/AppFooter/'

const teste = () => {
    debugger
}

const renderItensCarrinho = (props) => {

    return (
        <Fragment>

            <Table className="mb-0">
              
                <tbody>

                    {props.carrinho.map((item, idx) => {

                        return (                        
                            <Fragment key={item.id}>
                                <tr className="d-flex tablesCarrinho">
                                    
                                    <td className="col-sm-2"><img width={75} className="rounded-circle" src={`data:image/jpeg;base64,${item.foto}`} alt=""/></td>
                                    <td className="col-sm-8">{item.nome}</td>
                                    <td className="col-sm-0.5"> <Button color="info" className="btn-circle" onClick={() => props.remItemCarrinho(item)}><FontAwesomeIcon style={{marginLeft:"-3px"}} icon={faMinus} size="1x"/></Button> </td>
                                    <td className="col-sm-0.5"> <Label color="info">{item.qtde}</Label> </td>
                                    <td className="col-sm-0.5"> <Button color="info" className="btn-circle" onClick={() => props.addItemCarrinho(item)}><FontAwesomeIcon style={{marginLeft:"-3px"}} icon={faPlus} size="1x"/></Button> </td>                                    
                                </tr>                                
                            </Fragment>
                        )
                    })}
                </tbody>
            </Table>

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
                        <div className="app-page-title">
                            <div className="page-title-wrapper">
                                <div className="page-title-heading">
                                    <div>
                                        <div
                                            className="page-title-subheading">
                                            Seu carrinho
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Container className="lista-carrinho">
                            
                            {renderItensCarrinho(props)}

                           <div style={{alignSelf: 'center', marginTop: '30px'}}>
                             <Link className="linkBaixo sem-underline" to='/confirmacao'>
                                 <Button style={{position:'inherit'}} className="mb-2 mr-2 card-cart-button" color="info" disabled={props.carrinho.length === 0}>Finalizar Compra</Button>
                             </Link>
      		           </div>
                            
                        </Container>
                       
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