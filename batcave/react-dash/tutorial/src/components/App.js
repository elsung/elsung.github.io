import React, { Component } from 'react';

// Import widgets being used in this component
import Widget from
  '../components/Widget'

// Add in styles
import '../styles/App.css';

import '../styles/Widget.css';


class App extends Component {
    render() {
        return (
            <div className="App">
              <Widget />
                {/* Add Widgets to display */}

            </div>
        );
    }
}

export default App;
