import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import EmployeeManagement from './EmployeeManagement';

const App = () => {
  const handleLogout = () => {
    // Implement logout functionality here
    console.log('User logged out');
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/attendance">Attendance</Link>
            </li>
            <li>
              <Link to="/employee-management">Employee Management</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/attendance" component={Attendance} />
          <Route path="/employee-management" component={EmployeeManagement} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;