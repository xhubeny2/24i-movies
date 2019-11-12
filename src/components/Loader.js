import React from 'react';

//component - loader - displays loader when fetching data (source: https://loading.io/css/)
export default () => (
    <div className='container'> 
        <div className='loader'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
)