import React, { useEffect } from 'react';

import Item from './Item';
import Loader from './Loader';

// component - collection of movies/series of category
const Category = ({ 
    fetchData, 
    data, 
    dataCategory, 
    apiCall, 
    label, 
    param,
    tv, 
}) => {

    // variables
    const dataToDisplay = data.data.results;

    // hook for fetching data
    useEffect( () => {
        const fetchAsyncData = async () => {
            await fetchData(dataCategory, apiCall, param);
        };

        fetchAsyncData();
    }, [apiCall, dataCategory, fetchData, param])

    return (
        <div className="container-top">

            {/* Category label */}
			<div className="tittle-head">
				<h4 className="latest-text">{label}</h4>
			</div>

            {/* Loop for render items in category */}
			<div className="container" style={data.pending || data.error ? { display: 'none'} : {}}>
				<div className="row">
                    {dataToDisplay && 
                        dataToDisplay.map(item => 
                            <Item key={item.id} item={item} tv={!!tv} />
                    )}
                </div>
            </div>

            {/* Loader while data pending */}
            {data.pending && <Loader />}

            {/* Error message */}
            {data.error &&
                <div className='error'>
                    {data.error.message}
                </div>
            }
        </div>
    )
}

export default Category;