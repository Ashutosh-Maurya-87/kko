import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import loadingIcon from '../../assets/img/loader/Infinitygreen.svg';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function LoaderComponent( {children, isLoading, type, ...props}){
    if(type === 'dots'){
        return <img sfc={loadingIcon} alt="loader"/>
    }
    return(
        <Loader loaded={!isLoading} {...props}>
            {children}
        </Loader>
    );
}
LoaderComponent.propTypes = {
    ...Loader.propTypes,
    isLoading: PropTypes.bool,
    type: PropTypes.oneOf(["circle", "dots"]),
    children: PropTypes.node,
};
LoaderComponent.defaultProps = {
    width: 5,
    length: 10,
    radius: 10,
    zIndex: 100,
    isLoading: true,
    type: "circle",
};