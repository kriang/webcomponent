import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';


const HomePage = (props) => {
    
    return (
        <div>
                    
            <h1> { props.greeting } </h1>

        </div>
    );

};


ReactDOM.render(<HomePage greeting="Hello World!" />, document.getElementById('app'));