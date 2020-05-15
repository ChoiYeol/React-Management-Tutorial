import React from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customers = [
  {
        'id':1,
        'image': 'https://placeimg.com/64/64/any',
        'name':'yeol',
        'birthday':'950814',
        'gender':'man',
        'job':'programer'
  },
  {     'id':2,
        'image': 'https://placeimg.com/64/64/1',
        'name':'bang',
        'birthday':'450814',
        'gender':'girl',
        'job':'programer'
  },
  {     'id':3,
        'image': 'https://placeimg.com/64/64/2',
        'name':'bbi',
        'birthday':'900814',
        'gender':'guy',
        'job':'programer'
  }];

class App extends React.Component{
      render(){
        return (
          <div>  {customers.map(c =>{return(<Customer  key = {c.id}  id = {c.id}  image = {c.image}  name = {c.name}    birthday = {c.birthday}  gender = {c.gender}    job ={c.job}    /> ) }) }
          </div>
        );
      }
}

export default App;
