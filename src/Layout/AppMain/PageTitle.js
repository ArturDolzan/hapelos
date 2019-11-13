import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {setEnableMobileMenuSmall} from '../../reducers/ThemeOptions'

class PageTitle extends Component {
    
    alterarEstadoMenuMovel = (ativo) => {
        
        this.props.setEnableMobileMenuSmall(ativo)
    }
    
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

                {this.props.enableMobileMenuSmall && (
                    <Link to={'/'} onClick={() => {this.alterarEstadoMenuMovel(false)}} className="linkBranco mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                        <i className="pe-7s-home btn-icon-wrapper font-size-xlg"> </i>
                    </Link>
                )}
                
                <Link to={'/carrinho'} onClick={() => {this.alterarEstadoMenuMovel(false)}} className="linkBranco mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                    <i className="pe-7s-cart btn-icon-wrapper font-size-xlg"> </i>
                    {this.renderQtdeCarrinho()}
                </Link>

                {!this.props.auth && (                                        
                    <Fragment>
                        
                        <Link to={'/administrativo'} onClick={() => {this.alterarEstadoMenuMovel(false)}} className="linkBranco mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm"> 
                            <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> </i>                
                        </Link>

                    </Fragment>
                )}

                {this.props.auth && (                                        
                    <Fragment>
                        
                        <Link to={'/administrativo'} onClick={() => {this.alterarEstadoMenuMovel(false)}} className="linkVermelho mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm"> 
                            <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> </i>                
                        </Link>

                    </Fragment>
                )}

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
    carrinho: state.CarrinhoReducer.itensCarrinho,
    auth: state.AuthReducer.auth,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall
});

const mapDispatchToProps = dispatch => ({
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);