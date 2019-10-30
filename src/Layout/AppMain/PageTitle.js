import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {Link} from 'react-router-dom'

import TitleComponent2 from './PageTitleExamples/Variation2'

class PageTitle extends Component {
    renderQtdeCarrinho(){
 
        let qtde = 0
  
        this.props.carrinho.map((item, idx) => {
            qtde = qtde + item.qtde
        })
  
        return (
            <Fragment>
                {qtde}
            </Fragment>
        )
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

            <div className="app-page-title">
                <div className="page-title-wrapper">
                    {/* <div className="page-title-heading">
                    <div
                            className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
                            <i className={icon}/>
                        </div>
                        <div>
                            {heading}
                            <div
                                className={cx("page-title-subheading", {'d-none': !enablePageTitleSubheading})}>
                                {subheading}
                            </div>
                        </div>
                    </div> */}
                    <div className="page-title-actions">

                        <Link to={'/carrinho'}>             
                            <div className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
                                {this.renderQtdeCarrinho()}
                                <i className="pe-7s-cart"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
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