import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Card
} from 'reactstrap';
import Galery from '../Galery/Galery';
import axios from 'axios'
import {Link} from 'react-router-dom';
import {addItemCarrinho, remItemCarrinho} from '../../../../../actions/CarrinhoAction'
import ClipLoader from 'react-spinners/ClipLoader'
import { css } from '@emotion/core'

import ColorSwatches from './ColorSolids';
import ColorGradients from './ColorGradients';
import TextColor from './TextColor';
import AppFooter from '../../../../../Layout/AppFooter/';
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

class UtilitiesColors extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            produtos: [

            ],
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

    componentDidMount = () => {

        this.carregarProdutos()
    }

    carregarProdutos() {
        
        this.setState({carregando: true, produtos: []})

        axios.get('https://www.infisio.com.br/apihapelos/produtos/')
        .then(dados => {
            
            this.setState({
                produtos: dados.data
            })
            this.setState({carregando: false})
        })
        .catch(error => {
            this.setState({carregando: false})

            this.notify(`Erro ao requisitar lista de produtos. Erro: ${error}`, false)
        })
    }

    clickCarrinho(item) {

        this.notify(`${item.nome} adicionado(a) ao carrinho...`, true)
        this.props.addItemCarrinho(item)
    }

    clickRemoverProduto(item) {

        axios.delete(`https://www.infisio.com.br/apihapelos/produtos/${item.id}`)
        .then(_ => {
            
            this.carregarProdutos()

            this.notify('Produto removido com sucesso!', true)

        })
        .catch(error => {
            
            this.notify(`Não foi possível remover. Falha: ${error}`, false)
        })
    }

    render(){

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    className="container"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    {(this.state.produtos.length === 0 && !this.state.carregando) && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}><h2>Sem produtos ☺</h2></div>
                    )}
                   
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
                        <Row> 
                            
                            {this.state.produtos.filter(item => item.nome.toUpperCase().includes(this.props.valor.toUpperCase())).map((item, idx) => {
                                return (
                                    
                                    <Galery 
                                        key = {item.id}
                                        Produto = {item}
                                        Auth = {this.props.auth}  
                                        onClickCarrinho = {(item) => 
                                            this.clickCarrinho(item)
                                        }
                                        onClickRemoverProduto = {(item) => 
                                            this.clickRemoverProduto(item)
                                        }  
                                        
                                    />
                                    
                                )
                            })}  
                        </Row>
                    )}
                    
                </ReactCSSTransitionGroup>
                <AppFooter></AppFooter>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    valor: state.BuscaReducer.valor,
    auth: state.AuthReducer.auth
})

const mapDispatchToProps = dispatch => {
    return {
        addItemCarrinho: (item) => { dispatch(addItemCarrinho(item)) }
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UtilitiesColors)