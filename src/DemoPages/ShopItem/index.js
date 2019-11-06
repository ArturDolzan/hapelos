import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {
    Col, Row,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Label
} from 'reactstrap'
import PageTitle from 'Layout/AppMain/PageTitle';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {addItemCarrinho, remItemCarrinho} from '../../actions/CarrinhoAction'

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

import Currency from 'react-currency-formatter'

class ShopItem extends React.Component{

    constructor(props){
        super(props)

        const { router, params, location, routes, history } = this.props

        this.state = {
            produto: {
                id: location.query.id,
		preco: 0,
		foto: ""
            }
        }
    }

    componentDidMount() {

        axios.get(`https://www.infisio.com.br/apihapelos/produtos/recuperarPorId/${this.state.produto.id}`)
        .then(dados => {
            
            this.setState({
                produto: dados.data[0]
            })
        })
        .catch(error => {
            alert(`Erro ao requisitar produto. Erro: ${error}`)
        })
    }

    onClickCarrinho(item){
        this.props.addItemCarrinho(item)
    }

    render(){

        return (
            <Fragment>
                
                <AppHeader/>
               
                <div className="app-main">
                    
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Row style={{marginTop: '60px'}}>
                                <Col md="4" className="itemDetallhe">
                                    
				   {this.state.produto.foto && (
                                        <img src={`data:image/jpeg;base64,${this.state.produto.foto}`} style={{width: '100%'}}/>
				    )}
                                    
                                </Col>
                                
                                <Col md="8" className="itemDetallhe">
                                   
                                    <ul className="itemDetalheLista">
                                        {this.state.produto.nome && (
                                            <li><b>Nome </b>
                                                <div>
                                                    {this.state.produto.nome}
                                                </div>
                                            </li>
                                        )}

                                        {this.state.produto.descricao && (
                                            <li><b>Descrição </b>
                                                <div>
                                                    {this.state.produto.descricao}
                                                </div>
                                            </li>
                                        )}
                                        {this.state.produto.tamanho && (
                                            <li><b>Tamanho </b>
                                                <div>
                                                    {this.state.produto.tamanho}
                                                </div>
                                            </li>
                                        )}
                                        {this.state.produto.dimensoes && (
                                            <li><b>Dimensões </b>
                                                <div>
                                                    {this.state.produto.dimensoes}
                                                </div>
                                            </li>
                                        )}
                                        {this.state.produto.cor && (
                                            <li><b>Cor </b>
                                                <div>
                                                    {this.state.produto.cor}
                                                </div>
                                            </li>
                                        )}
					{this.state.produto.preco && (
                                          <li>
                                            <div className="precoShopItem">
                                                <Currency
                                                    quantity={parseFloat(this.state.produto.preco)}
                                                    currency="BRL"
                                                />
                                            </div>

                                          </li>
					)}
                                        <li>
                                            <Button className="mb-2 mr-2" color="info" onClick={() => this.onClickCarrinho(this.state.produto)}>+<i className="pe-7s-cart"/></Button>
                                        </li>
                                    </ul>
                                </Col>
                                
                            </Row>
                            
                            
                        </div>
                    </div>
        
                </div>
                <AppFooter></AppFooter>
            </Fragment>
        )
    }
} 

const mapStateToProps = state => ({
    valor: state.BuscaReducer.valor
})

const mapDispatchToProps = dispatch => {
    return {
        addItemCarrinho: (item) => { dispatch(addItemCarrinho(item)) },
    };
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopItem))