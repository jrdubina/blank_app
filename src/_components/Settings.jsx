import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './_styles_/Settings.scss'
import PropTypes from 'prop-types';

library.add(faCog);

export const Settings = ({cogColor = ''}) => {
    return (
        <div className='settingsCog'>
            <FontAwesomeIcon icon='cog' size='3x' color={cogColor} />
        </div>
    );
}

Settings.propTypes = {
    cogColor: PropTypes.string
}