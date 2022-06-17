import React, { useState } from 'react'
import "./student.css"
import {PermIdentity,Publish,CalendarToday,PhoneAndroid,MailOutline}  from  "@mui/icons-material"
import { Link } from 'react-router-dom'


export default function Student() {
  const [uData,setUdata] = useState({
    username:"",
    fullname:'',
    email:'',
    phonenumber :'',
    address:'',
  });

  const [stored , setStored] = useState([]);
      const handleChange = (e)=>{
        const name = e.target.name;
        const val = e.target.value;
        console.log(name ,val)
        setUdata({...uData, [name] : val})
      }

      const handleSub = (e)=>{
        e.preventDefault();
        const newRecord = {...uData , id : new Date().getTime().toString()}
        setStored([...stored,newRecord])
        console.log(stored);
        
      }
  return (
    <div className='Student'>
      <div className="studentTitleContainer">
        <h1 className='studentTitle'>Hello Mohan</h1>
        <Link to = "/newstudent">
        <button className='studentAddButton'>create</button>
        </Link>
      </div>
     
      <div className="studentContainer">
        <div className="studentShow">
          <div className="studentShowTop">
            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/find-models-8.jpg" 
            alt=""
             className="userShowImg" />
            <div className="studentShowTopTitle">
              <span className="studentShowuserName">anne marie</span>
              <span className="studentShowuserTitle">software engineer</span>
            </div>
          </div>
          <div className="studentShowBottom">
            <span className="studentShowTitle">Account details</span>
            <div className="studentShowinfo">
            <PermIdentity className="studentShowIcon"/>
            <span className="studentShowInfoTitle">Annabeck99</span>
            </div>
            <div className="studentShowinfo">
            <CalendarToday className="studentShowIcon"/>
            <span className="studentShowInfoTitle">1.12.2001</span>
            </div>
            <div className="studentShowinfo">
            <PhoneAndroid className="studentShowIcon"/>
            <span className="studentShowInfoTitle">+91 997 744 5566</span>
            </div>
            <div className="studentShowinfo">
            <MailOutline className="studentShowIcon"/>
            <span className="studentShowInfoTitle">annabeck@gmail.com</span>
            </div>
            
          </div>
        </div>
          <div className="studentupdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleSub}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  value={uData.username}
                  onChange={handleChange}
                  name="username"
                  id = "username"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  value={uData.fullname}
                  onChange={handleChange}
                  name="fullname"
                  id = "fullname"
                  
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  value={uData.email}
                  onChange={handleChange}
                  name="email"
                  id = "email"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  value={uData.phonenumber}
                  onChange={handleChange}
                  name="phonenumber"
                  id = "phonenumber"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                  value={uData.address}
                  onChange={handleChange}
                  name="address"
                  id = "address"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" type='submit'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
