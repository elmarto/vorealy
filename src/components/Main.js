require('normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/vorealy3.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="vorealy" />
        <div className="notice">Site under construction<br/>Thanks for coming!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
