import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import EventDashboard from './components/EventDashborard/EventDashboard'
import Welcome from './components/Welcome/Welcome'

function App() {

  return (

    <Router>
        <Switch>
            <Route exact path='/' component={Welcome}/>

            <Layout>
              <Route exact path='/events' component={EventDashboard} />
            </Layout>
        </Switch>
        
    </Router>
    
  );
}

export default App;
