import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SignInPage from './SignInPage/SignInPage';
import Posts from './PostsContainer/Posts';
import AddPost from './AddPost/AddPost';
import CardContainer from './CardContainer/CardContainer';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/cardContainer'>
            <CardContainer />
          </Route>
          <Route path='/ImageUploadPage'>
           <AddPost />
          </Route>
          <Route path='/mainPage'>
            <Posts />
          </Route>
          <Route path='/'>
            <SignInPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
