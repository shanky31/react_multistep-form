import React from 'react';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const Main =(props)=> {
    return (
        <>
        <div className='main'>
            <StepOne />
            <StepTwo />
            <StepThree />
        </div>
        
        </>
    )
}

export default Main;