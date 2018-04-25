import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';


const HomePage = () => {
    
    return (
        <div>
                    
            <h1>Hello World!</h1>

        </div>
    );

};


ReactDOM.render(<HomePage />, document.getElementById('app'));



/*



Build components using react and manipulate HTML DOM
- Snippet "import React from 'react'" -> Line 1
- Snippet "import ReactDOM from 'react-dom'" -> Line 2


Telling the system to render the HomePage Component in the div with id="app" in the index.html
- Snippet "ReactDOM.render(<HomePage />, document.getElementById('app'))"  -> Line 9



-------------------------------------------------


Adding custom messages to props
- Props in React represents custom html attributes used within an html element
- greeting will be passed down from the app.js file to the HomePage.js in the format below
Example: <HomePage greeting="Hello World!" />


Styling the content
You can add styles directly to the elements similar to generic html
- Snippet "<h1 className="your-style">Hello World!</h1>""


Please note that react uses custom attribute names for certain elements to avoid conflicts with initialising classes
This is the case with many other html attributes
Example: Use className="" instead of class=""


You will be able to start adding classes in the global.scss file located in the styles folder under src root folder
to start styling your elements



-------------------------------------------------



Adding custom messages to props
- Props in React represents custom html attributes used within an html element
Example: <HomePage greeting="Hello World!" />

- Rendering components with custom greeting message can be done as follows

const HomePage = (props) => { --> added the props variable to be passed down to the component
    
    return (
        <div>
                    
            <h1>{ props.greeting }</h1> --> rendering the greeting prop passed down. This will display the "Hello World! message.

        </div>
    );

};


ReactDOM.render(<HomePage greeting="Hello World!" />, document.getElementById('app')); --> added the "greeting" prop



*/