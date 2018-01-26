import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Welcome back, { props.userName }!</p>
            <p>{ props.greeting }</p>
        </div>
    );
}

export default userOutput;