import './App.css';
import Footer from './Footer';
import Header from "./Header";
import LoginAs from './LoginAs';
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './Welcome';
import Register from './Register';


function App() {
  return (
    <div className="app">
    {/* Header componenet */}


        <Router>
          <Header />
            <Switch>
              <Route path="/register">
                  <Register />
              </Route>

              <Route path="/loginAs">
                <LoginAs />
              </Route>

              <Route path="/login">
                    <Login />
              </Route>

              <Route path="/">
                <Welcome />
              </Route>

            </Switch>
            <Footer />
        </Router>

    
        {/* Login Component
        <div>
         <LoginAs className="loginAs" />
        </div> */}

            
    </div>
  );
}

export default App;

// image = https://cdn4.vectorstock.com/i/1000x1000/29/73/cross-health-dental-care-logo-design-inspiration-vector-30732973.jpg