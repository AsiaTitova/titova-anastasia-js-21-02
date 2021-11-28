import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import './App.scss';
import { ThemeContext, ThemeContextProvider, ThemeContextState } from './context/ThemeContext';
import PostsList from './components/Posts/PostsList/PostsList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserList from './components/Users/UserList/UserList';
import UserCard from './components/Users/UserCard/UserCard';
import Home from './components/Home/Home';

const App = () => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>
      {
        (context: Partial<ThemeContextState>) => (
          <div className={`app ${context.darkTheme ? 'dark-theme' : ''}`}>
            <Router>
              <Header />
              <main className="main">
                <Switch>
                  <Route exact path="/posts">
                    <PostsList />
                  </Route>
                  <Route exact path="/user/:id">
                    <UserCard />
                  </Route>
                  <Route exact path="/users">
                    <UserList />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </main>
              <Footer />
            </Router>
          </div>
        )
      }
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);

export default App;
