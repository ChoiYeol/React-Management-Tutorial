import React from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class App extends React.Component{

      state ={
        customers:""
      }

      componentDidMount(){
        this.callApi()
          .then(res =>  this.setState({customers:res}))
          .catch(err => console.log(err));
      }

      callApi = async () =>{
        const response  = await fetch('api/customers');
        const body = await response.json();
        return body;
      }
      render(){
        return (
          <div>  {this.state.customers ? this.state.customers.map(c =>{return(<Customer  key = {c.id}  id = {c.id}  image = {c.image}  name = {c.name}    birthday = {c.birthday}  gender = {c.gender}    job ={c.job}    /> ) })
                  : "뭐지" }
          </div>
        );
      }
}

export default App;
