import React,{Component} from 'react';
import '../styles/components/Come.css';
import {Link} from 'react-router-dom';

 export default class Come extends Component{
      render(){
        return(
            <div>
               <h1>In console you can see 'Component is dead!'</h1>
               <Link className="secondLink" to="/">Go to home page</Link>
            </div>
        )
    }
}