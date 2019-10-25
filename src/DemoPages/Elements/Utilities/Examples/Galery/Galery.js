import React from 'react';
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
            <Col md="3">
                <Card className="card-lista-produtos">
                    <div className="demo-image-bg">
                        <img src={`data:image/jpeg;base64,${this.props.Produto.foto}`}/>
                    </div>
                    <CardBody>
                        
                        <CardTitle>
                            {this.props.Produto.nome}
                        </CardTitle>
                        <CardSubtitle className="sub-produto">
                            {this.props.Produto.descricao}
                        </CardSubtitle>

                        <ul>
                            {this.props.Produto.tamanho && (
                                <li><b>Tamanho: </b>
                                    {this.props.Produto.tamanho}
                                </li>
                            )}
                            {this.props.Produto.dimensoes && (
                                <li><b>Dimensão: </b>
                                    {this.props.Produto.dimensoes}
                                </li>
                            )}
                            {this.props.Produto.cor && (
                                <li><b>Cor: </b>
                                    {this.props.Produto.cor}
                                </li>
                            )}
                            <li><b>Preço: </b>
                                {this.props.Produto.preco}
                            </li>
                        </ul>
                        
                        <Link to={'/shopitem/' + this.props.Produto.id}>
                             <Button className="mb-2 mr-2" color="success">Comprar</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Galery;