import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Card
} from 'reactstrap';
import Galery from '../Galery/Galery';
import {Link} from 'react-router-dom';

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
}, {
    Id: 2,
    Nome: 'Nome',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: 'null',
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}, {
    Id: 3,
    Nome: 'coiso',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: 'null',
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}, {
    Id: 4,
    Nome: 'sabão',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: 'null',
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}, {
    Id: 5,
    Nome: 'sabonete',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: 'null',
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}, {
    Id: 6,
    Nome: 'camisa',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: 'null',
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}, {
    Id: 7,
    Nome: 'bone',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: 'null',
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}, {
    Id: 8,
    Nome: 'bandana',
    Detalhe: 'Detalhe',
    Imagem: bg1,
    Tamanho: 'Tamanho',
    Dimensao: 'null',
    Cor: 'Cor',
    Preco: 'Preço',
    Desconto: 'Desconto'
}];


const UtilitiesColors = (props) => {
    return (
        <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row> 
                    {Produtos.length === 0 && (
                        <div>teste</div>
                    )}

                    
                      {Produtos.filter(item => item.Nome.toUpperCase().includes(props.valor.toUpperCase())).map((item, idx) => {
                        return (
                            
                            <Galery 
                                key = {item.Id}
                                Produto = {item}    
                            />
                            
                        )
                    })}  
                </Row>
            </ReactCSSTransitionGroup>
            <AppFooter></AppFooter>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    valor: state.BuscaReducer.valor
})

export default connect(mapStateToProps, null)(UtilitiesColors)