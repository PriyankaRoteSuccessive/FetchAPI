import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavBar } from '.';
import {useNavigate} from 'react-router-dom'
const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://reqres.in/api/users`)
      setUsers(data.data);
    }
    getUser()
  }, [])
  const getData = () => {
    console.log(users)
  }
  const handleClick = (row) => {
    navigate("/UserProfile",{state:row})
    console.log("click",row)
  }
  return (
    <>
      <NavBar />
      <h1>UserList</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell >Avatar</TableCell>
              <TableCell >First Name</TableCell>
              <TableCell >Last Name</TableCell>
              <TableCell >Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id} onClick={()=>handleClick(row)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell>{row.id}</TableCell>
                <TableCell><img src={row.avatar}/></TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default UserList
