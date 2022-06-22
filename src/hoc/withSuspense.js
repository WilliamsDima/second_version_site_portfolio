import React from 'react';
import Preloder from '../Preloder/Preloder';

const withSuspense = (Component, props) => {

    return () => {
        return  <React.Suspense fallback={<Preloder />}>
                    <Component {...props}/>
                </React.Suspense>
    };
}

export default withSuspense;