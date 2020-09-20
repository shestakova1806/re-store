import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">BOOM!</span>
            <span>
                something has gone terrible wrong
            </span>
            <span>
                (but we alerady tried to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;