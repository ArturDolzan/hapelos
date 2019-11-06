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
                        <Link className="linkBaixo sem-underline" to={{
                            pathname: '/shopitem/' + this.props.Produto.id,
                            query : { id: this.props.Produto.id}
                        }}> 
                            <div className="card-item">
                                <img src={`data:image/jpeg;base64,${this.props.Produto.foto}`}/>
                            </div>
                        </Link>
                        <CardBody>
                            <Link className="linkBaixo sem-underline" to={{
                                pathname: '/shopitem/' + this.props.Produto.id,
                                query : { id: this.props.Produto.id}
                            }}>
                                <CardTitle>
                                    {this.props.Produto.nome}

                                </CardTitle>
                                <CardSubtitle className="sub-produto">
                                    {this.props.Produto.descricao}
                                </CardSubtitle>
                            </Link>
                            
                            <div className="card-preco">
                                
                                <Currency
                                    quantity={parseFloat(this.props.Produto.preco)}
                                    currency="BRL"
                                />

                            </div>

                            <div >
                                <Button className="mb-2 mr-2 card-cart-button linkCima" color="info" onClick={() => this.props.onClickCarrinho(this.props.Produto)}>+<i className="pe-7s-cart"/></Button>
                            </div>

                            {this.props.Auth && (
                                <Fragment>                                            
                                    <Button className="mb-2 mr-2 linkCima" color="warning" onClick={() => this.props.onClickRemoverProduto(this.props.Produto)}>+<i className="pe-7s-trash"/></Button>                                                    
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