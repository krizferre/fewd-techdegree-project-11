import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Container from './components/Container';
import NotFound from './components/NotFound';

class App extends Component {

  // All routes re-use one component which is Container, just depends on the keyword/category being searched
  // Home path '/' is redirected to '/cats' to initially have photos to display
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => <Redirect to={process.env.PUBLIC_URL + '/cats'} /> } />
          <Route exact path={process.env.PUBLIC_URL + '/search'} render={ () => <Redirect to={process.env.PUBLIC_URL + '/search/panda'} /> } />
          <Route path={process.env.PUBLIC_URL + '/search/:keyword'} 
                render={ props => <Container 
                                    title='Results for ' 
                                    keyword={props.match.params.keyword} 
                                  />
                       } 
          />
          <Route path={process.env.PUBLIC_URL + '/cats'} render={ () => <Container title='Cat Gifs' keyword='cats' />} />
          <Route path={process.env.PUBLIC_URL + '/dogs'} render={ () => <Container title='Dog Gifs' keyword='dogs' />} />
          <Route path={process.env.PUBLIC_URL + '/birds'} render={ () => <Container title='Bird Gifs' keyword='birds' />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
