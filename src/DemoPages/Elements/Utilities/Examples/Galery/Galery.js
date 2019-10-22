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
                    <div className="demo-image-bg"
                        style={{
                            backgroundImage: 'url(' + this.props.Produto.Imagem + ')'
                        }}
                    />
                    <CardBody>
                        
                        <CardTitle>
                            {this.props.Produto.Nome}
                        </CardTitle>
                        <CardSubtitle className="sub-produto">
                            {this.props.Produto.Detalhe}
                        </CardSubtitle>

                        <ul>
                            {this.props.Produto.Tamanho && (
                                <li><b>Tamanho: </b>
                                    {this.props.Produto.Tamanho}
                                </li>
                            )}
                            {this.props.Produto.Dimensao && (
                                <li><b>Dimensão: </b>
                                    {this.props.Produto.Dimensao}
                                </li>
                            )}
                            {this.props.Produto.Cor && (
                                <li><b>Cor: </b>
                                    {this.props.Produto.Cor}
                                </li>
                            )}
                            <li><b>Preço: </b>
                                {this.props.Produto.Preco}
                            </li>
                        </ul>
                        
                        <Link to={'/shopitem/' + this.props.Produto.Id}>
                             <Button className="mb-2 mr-2" color="success">Comprar</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Galery;