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
import ClipLoader from 'react-spinners/ClipLoader'
import { css } from '@emotion/core'
import {
    faCoffee, faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

import Currency from 'react-currency-formatter'

import {
    toast,
    Bounce
} from 'react-toastify'

const override = css`
    display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-color: blue;
`;

class ShopItem extends React.Component{

    constructor(props){
        super(props)

        const { router, params, location, routes, history } = this.props

        //let query = queryString.parse(this.props.location.search)

        this.state = {
            produto: {
                id: location.query.id,
                preco: null,
		        foto: ""
            },
            carregando: true
        }
    }

    notify = (msg, sucesso) => this.toastId = toast(msg, {
        transition: Bounce,
        closeButton: true,
        autoClose: 3000,
        position: 'bottom-center',
        type: sucesso? 'success' : 'error'
    })

    componentDidMount() {

        this.setState({carregando: true})

        axios.get(`https://www.infisio.com.br/apihapelos/produtos/recuperarPorId/${this.state.produto.id}`)
        .then(dados => {
            
            this.setState({carregando: false})
            this.setState({
                produto: dados.data[0]
            })
        })
        .catch(error => {
            this.setState({carregando: false})
            alert(`Erro ao requisitar produto. Erro: ${error}`)
        })
    }

    onClickCarrinho(item){
        this.notify(`${item.nome} adicionado(a) ao carrinho...`, true)
        this.props.addItemCarrinho(item)
    }

    render(){

        return (
            <Fragment>
                
                <AppHeader/>
               
                <div className="app-main">
                    
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            <div className='sweet-loading'>
                                <ClipLoader
                                css={override}
                                sizeUnit={"px"}
                                size={80}
                                color={'#123abc'}
                                loading={this.state.carregando}
                                />
                            </div> 

                            {!this.state.carregando && (

                                <Row style={{marginTop: '60px'}}>
                                    <Col md="4" className="itemDetallhe">
                                        
                                        {this.state.produto.foto && (
                                            <img src={`data:image/jpeg;base64,${this.state.produto.foto}`} style={{width: '100%'}}/>
                                        )}
                                        
                                    </Col>
                                    
                                    <Col md="8" className="itemDetallhe">

                                        {this.state.produto.nome && (                                        
                                            <div className="nomeShopItem">
                                                {this.state.produto.nome}
                                            </div>                                        
                                        )}

                                        {this.state.produto.descricao && (                                        
                                            <div className="nomeShopDesc">
                                                {this.state.produto.descricao}
                                            </div>                                        
                                        )}

                                        {this.state.produto.tamanho && (                                        
                                            <div className="nomeShopDefault">
                                                {this.state.produto.tamanho}
                                            </div>                                        
                                        )}

                                        {this.state.produto.dimensoes && (                                        
                                            <div className="nomeShopDefault">
                                                {this.state.produto.dimensoes}
                                            </div>                                        
                                        )}

                                        {this.state.produto.cor && (                                        
                                            <div className="nomeShopDefault">
                                                {this.state.produto.cor}
                                            </div>                                        
                                        )}

                                        {this.state.produto.preco && (                                        
                                            <div className="precoShopItem">
                                                <Currency
                                                        quantity={parseFloat(this.state.produto.preco)}
                                                        currency="BRL"
                                                    />
                                            </div>                                        
                                        )}

                                        <div className="nomeShopBotao">
                                            <Button className="mb-2 mr-2" color="info" onClick={() => this.onClickCarrinho(this.state.produto)}><FontAwesomeIcon icon={faShoppingCart} size="1x"/></Button>
                                        </div>
                                    
                                    
                                    </Col>
                                    
                                </Row>
                            
                            )}
                            
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