import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {setValorBusca} from '../../../actions/BuscaAction'

import cx from 'classnames';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSearch: false,
            valor: ''
        };
    }

    getValue(event) {
        this.setState({valor: event.target.value}, this.props.setValorBusca(event.target.value))
    }

    render() {
        return (
            <Fragment>
                <div className={cx("search-wrapper", {
                    'active': this.state.activeSearch
                })}>
                    <div className="input-holder">
                        <input onChange={(e) => this.getValue(e)} value={this.state.valor} type="text" className="search-input"/>
                        <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})}
                                className="search-icon"><span/></button>
                    </div>
                    <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})} className="close"/>
                </div>
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setValorBusca: (valor) => { dispatch(setValorBusca(valor)) },
    };
}



export default connect(null, mapDispatchToProps)(SearchBox);