import React, {Fragment} from 'react';
import {
    Col,
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button, Progress
} from 'reactstrap'
import {Link, withRouter} from 'react-router-dom'
import Currency from 'react-currency-formatter'


class Galery extends React.Component {
    render() {
        return (
            <Fragment>

                <Col md="3">
                    <Card className="card-lista-produtos">
                        <CardBody>
                            <Link className="linkBaixo sem-underline" to={{
                                        pathname: '/shopitem/',
                                        query : { id: this.props.Produto.id}
                                    }}> 
                                
                                <div className="card-item">
                                    <img src={`data:image/jpeg;base64,${this.props.Produto.foto}`}/>
                                </div>

                                <CardTitle>{this.props.Produto.nome}</CardTitle>
                            
                                <CardSubtitle className="sub-produto">
                                    {this.props.Produto.descricao}
                                </CardSubtitle>

                                <div className="card-preco">                                
                                    <Currency
                                        quantity={parseFloat(this.props.Produto.preco)}
                                        currency="BRL"
                                    />
                                </div>

                            </Link>

                            <Button className="mb-2 mr-2 " color="info" onClick={() => this.props.onClickCarrinho(this.props.Produto)}>+<i className="pe-7s-cart"/></Button>
                        
                            {this.props.Auth && (
                                <Fragment>                                            
                                    <Button className="mb-2 mr-2" color="warning" onClick={() => this.props.onClickRemoverProduto(this.props.Produto)}><i className="pe-7s-trash"/></Button>                                                    
                                </Fragment>
                            )}

                        </CardBody>

                    </Card>
                </Col>
                
            </Fragment>
        )
    }
}

export default withRouter(Galery);