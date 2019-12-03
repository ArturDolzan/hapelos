import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import React, {Suspense, lazy, Fragment} from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import {
    ToastContainer,
} from 'react-toastify'

const Dashboards = lazy(() => import('../../DemoPages/Dashboards'))
const ShopItem = lazy(() => import('../../DemoPages/ShopItem'))
const Carrinho = lazy(() => import('../../DemoPages/Carrinho'))
const Login = lazy(() => import('../../DemoPages/Login'))
const Administrativo = lazy(() => import('../../DemoPages/Administrativo'))

const Widgets = lazy(() => import('../../DemoPages/Widgets'))

const AppMain = () => {

    return (
        <Fragment>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            <div className='sweet-loading'>
                                <ClipLoader
                                sizeUnit={"px"}
                                size={80}
                                color={'#123abc'}
                                loading={true}
                                />
                            </div>
                        </h6>
                    </div>
                </div>
            }>
                
                <Route path="/shop" component={Dashboards}/>
                
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                        <div className='sweet-loading'>
                                <ClipLoader
                                sizeUnit={"px"}
                                size={80}
                                color={'#123abc'}
                                loading={true}
                                />
                            </div>
                        </h6>
                    </div>
                </div>
            }>
                
                <Route path="/shopitem" component={ShopItem}/>
                
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            <div className='sweet-loading'>
                                <ClipLoader
                                sizeUnit={"px"}
                                size={80}
                                color={'#123abc'}
                                loading={true}
                                />
                            </div>
                        </h6>
                    </div>
                </div>
            }>

                <Route path="/carrinho" component={Carrinho}/>

            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            <div className='sweet-loading'>
                                <ClipLoader
                                sizeUnit={"px"}
                                size={80}
                                color={'#123abc'}
                                loading={true}
                                />
                            </div>
                        </h6>
                    </div>
                </div>
            }>
                
                <Route path="/confirmacao" component={Login}/>
                
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            <div className='sweet-loading'>
                                <ClipLoader
                                sizeUnit={"px"}
                                size={80}
                                color={'#123abc'}
                                loading={true}
                                />
                            </div>
                        </h6>
                    </div>
                </div>
            }>

                <Route path="/administrativo" component={Administrativo}/>

            </Suspense>


            <Route exact path="/" render={() => (
                <Redirect to="/shop"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;