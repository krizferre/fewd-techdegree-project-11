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
          <Route exact path="/" render={ () => <Redirect to='/cats' /> } />
          <Route exact path="/search" render={ () => <Redirect to='/search/panda' /> } />
          <Route exact path="/search/:keyword" render={ props => <Container 
                                                                    title='Results for ' 
                                                                    keyword={props.match.params.keyword} 
                                                                  />
                                                      } 
          />
          <Route exact path="/cats" render={ () => <Container title='Cat Gifs' keyword='cats' />} />
          <Route exact path="/dogs" render={ () => <Container title='Dog Gifs' keyword='dogs'/>} />
          <Route exact path="/birds" render={ () => <Container title='Bird Gifs' keyword='birds' />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
