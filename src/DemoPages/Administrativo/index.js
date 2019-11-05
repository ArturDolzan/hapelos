import React, {Fragment} from 'react'
import AppHeader from '../../Layout/AppHeader/'
import AppFooter from '../../Layout/AppFooter/'

import {
    Col, Row, Container,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Progress, Label, ListGroup, ListGroupItem
} from 'reactstrap'

class Administrativo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            autenticado: false
        }
    }

    renderAuth() {

        return (
            <Fragment>
                teste
            </Fragment>
        )
    }

    render() {

        return (
            <Fragment>
                {/* <AppHeader/> */}

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
                                
                                
                                    {!this.state.autenticado && (
                                        
                                        <Fragment>
                                            {this.renderAuth()}
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

export default Administrativo