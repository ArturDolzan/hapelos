import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {addItemCarrinho, remItemCarrinho} from '../../actions/CarrinhoAction'

import {
    Col, Row, Container,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Progress, Label, ListGroup, ListGroupItem
} from 'reactstrap'
 
import AppHeader from '../../Layout/AppHeader/'
import AppSidebar from '../../Layout/AppSidebar/'
import AppFooter from '../../Layout/AppFooter/'
import PageTitle from 'Layout/AppMain/PageTitle'

const renderItensCarrinhoNovo = (props) => {

    return (
        <Fragment>

            <ListGroup>
                {props.carrinho.map((item, idx) => {

                    return (
                        <ListGroupItem key={item.id}>

                            <Row className="item-carrinho" >
                                <Col sm="2">
                                
                                    <div className="card-item-carrinho">
                                        <img src={`data:image/jpeg;base64,${item.foto}`}/>
                                    </div>

                                </Col>
                                <Col sm="7">
                                    <CardTitle>
                                        {item.nome}
                                    </CardTitle>
                                </Col>
                                <Col sm="1">
                                    <Button className="mb-2 mr-2 card-cart-button" color="info" onClick={() => props.addItemCarrinho(item)}>+</Button>
                                </Col>
                                <Col sm="1">
                                    <Label style={{marginTop: '25px'}} color="info">{item.qtde}</Label>
                                </Col>
                                <Col sm="1">
                                    <Button className="mb-2 mr-2 card-cart-button" color="info" onClick={() => props.remItemCarrinho(item)}>-</Button>
                                </Col>
                            
                            </Row> 

                        </ListGroupItem>
                    )

                })}
            </ListGroup>

        </Fragment>
    )
}
 
const renderItensCarrinho = (props) => {
 
    return (
        <Fragment>
            {props.carrinho.map((item, idx) => {
                
                return (
                  
                    <Fragment key={item.id}>
                        <Row className="item-carrinho" >
                            <Col sm="2">
                            
                                <div className="card-item-carrinho">
                                    <img src={`data:image/jpeg;base64,${item.foto}`}/>
                                </div>

                            </Col>
                            <Col sm="7">
                                <CardTitle>
                                    {item.nome}
                                </CardTitle>
                            </Col>
                            <Col sm="1">
                                <Button className="mb-2 mr-2 card-cart-button" color="info" onClick={() => props.addItemCarrinho(item)}>+</Button>
                            </Col>
                            <Col sm="1">
                                <Label style={{marginTop: '25px'}} color="info">{item.qtde}</Label>
                            </Col>
                            <Col sm="1">
                                <Button className="mb-2 mr-2 card-cart-button" color="info" onClick={() => props.remItemCarrinho(item)}>-</Button>
                            </Col>
                           
                        </Row> 
                        <hr></hr>
                    </Fragment>
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
                            
                            {renderItensCarrinhoNovo(props)}
                            
                         </Container>
                    </div>
                    <Link className="linkBaixo sem-underline" to='/confirmacao'>
                        <Button style={{position:'inherit', float:'right'}} className="mb-2 mr-2 card-cart-button" color="info" disabled={props.carrinho.length === 0}>Finalizar compra</Button>
                    </Link>
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