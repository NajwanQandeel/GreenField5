import React, { useEffect } from 'react';
import "./favoriteList.css";
import axios from "axios"

function FavoriteList(props) {
    const userID = { userId: props.userId._id }
    let favorites = [];
    axios.get('/favoritedtrips', userID)
        .then(response => {
            if (response.data.success) {
                console.log('getting favorites successed')
                favorites = response.data;
                console.log(favorites)

            } else {
                alert('Failed to get Favorite trips')
            }
        }, [])
    // for (var i = 0; i < favorites.doc.length; i++) {
    //     // axios.get('/getmytrips', userID)
    //     // .then(response => {
    //     //     if (response.data.success) {
    //     //         console.log('getting favorites successed')
    //     //         favorites = response.data;
    //     //         console.log(favorites)

    //     //     } else {
    //     //         alert('Failed to get Favorite trips')
    //     //     }
    //     // }, [])
    //     console.log(favorites.doc[i])
    // }
    const h=favorites.doc
//    h.map(fav=>{
//       return   console.log(fav)
//     })



    // console.log(props.userId._id)
    return (
        <div id='favoriteList'>
            <p id="favtrip">Favorit trips</p>
            <table style={{ 'space': '20px' }}>
                <tr>
                    <td id="td1"><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>

                    <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>
                    <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>

                    <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>
                    <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>
                </tr>
            </table>


        </div>
    )
}

export default FavoriteList
