import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Actions from "./components/Actions/Actions";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route Path="/users" exact component={Users} />
          <Route path="/actions" exact component={Actions} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
