import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl, ControlLabel, Col, Row } from "react-bootstrap"
import PageTitle from 'Layout/AppMain/PageTitle'
import axios from 'axios'
import {connect} from 'react-redux'
import {
    toast,
    Bounce
} from 'react-toastify'
import {faCreditCard} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppFooter from '../../Layout/AppFooter/';


class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            nome: "",
            telefone: ""
        }
    }

    notify = (msg, sucesso, cbclose) => this.toastId = toast(msg, {
        transition: Bounce,
        closeButton: true,
        autoClose: 2500,
        position: 'bottom-center',
        type: sucesso? 'success' : 'error',
        onClose: () => {cbclose()}
    })

     validateForm() {
         return this.state.email.length > 0 && this.state.nome.length > 0 && this.state.telefone.length > 0;
     }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        let produtos = []

        this.props.carrinho.map((item, idx) => {

            produtos.push(
                {
                    id: item.id,
                    nome: item.nome,
                    qtde: item.qtde
                }
            )
        })

        axios.post(`https://www.infisio.com.br/apihapelos/email/confirmacaoCompra`,
        {
            destinatario: this.state.email,
            nome: this.state.nome,
            telefone: this.state.telefone,
            produtos
        })
        .then(_ => {
            
            this.notify(`Compra finalizada com sucesso! Por favor, verifique sua caixa de e-mail...`, true, () => {
                this.props.history.push('/')
            })

        })
        .catch(error => {
            alert(`Erro ao finalizar compra. Erro: ${error}`)
        })

    }

    render(){

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
                                                    Finalizar 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div className="Login">
                                <form onSubmit={this.handleSubmit}>
                                    <Row form>
                                        <Col md={12}>
                                            <FormGroup controlId="nome" bsSize="large">
                                                <ControlLabel>Nome</ControlLabel>
                                                <FormControl
                                                autoFocus
                                                type="text"
                                                value={this.state.nome}
                                                onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                            <FormGroup controlId="email" bsSize="large">
                                                <ControlLabel>E-mail</ControlLabel>
                                                <FormControl
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                type="email"
                                                />
                                            </FormGroup>
                                        
                                            <FormGroup controlId="telefone" bsSize="large">
                                                <ControlLabel>Telefone</ControlLabel>
                                                <FormControl
                                                value={this.state.telefone}
                                                onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                            <Button
                                                block
                                                bsSize="large"
                                                disabled={!this.validateForm()}
                                                color="info"
                                                type="submit"
                                                style= {{
                                                    backgroundColor: '#17a2b8',
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                    fontSize: '15px'
                                                }}
                                            >
                                                <FontAwesomeIcon style={{marginRight: '10px'}} icon={faCreditCard} size="1x"/>
                                                Confirmar
                                            </Button>

                                        </Col>
                                    </Row>

                                </form>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
} 


const mapStateToProps = state => ({
    carrinho: state.CarrinhoReducer.itensCarrinho
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);