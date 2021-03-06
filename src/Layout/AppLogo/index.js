import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Hamburger from 'react-hamburgers'

import AppMobileMenu from '../AppMobileMenu'

import {Animated} from "react-animated-css"

import {
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../reducers/ThemeOptions';

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false
        };

    }

    toggleEnableClosedSidebar = () => {
        let {enableClosedSidebar, setEnableClosedSidebar} = this.props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }

    state = {
        openLeft: false,
        openRight: false,
        relativeWidth: false,
        width: 280,
        noTouchOpen: false,
        noTouchClose: false,
    };

    render() {
        let {
            enableClosedSidebar,
        } = this.props;

        const {
        } = this.state;

        return (
            <Fragment>
                <Link to={'/'}>
                    <div className="app-header__logo">
                        <div className="logo-src"/>
                      
                    </div>
                </Link>

                {/* <AppMobileMenu/> */}

                  <Animated style={{marginTop:"-60px"}} animationIn="lightSpeedIn" animationOut="lightSpeedOut" isVisible={true} animationInDuration={500}> 
                    
                    <AppMobileMenu/>
                    
                </Animated> 
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableClosedSidebar: enable => dispatch(setEnableClosedSidebar(enable)),
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);