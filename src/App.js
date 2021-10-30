import Auth from "./pages/Auth";
import Features from "./pages/Features";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Features />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
