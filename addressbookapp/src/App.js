import './App.css';
import AddressBookForm from "./components/addressbook-form/address-book-form";
import HomePage from "./components/addressbookhome/address-book-home";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path = "/address-book-form"><AddressBookForm /></Route>
          <Route exact path = "/home"><HomePage /></Route>
          <Route exact path="/address-book-form/:id"><AddressBookForm /></Route>
          <Route exact path=""><Redirect exact from="/" to="/home" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;