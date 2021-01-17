import React, { useState } from 'react';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Search from './Components/Search.jsx';
import Users from './Components/Users.jsx'

const App = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search for Users
  const searchUsers = query => {
    setLoading(true);
    // Link in comments
    axios
      .get(
        `https://api.github.com/search/users?q=${query}&page=1&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then(res => {
        setUsers(res.data.items);
        setCount(res.data.total_count);
        setLoading(false)
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const content = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      return (
        <div> 
          // Display Users.count         
          <h3 class="text-center">{count > 0 ? `${count} result(s) found` : '' }</h3>
          <Users users={users} />
        </div>
        ) 
    }
  };
  return (
    <div>
      <div className='container'>
        <Search searchUsers={searchUsers} />
        {content()}
      </div>
    </div>
  );
};

export default App;
