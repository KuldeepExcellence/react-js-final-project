import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='containerLogin'>
      <h1>Excellence Management system</h1>
      <div className='flex-container'>

        {/* <div className='box-conatiner1'>
      <div className='box-item'>
        <h1>Student </h1>
        <span>Excellence Management System</span>
        <div>
        <span>Username:</span><input type="text" placeholder='UserNAme'/>
      </div>
      <div>
        <span>Password:</span><input type="password" placeholder='UserNAme'/>
        
      </div>
      </div>
    </div> */}


        <div className='box-conatiner1'>
          <div className='box-item'>
            <h1>Student </h1>
            <span>Excellence Management System</span>
            <div>
              <span>Username:</span><input type="text" placeholder='UserNAme' />
            </div>
            <div>
              <span>Password:</span><input type="password" placeholder='UserNAme' />

            </div>
          </div>
        </div>

        <div className='box-conatiner1'>
          <div className='box-item'>
            <h1>Admin Login Right</h1>
            <span>Excellence Management System</span><div>
              <span>Username:</span><input type="text" placeholder='UserNAme' />
            </div><div>
              <span>Password:</span><input type="password" placeholder='UserNAme' />
              {/* <Link to="/">
            <button  className="addStudent12">login</button>
            </Link> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login
