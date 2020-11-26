import React, { useState, useEffect } from 'react'
// import Heart from "react-animated-heart";
import StarsIcon from '@material-ui/icons/Stars';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import "./favorite.css"
import axios from "axios"
const useStyles = makeStyles((theme) => ({
    starsIcon: {

        '& svg': {
            fontSize: 50
        }

    }
}));
function Favorite(props) {
    // const classes = useStyles();
    const [Favorited, setFavorited] = useState(false)
    const variables = {
        userId: props.userId,
        tripId: props.tripId,
        // tripName:props.tripName,
        // tripImage:props.tripImage[0][0]
    }
    console.log("hello",props)
    useEffect(() => {

        // console.log(this.variables)
        axios.post('/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('Failed to get Favorite Info')
                }
            })
    }, [])

    const onClickFavorite = () => {
        if (Favorited) {
            // When already added 

            axios.post('/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {

                        setFavorited(!Favorited)
                    } else {
                        alert(' Failed to remove from favorite')
                    }
                })



        } else {
            //When Not adding yet 

            axios.post('/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavorited(!Favorited)
                    } else {
                        alert(' Failed to add to Favirotes')
                    }
                })

        }
    }


    return (
        <div>
            {/* <IconButton >
                <StarsIcon onClick={onClickFavorite} style={{"color":"red"}} />
                {/* {Favorited ? style={"color":"red"}:style={"color":"blue"}} */}
            
            <button onClick={onClickFavorite}>{Favorited ? " remove from Favortie " : " Add to Favorite"}</button>
        </div>
    )
}
export default Favorite;












