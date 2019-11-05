import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class PageTitle extends Component {
    renderQtdeCarrinho(){
 
        let qtde = 0
  
        this.props.carrinho.map((item, idx) => {
            qtde = qtde + item.qtde
        })
        
        if (qtde) 
            return <Fragment><span className="badge badge-pill">{qtde}</span></Fragment>
        else
            return ''
    }
 
    render() {
        let {
            enablePageTitleIcon,
            enablePageTitleSubheading,

            heading,
            icon,
            subheading
        } = this.props;

        return (
            <Fragment>
                <Link to={'/carrinho'} className="linkBranco mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                    <i className="pe-7s-cart btn-icon-wrapper font-size-xlg"> </i>
                    {this.renderQtdeCarrinho()}
                </Link>

                <Link to={'/administrativo'} className="linkBranco mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                    <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> </i>
                </Link>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
    carrinho: state.CarrinhoReducer.itensCarrinho
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);