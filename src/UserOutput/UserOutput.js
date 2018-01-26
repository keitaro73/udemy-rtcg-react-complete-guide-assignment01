import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Welcome back, { props.userName }!</p>
            <p>The cake is a lie!</p>
        </div>
    );
}

export default userOutput;