import React , {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Individual() {
    const {id}=useParams();
    const [users,setUser]= useState([]);
    useEffect(()=>{
        fetch( "https://jsonplaceholder.typicode.com/users/"+ id)
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data);
            console.log(data);
        })

    },[id])
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            User: {users.id}
        </Typography>
        <Typography variant="h5" component="div">
            Name: {users.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email: {users.email}
        </Typography>
        <Typography variant="body2">
            {/* Address: {users.address.city}
          <br /> */}
            {users.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
            <Button size="small">Home</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
