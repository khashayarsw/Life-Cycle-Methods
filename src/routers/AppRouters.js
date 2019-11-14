import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Come from '../components/Come';
import Lc from '../components/Life-Cycle';

const AppRouter = ()=>{
    return(
      <BrowserRouter>
        <Switch>
        <Route path="/" component ={Lc} exact={true}/>
        <Route path="/unmount" component ={Come} exact={true}/>
        </Switch>
      </BrowserRouter>

    )
}
export default AppRouter;