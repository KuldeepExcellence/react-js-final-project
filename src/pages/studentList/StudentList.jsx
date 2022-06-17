import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './StudentList.css'
import { DeleteOutline} from '@mui/icons-material';
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function StudentList() {

  const [data,setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData (data.filter((item) => item.id !==id))
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'useName', headerName: 'User Name', width: 130 ,renderCell : (params)=>{
      return (
        <div className='userListUser'>
          <img src={params.row.Avatar} alt='' className='UserListImage'/>
          {params.row.useName}
        </div>
      )
    }},
    { field: 'Avatar', headerName: 'Avatar', width: 500},

    {
      field: 'email',
      headerName: 'EMail id',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      
    },
    {
      field : 'action',
      headerName : 'Action',
      width : 150,
      renderCell  : (params) => {
        return (
          <>
        <Link to={"/students/"+params.row.id}>  
        <button className='userListEdit'>
        edit
        </button>
        </Link>
          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}></DeleteOutline>
</>
        )
      }
    },
  ];
  /* This data has been transferred to dummy data
  // const rows = [
  //   { id: 1, useName: 'Snow', Avatar: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg', email:"snow@gmail.com" },
  //   { id: 2, useName: 'Snow', Avatar: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg', email:"snow@gmail.com" },
  //   { id: 3, useName: 'Snow', Avatar: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg', email:"snow@gmail.com" },
  //   { id: 4, useName: 'Snow', Avatar: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg', email:"snow@gmail.com" },
  //   { id: 5, useName: 'Snow', Avatar: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg', email:"snow@gmail.com" },
 
  // ];
  */
  return (
    <div  className="table">
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={5}
      disableSelectionOnClick
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}
