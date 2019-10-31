import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import {
    Col, Row, Container,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Progress
} from 'reactstrap'
 
import AppHeader from '../../Layout/AppHeader/'
import AppSidebar from '../../Layout/AppSidebar/'
import AppFooter from '../../Layout/AppFooter/'
import PageTitle from 'Layout/AppMain/PageTitle'
 
 
const renderItensCarrinho = (props) => {
 
    return (
        <Fragment>
            {props.carrinho.map((item, idx) => {
                return (
                    <Col md="12" className="item-carrinho" key={item.id}>
                        <Container>  
                            <Row>
                                <Col sm="2">
                                
                                    <div className="card-item-carrinho">
                                        <img src={`data:image/jpeg;base64,${item.foto}`}/>
                                    </div>

                                </Col>
                                <Col sm="8">
                                    <CardTitle>
                                        {item.nome}
                                    </CardTitle>
                                </Col>
                                <Col sm="1">
                                    <Button className="mb-2 mr-2 card-cart-button plus" color="info" onClick={() => this.props.onClickCarrinho(this.props.Produto)}>+</Button>
                                </Col>
                                <Col sm="1">
                                    <Button className="mb-2 mr-2 card-cart-button minus" color="info" onClick={() => this.props.onClickCarrinho(this.props.Produto)}>-</Button>
                                </Col>
                            </Row> 
                        </Container>
                        <hr></hr>
                    </Col>
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
                            <Row>
                                {renderItensCarrinho(props)}
                            </Row>
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