import React, {useState} from 'react';
import HookForm from './HookForm';

const Display = (props) => {
    const {personList} = props;
    
return(
    <div>
        <h2>Your Form Data</h2>
        
        <div className='result'>
        <ul>
        {
            personList.map( (person, index) =>(
                <div  key={ index }>
    
                <li>{ person.firstname }</li>
                <li>{ person.lastname }</li>
                <li>{ person.email }</li>
                <li>{ person.password }</li>
                <li>{ person.confimpassword }</li>

                </div>
            )
            )
        }
        </ul>
           
        </div>
    </div>
);
}

export default Display;