import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar'
import Create from './pages/Create'
import BlogDetails from './pages/BlogDetails'
import Home from './pages/Home'
import Bnpl from './pages/Bnpl';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Router>
       <React.StrictMode>
       <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/bnpls">
             <Bnpl/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
       </React.StrictMode>
    </Router>
  );
}

export default App;