import React, {Fragment} from 'react'
import AppHeader from '../../Layout/AppHeader/'
import AppFooter from '../../Layout/AppFooter/'
import axios from 'axios'
import {connect} from 'react-redux'

import { Col, Row, Container, Input } from 'reactstrap'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"

import {setValorAuth} from '../../actions/AuthAction'

import {
    toast,
    Bounce
} from 'react-toastify'

class Administrativo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            senha: "",
            nome: "",
            descricao: "",
            tamanho: "",
            dimensoes: "",
            preco: "",
            cor: "",
            foto: ""
        }
    }

    notify = (msg, sucesso) => this.toastId = toast(msg, {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: sucesso? 'success' : 'error'
    })

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    validateAuth() {
        return this.state.senha.length > 0 && this.state.email.length > 0
    }

    handleSubmitAuth = event => {
        event.preventDefault()

        axios.post(`https://www.infisio.com.br/apihapelos/signin/`,
        {
            email: this.state.email,
            password: this.state.senha
        })
        .then(auth => {
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.data.token

            this.props.setValorAuth(true)

            this.notify('Autenticado com sucesso!', true)

        })
        .catch(error => {
            let msg = ' '
            
            error.response.status === 401 ? msg = 'Senha incorreta!' : msg = error.response.data
            
            this.notify(`Não foi possível autenticar. Falha: ${msg}`, false)
        })
        
    }

    renderAuth() {

        return (
            <Fragment>
                
                <div className="Login">
                    <form onSubmit={this.handleSubmitAuth}>
                       
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>E-mail</ControlLabel>
                            <FormControl
                             value={this.state.email}
                             onChange={this.handleChange}
                            type="email"
                            />
                        </FormGroup>
                       
                        <FormGroup controlId="senha" bsSize="large">
                            <ControlLabel>Senha</ControlLabel>
                            <FormControl
                             value={this.state.senha}
                             onChange={this.handleChange}
                             type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                             disabled={!this.validateAuth()}
                            type="submit"
                            style= {{
                                backgroundColor: '#17a2b8',
                                color: '#fff',
                                fontWeight: 'bold'
                            }}
                        >
                            Autenticar
                        </Button>

                    </form>
                </div>

            </Fragment>
        )
    }

    validateNewItem() {
        return this.state.nome.length > 0 && this.state.descricao.length > 0 && this.state.preco.length > 0 && this.state.foto.length > 0
    }

    handleSubmitNewItem = event => {
        event.preventDefault()

        axios.post(`https://www.infisio.com.br/apihapelos/produtos/`,
        {
            id: 0,
            nome: this.state.nome,
            descricao: this.state.descricao,
            tamanho: this.state.tamanho,
            dimensoes: this.state.dimensoes,
            preco: this.state.preco,
            cor: this.state.cor,
            foto: this.state.foto
        })
        .then(_ => {
        
            this.setState({
                nome: "",
                descricao: "",
                tamanho: "",
                dimensoes: "",
                preco: "",
                cor: "",
                foto: ""
            })

            this.notify('Produto cadastrado com sucesso!', true)

        })
        .catch(error => {

            this.notify(`Não foi possível cadastrar novo item. Falha: ${error.response.data}`, false)
        })
    }

    selecionouFoto(e){

        let f = e.target.files[0]

        const reader = new FileReader()
        
        reader.readAsBinaryString(f);
        reader.onloadend = () => {
            const binaryData = reader.result;
            
            const base64String = window.btoa(binaryData);

            this.setState({
                foto: base64String
            })
        }
        
    }

    renderNewItem() {

        return (
            <Fragment>
                
                <div className="Adm">
                    <form onSubmit={this.handleSubmitNewItem}>
                       
                        <Row form>
                            <Col md={6}>
                                <FormGroup controlId="nome" bsSize="large">
                                    <ControlLabel>Nome</ControlLabel>
                                    <FormControl
                                    value={this.state.nome}
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>

                                <FormGroup controlId="descricao" bsSize="large">
                                    <ControlLabel>Descrição</ControlLabel>
                                    <FormControl
                                    value={this.state.descricao}
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>

                                <FormGroup controlId="tamanho" bsSize="large">
                                    <ControlLabel>Tamanho</ControlLabel>
                                    <FormControl
                                    value={this.state.tamanho}
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>
                            
                            </Col>

                            <Col md={6}>
                                <FormGroup controlId="dimensoes" bsSize="large">
                                    <ControlLabel>Dimensões</ControlLabel>
                                    <FormControl
                                    value={this.state.dimensoes}
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>

                                <FormGroup controlId="preco" bsSize="large">
                                    <ControlLabel>Preço</ControlLabel>
                                    <FormControl
                                    value={this.state.preco}
                                    onChange={this.handleChange}
                                    type="number"
                                    />
                                </FormGroup>

                                <FormGroup controlId="cor" bsSize="large">
                                    <ControlLabel>Cor</ControlLabel>
                                    <FormControl
                                    value={this.state.cor}
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Col md={12}>
                            <FormGroup controlId="foto" bsSize="large">
                                <ControlLabel>Foto</ControlLabel>
                                <Input type="file" name="file" id="exampleFile" 
                                accept=".jpg,.jpeg"
                                onChange={(e) => this.selecionouFoto(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <div className="card-item">
                                <img src={`data:image/jpeg;base64,${this.state.foto}`}/>
                            </div>

                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateNewItem()}
                                type="submit"
                                style= {{
                                    backgroundColor: '#17a2b8',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}
                            >
                                Adicionar Produto
                            </Button>

                        </Col>
                       
                    </form>
                </div>

            </Fragment>
        )
    }

    render() {

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
                                                    Administrativo
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                    {!this.props.auth && (                                        
                                        <Fragment>
                                            {this.renderAuth()}
                                        </Fragment>
                                    )}

                                    {this.props.auth && (                                        
                                        <Fragment>
                                            {this.renderNewItem()}
                                        </Fragment>
                                    )}
                                    
                                
                            </div>                            
                        </div>
                            
                    </div>

                <AppFooter/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.AuthReducer.auth
})

const mapDispatchToProps = dispatch => {
    return {
        setValorAuth: (auth) => { dispatch(setValorAuth(auth)) }
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Administrativo)