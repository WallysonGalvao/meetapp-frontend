import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './styles';

export default function Loading({ children }) {
    return (
        <>
            <Text>{children}</Text>
        </>
    );
}

Loading.propTypes = {
    children: PropTypes.string.isRequired,
};
