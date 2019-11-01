import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import PageTitle from 'Layout/AppMain/PageTitle';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppFooter from '../../Layout/AppFooter/';


class Login extends React.Component{

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: "",
    //         password: ""
    //     }
    // }

    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }
    
    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    // handleSubmit = event => {
    //     event.preventDefault();

    //     this.props.history.push('/');
    // }

    render(){

        return (
            <Fragment>
                
                <AppHeader/>

                <div className="Login">
                    <form>
                        <FormGroup controlId="name" bsSize="large">
                            <ControlLabel>Nome</ControlLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            // value={this.state.email}
                            // onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>E-mail</ControlLabel>
                            <FormControl
                            // value={this.state.password}
                            // onChange={this.handleChange}
                            type="email"
                            />
                        </FormGroup>
                        {/* <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Endereço</ControlLabel>
                            <FormControl
                            // value={this.state.password}
                            // onChange={this.handleChange}
                            type="text"
                            />
                        </FormGroup> */}
                        <FormGroup controlId="phone" bsSize="large">
                            <ControlLabel>Telefone</ControlLabel>
                            <FormControl
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            // disabled={!this.validateForm()}
                            type="submit"
                            style= {{
                                backgroundColor: '#17a2b8',
                                color: '#fff',
                                fontWeight: 'bold'
                            }}
                        >
                            Confirmar
                        </Button>


                        {/* <Link className="d-flex justify-content-center" to={`/login/registrar`} 
                            style={{
                                color: '#17a2b8'
                            }}
                        >
                            Registrar */}
                        {/* </Link> */}
                    </form>
                </div>
                   
                <AppFooter></AppFooter>
            </Fragment>
        )
    }
} 

export default Login;