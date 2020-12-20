import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from "../../router/routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.layout> <route.main /> </route.layout>}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
