import React from 'react';
import ReactDOM from 'react-dom';
import Repository from './Repository';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Repository />, div);
  ReactDOM.unmountComponentAtNode(div);
});
