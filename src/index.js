import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const title = 'Hello world React';

ReactDOM.render(<App title={title} />, document.getElementById('app'));
