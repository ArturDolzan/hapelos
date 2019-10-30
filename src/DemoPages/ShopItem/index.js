import React, {Fragment} from 'react';
import {
    Col, Row,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button
} from 'reactstrap'
import PageTitle from 'Layout/AppMain/PageTitle';
import bg1 from '../../assets/utils/images/sidebar/abstract1.jpg';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Produtos = {
    Id: 1,
    Nome: 'Shampoo',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: null,
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
};

class ShopItem extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            produto: {
                id: this.props.location.query.id
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

    render(){

        return (
            <Fragment>
                
                <AppHeader/>
                <PageTitle
                    style={{
                        marginTop: "60px!important"
                    }}
                    heading="Filtros"
                    subheading=""
                    icon="pe-7s-filter icon-gradient bg-deep-blue"
                />
                <div className="app-main">
                    <AppSidebar/>
                    
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Row>
                                <Col md="5" className="itemDetallhe">
                                    <div className="demo-image-bg" 
                                        style = {{
                                            backgroundImage: 'url(' + this.state.produto.Imagem + ')',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </Col>
                                <Col md="5" className="itemDetallhe">
                                    <h1>
                                        {/* {JSON.parse(props.Produto.Nome)} */}
                                    </h1>
                                    <ul className="itemDetalheLista">
                                        {this.state.produto.tamanho && (
                                            <li><b>Tamanho: </b>
                                                {this.state.produto.tamanho}
                                            </li>
                                        )}
                                        {this.state.produto.Dimensao && (
                                            <li><b>Dimensão: </b>
                                                {this.state.produto.Dimensao}
                                            </li>
                                        )}
                                        {this.state.produto.Cor && (
                                            <li><b>Cor: </b>
                                                {this.state.produto.Cor}
                                            </li>
                                        )}
                                        <li><b>Preço: </b>
                                            {this.state.produto.Preco}
                                        </li>
                                    </ul>
        
                                    <Button className="mb-2 mr-2" color="success">Adicionar ao carrinho</Button>                            
                                    <Button className="mb-2 mr-2" color="success">Comprar</Button>                            
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

export default withRouter(ShopItem);