import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import ColorSwatches from './ColorSolids';
import ColorGradients from './ColorGradients';
import TextColor from './TextColor';

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
                   
                    <Col md="12">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Fotinhos dos dogs</CardTitle>
                                <Row>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg1 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg2 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg3 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg4 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg5 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg6 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg7 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg8 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg9 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg10 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg11 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg12 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg13 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg14 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                    <Col md="3">
                                        <div className="demo-image-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg15 + ')',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}
                                        />
                                    </Col>
                                </Row>


                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default UtilitiesColors;
