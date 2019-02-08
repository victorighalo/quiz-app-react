import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Index from './views';
import Successful from './views/successful';
import NoMatch from './views/404';
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders index page without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><Index /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders successful page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Successful />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 404 page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoMatch />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders index page without crashing - snapshot', () => {
    const tree = renderer
        .create(<MemoryRouter><Index /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders successful page without crashing - snapshot', () => {
    const tree = renderer
        .create(<Successful />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders 404 page correctly - snapshot', () => {
    const tree = renderer
        .create(<NoMatch />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});