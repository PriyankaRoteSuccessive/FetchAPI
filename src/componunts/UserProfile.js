import React from 'react'
import { NavBar } from '.'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import { useLocation } from 'react-router'

const UserProfile = () => {
  const location = useLocation();
  console.log("hello user", location.state)

  return (
    <>
      <NavBar />
      <h1>UserProfile</h1>
      <div className='mydiv'> 
      <Card >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

          </Typography>
          <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
            User Details
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Id : {location.state.id}
          </Typography>
          <Typography variant="body2">
            Avatar :<br></br> <img src={location.state.avatar} />
          </Typography>
          <Typography variant="body2">
            First_Name : {location.state.first_name}
          </Typography>
          <Typography variant="body2">
            Last_Name : {location.state.last_name}
          </Typography>
          <Typography variant="body2">
            Email : {location.state.email}
          </Typography>
        </CardContent>
      </Card>
      </div>
    </>
  )
}

export default UserProfile
