import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {Link} from 'react-router-dom'

import TitleComponent2 from './PageTitleExamples/Variation2'

class PageTitle extends Component {

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
                            <div id="notif" style={{
                                    backgroundColor: "#f00",
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "10px",
                                    position: "absolute"
                                }}></div>
                            <div className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
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
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);