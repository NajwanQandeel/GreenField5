import React, { useState, useEffect} from 'react'
// import Heart from "react-animated-heart";
import StarsIcon from '@material-ui/icons/Stars';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import "./favorite.css"
import axios from "./axios"
const useStyles = makeStyles((theme) => ({
    starsIcon: {

        '& svg': {
            fontSize: 50
        }

    }
}));
function Favorite() {
    const classes = useStyles();
    useEffect(()=>{
        // const variables={
        //     userFrom:,
        //     tripId:
        // }
    })
axios.post("")
    return (
        <div>
            <IconButton className={classes.starsIcon}>
                <StarsIcon />
            </IconButton>
        </div>
    )
}

export default Favorite;
