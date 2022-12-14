import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
// import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [profile,setProfile] = useState ({})


  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home  profile = {profile} setProfile = {setProfile}/>} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              {/* <Route 
                path="/success" 
                element={<Success />} 
              /> */}
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/skills/:id" 
                element={<Detail />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
             <Route 
                path="/me" 
                element={<Profile profile = {profile} setProfile = {setProfile}/>}
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
