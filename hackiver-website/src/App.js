import { Container, Grid } from '@mui/material';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container>
        <Grid item xs = {12} sm={12} lg={3} md={4} className={'grid'}><Profile/></Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          <Header/>
          <Router>
            <Switch>
            <Route path='/Portfolio'>
          <Portfolio/>
          </Route>
          <Route path="/">
          <Resume/>
          </Route>
          </Switch>
          </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
