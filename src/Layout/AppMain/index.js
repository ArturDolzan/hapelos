import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import React, {Suspense, lazy, Fragment} from 'react'

import {
    ToastContainer,
} from 'react-toastify'

const Dashboards = lazy(() => import('../../DemoPages/Dashboards'))
const ShopItem = lazy(() => import('../../DemoPages/ShopItem'))

const Widgets = lazy(() => import('../../DemoPages/Widgets'))

const AppMain = () => {

    return (
        <Fragment>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Aguarde...
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
                            Aguarde...
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/shopitem" component={ShopItem}/>
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/shop"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;