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

import bg1 from '../../../../../assets/utils/images/sidebar/abstract1.jpg';
import bg2 from '../../../../../assets/utils/images/sidebar/abstract2.jpg';
import bg3 from '../../../../../assets/utils/images/sidebar/abstract3.jpg';
import bg4 from '../../../../../assets/utils/images/sidebar/abstract4.jpg';
import bg5 from '../../../../../assets/utils/images/sidebar/abstract5.jpg';
import bg6 from '../../../../../assets/utils/images/sidebar/abstract6.jpg';
import bg7 from '../../../../../assets/utils/images/sidebar/abstract7.jpg';
import bg8 from '../../../../../assets/utils/images/sidebar/abstract8.jpg';
import bg9 from '../../../../../assets/utils/images/sidebar/abstract9.jpg';
import bg10 from '../../../../../assets/utils/images/sidebar/abstract10.jpg';
import bg11 from '../../../../../assets/utils/images/sidebar/city1.jpg';
import bg12 from '../../../../../assets/utils/images/sidebar/city2.jpg';
import bg13 from '../../../../../assets/utils/images/sidebar/city3.jpg';
import bg14 from '../../../../../assets/utils/images/sidebar/city4.jpg';
import bg15 from '../../../../../assets/utils/images/sidebar/city5.jpg';

const Produtos = [{
    Id: 1,
    Nome: 'Shampoo',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: null,
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}];

const override = css`
    display: block;
    margin: 0 auto;
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

    componentDidMount() {

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
            alert(`Erro ao requisitar lista de produtos. Erro: ${error}`)
        })
    }

    clickCarrinho(item) {

        this.props.addItemCarrinho(item)
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
                        }}><h2>Sem Produtos</h2></div>
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
                                        onClickCarrinho = {(item) => 
                                            this.clickCarrinho(item)
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
    valor: state.BuscaReducer.valor
})

const mapDispatchToProps = dispatch => {
    return {
        addItemCarrinho: (item) => { dispatch(addItemCarrinho(item)) },
        // remItemCarrinho: (item) => { dispatch(remItemCarrinho(item)) },
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UtilitiesColors)