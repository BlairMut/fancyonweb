import React from 'react'



const NewArrivalCards = ({ arrival }) => {

    return (
        

        <div className='wrapper'>
            <div>
                <h5>{arrival.name}</h5>
                <img src={arrival.image.fields.file.url} height="450px" width="300px" />
                <h3>{arrival.price}</h3>
            </div>
        </div>
    );
};
export default NewArrivalCards