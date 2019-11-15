import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Row, Card, Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
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

import {setPulseMobileMenu} from '../../../../../reducers/ThemeOptions'


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
            carregando: true,
            modal: false,
            itemRemover: {}
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
        
        this.pulseMobileMenu()
    }

    pulseMobileMenu = () => {
        
        this.props.setPulseMobileMenu(true)
        
        setTimeout(()=> this.props.setPulseMobileMenu(false), 500)
    }

    clickRemoverProduto(item) {

        /*axios.delete(`https://www.infisio.com.br/apihapelos/produtos/${item.id}`)
        .then(_ => {
            
            this.carregarProdutos()

            this.notify('Produto removido com sucesso!', true)

        })
        .catch(error => {
            
            this.notify(`Não foi possível remover. Falha: ${error}`, false)
        })*/

        this.setState({
            itemRemover: item
        })
        this.toggleModal()
    }

    clickLike(item) {
                
        axios.post(`https://www.infisio.com.br/apihapelos/produtos/addLike/${item.id}`)
        .then(dados => {
            
            let prod = [...this.state.produtos]

            let item = prod.filter(item => item.id == dados.data.id)[0]

            if (item){
                item.likes = item.likes + 1
            }

            this.setState({
                produtos: prod
            })

            this.notify('Liked =D', true)

        })
        .catch(error => {
            
            this.notify(`Não foi possível curtir. Falha: ${error}`, false)
        })
    }

    removerProduto = () => {

        let item = {...this.state.itemRemover}

        if (item) {

            axios.delete(`https://www.infisio.com.br/apihapelos/produtos/${item.id}`)
            .then(_ => {
                
                this.carregarProdutos()
                this.setState({
                    itemRemover: {}
                })
                this.toggleModal()

                this.notify('Produto removido com sucesso!', true)

            })
            .catch(error => {
                
                this.notify(`Não foi possível remover. Falha: ${error}`, false)
            })
        }
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
    }

    renderModal() {

        return (
            <Fragment>
                 <div>                    
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
                        <ModalHeader toggle={this.toggleModal}>Confirmação</ModalHeader>
                        <ModalBody>
                            Deseja remover o produto selecionado?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.removerProduto}>Sim</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModal}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Fragment>
        )
    }

    render(){

        return (
            <Fragment>
                {this.renderModal()}
                <div className='sweet-loading'>
                    <ClipLoader
                    css={override}
                    sizeUnit={"px"}
                    size={80}
                    color={'#123abc'}
                    loading={this.state.carregando}
                    />
                </div>

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
                                        onClickLike = {(item) => 
                                            this.clickLike(item)
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
        addItemCarrinho: (item) => { dispatch(addItemCarrinho(item)) },
        setPulseMobileMenu: (enable) => { dispatch(setPulseMobileMenu(enable)) },
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UtilitiesColors)