import React, {Fragment} from 'react';
import {
    Col,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button
} from 'reactstrap'
import {Link} from 'react-router-dom'


class Galery extends React.Component {
    render() {
        return (
            <Fragment>
                <Col md="3">

                    <Card className="card-lista-produtos">
                        <div className="card-item">
                            <img src={`data:image/jpeg;base64,${this.props.Produto.foto}`}/>
                        </div>
                        <CardBody>
                            
                            <CardTitle>
                                {this.props.Produto.nome}
                            </CardTitle>
                            <CardSubtitle className="sub-produto">
                                {this.props.Produto.descricao}
                            </CardSubtitle>

                            <Link to={ '/shopitem/' + this.props.Produto.id}> 
                                <Button className="mb-2 mr-2 card-item-button" color="success">Comprar</Button>
                            </Link>

                            <Link to={'/shopitem/' + this.props.Produto.id}>
                                <Button className="mb-2 mr-2 card-cart-button" color="info"><i className="pe-7s-cart"/></Button>
                            </Link>

                        </CardBody>
                    </Card>
                    
                </Col>
            </Fragment>
        )
    }
}

export default Galery;