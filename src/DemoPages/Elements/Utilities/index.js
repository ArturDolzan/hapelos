import React, {Fragment} from 'react';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import UtilitiesColors from './Examples/ColorStates';
import UtilitiesHelpers from './Examples/Helpers';
import UtilitiesAnimations from './Examples/Animations';

export default class UtilitiesExamples extends React.Component {

    render() {

        return (
            <Fragment>
                {/* <PageTitle
                    heading="Filtros"
                    subheading=""
                    icon="pe-7s-filter icon-gradient bg-deep-blue"
                /> */}
                {/* <UtilitiesAnimations/> */}
                <UtilitiesColors/>
                {/* <UtilitiesHelpers/> */}
            </Fragment>
        );
    }
}