import Auth from "./pages/Auth";
import Features from "./pages/Features";
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './core/guards/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/">
          <Features />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
