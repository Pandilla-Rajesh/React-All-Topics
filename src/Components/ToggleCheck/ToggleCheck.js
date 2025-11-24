import React, { useState } from 'react';
import ToggleContent from './ToggleContent';

function ToggleCheck() {
    const [ischecked, setIsChecked] = useState(false);

    const handleToggleCheck = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };

    return (
        <>
            <div className='row align-items-center justify-content-center'>
                <div className='col-6'>
                    <h1>Toggle Components</h1>
                    <ComponentA ischecked={ ischecked } />
                    <ComponentB ischecked={ ischecked } />
                    <button onClick={ handleToggleCheck } className='btn btn-primary mb-4'>
                        { ischecked ? 'Checked' : 'Unchecked' }
                    </button>
                    <div>
                        { ischecked && <p>components show hide</p> }
                    </div>
                </div>

                <div className='col-12'>
                    <div>
                        <ToggleContent ischecked={ ischecked } />
                    </div>
                </div>

            </div>

        </>
    );
}

function ComponentA({ ischecked }) {
    return (
        <div>
            <h2>Component A</h2>
            <p>{ ischecked ? 'Checked' : 'Unchecked' }</p>
        </div>
    );
}

function ComponentB({ ischecked }) {
    return (
        <div>
            <h2>Component B</h2>
            <p>{ ischecked ? 'Checked' : 'Unchecked' }</p>
        </div>
    );
}

export default ToggleCheck;
