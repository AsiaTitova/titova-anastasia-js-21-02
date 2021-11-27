import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import './App.scss';
import { Layout } from 'antd';
import { Registration } from './components/Registration/Registration';
import UserContainer from './components/Users/UserContainer/UserContainer';
import UserCard from './components/Users/UserCard/UserCard';
import { ThemeContext, ThemeContextProvider, ThemeContextState } from './context/ThemeContext';
import MenuList from './components/Menu/MenuList';

const { Header, Content } = Layout;

const App = () => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>
      {
        (context: Partial<ThemeContextState>) => (
          <Router>
            <Layout className={`app ${context.darkTheme ? 'dark-theme' : ''}`}>
              <Header>
                <MenuList />
              </Header>
              <Content>
                <Switch>
                  <Route exact path="/user/:id">
                    <UserCard />
                  </Route>
                  <Route exact path="/registration">
                    <Registration />
                  </Route>
                  <Route exact path="/">
                    <UserContainer />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Router>
        )
      }
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);

export default App;
