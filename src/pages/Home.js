import React , {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom"
import Typography from '@mui/material/Typography';



function Home() {
    const [users,setUser]= useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res)=>res.json())
      .then((data)=>{
        setUser(data);
        console.log(data);
      })

  },[setUser])

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  return (
    <div >
        {users.map((user)=>(
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        User : {user.id}
                        </Typography>
                        <Typography variant="h5" component="div">
                        Name: {user.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Email: {user.email}
                        </Typography>
                        <Typography variant="body2">
                        Address: {user.address.city}
                        <br />
                        {user.phone}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link
                        to={{
                            pathname: `/view-user/${user.id}`,
                            state: { users: user }
                        }}
                        >
                        <Button size="small">View</Button>
                    </Link>
                    </CardActions>
                </Card>
            ))}
    </div>
  );
}

export default Home;
