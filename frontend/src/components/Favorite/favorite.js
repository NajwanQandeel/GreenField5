import React, { useState, useEffect} from 'react'
// import Heart from "react-animated-heart";
import StarsIcon from '@material-ui/icons/Stars';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import "./favorite.css"
// import axios from "./axios"
const useStyles = makeStyles((theme) => ({
    starsIcon: {

        '& svg': {
            fontSize: 50
        }

    }
}));
function Favorite(props) {
    const classes = useStyles();
    useEffect(()=>{
        // const variables={
        //     userFrom:props.userid,
        //     tripId:props.location.state.trip._id
        // }
    })
    fetch('/addtofavorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(response => response.json())
        .then(data => {
          alert("Added to Favorite !!");
          // window.location.href = '/'
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    return (
        <div>
            <IconButton className={classes.starsIcon}>
                <StarsIcon />
            </IconButton>
        </div>
    )
}

export default Favorite;
