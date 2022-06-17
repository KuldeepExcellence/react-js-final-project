import React from 'react'
import "./NewStudent.css"
import {useState} from 'react'
import { Link } from 'react-router-dom'

export default function NewStudent() {
    const [data,setData] = useState({
        name : '',
        fatherName :'',
        eId :'',
        sDate: '',
        eDate : '',

    });
    const [record,setRecord] =useState([]);

    
       const handleInput =(e)=>{
            const name = e.target.name;
            const value = e.target.value;
            console.log(name , value)
            setData({...data, [name] : value})
       }
       const handleSubmit = (e)=>{
            e.preventDefault();
            const newRecord = {...data , id : new Date().getTime().toString()}
            console.log(record)
            setRecord([...record, newRecord])
            console.log(record)
       }
  return (
    <div className='newstudent'>
        Add Student info
        <h1>New Student</h1>
        <form className='newUserForm' onSubmit={handleSubmit}>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" id="name" value ={data.name} 
                name="name"
                 onChange={handleInput}
                  placeholder='John doe'  />
            </div>
            <div className="newUserItem">
                <label>Father Name</label>

                <input type="text" id="fatherName"
                 value ={data.fatherName} name="fatherName" 
                 onChange={handleInput} 
                 placeholder='Father NAme'/>
            </div>
            <div className="newUserItem">
                <label>Enrollment Id</label>
                <input type="text" id="eId"
                 value ={data.eId} name="eId" 
                 onChange={handleInput}
                  placeholder='1230452' />
            </div>
            <div className="newUserItem">
                <label>starts on</label>
                <input type="date" id="sDate"
                 value ={data.sDate} name="sDate"
                  onChange={handleInput} />
            </div>
            <div className="newUserItem">
                <label>ends on</label>
                <input type="date" id="eDate" name="eDate" 
                value ={data.eDate}
                 onChange={handleInput}/>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name='gender'  id='male' value='male' />
                    <label htmlFor='male'>Male</label>
                    <input type="radio" name='gender' id='female'value='female'/>
                    <label htmlFor='female'>Female</label>
                    <input type="radio" name='gender' id='other' value='other' />
                    <label htmlFor='other'>Other</label>
                </div>
            </div>
            {/* <div className="newUserItem">
                <label>Student Image</label>
                <input  placeholder='John doe' />
            </div>
            <div className="newUserItem">
                <label>Upload Degree</label>
                <input  placeholder='John doe'  />
            </div>
            <div className="newUserItem">
                <label>Marksheet 1</label>
                <input  placeholder='John doe' />
            </div> */}
            {/* <div className="newUserItem">
                <label>MarkSheet2</label>
                <input type="text" placeholder='John doe' value={name} onChange={(e)=>{setName(e.target.value);console.log(name)}} />
            </div>
            <div className="newUserItem">
                <label>MarkSheet3</label>
                <input type="text" placeholder='John doe'value={name} onChange={(e)=>{setName(e.target.value);console.log(name)}} />
            </div> */}
                <button type="submit">Submit</button>      
            <Link to="/">
            <button>Back</button>
            </Link>

        </form> 
    </div>
  )
}
