import React, { useEffect } from 'react';
import "./favoriteList.css";
import axios from "axios"


function FavoriteList(props) {

    // const [info,setInfo]=useState('')
    useEffect(() => {
        const userID = { userId: props.userId._id }


        axios.get('/favoritedtrips', userID)
            .then(response => {
                if (response.data.success) {
                    console.log('getting favorites successed')
                    // setInfo(response.data.doc)
                    console.log(response.data.doc)
                    // favorites.map(favorite=>{
                    //     console.log(favorite.tripId)
                    //     const id =favorite.tripId;
                    //     axios.get('getFavTrip',id)
                    //     .then(res=>{
                    //         console.log(res)

                    //     })
                    // })

                } else {
                    alert('Failed to get Favorite trips')
                }
            })
        // console.log('lsls',info)



    }, [])

    return (

        <div id='favoriteList'>
            <p id="favtrip">Favorit trips</p>
            <table style={{ 'space': '20px' }} >
                <tr>
                    <td id="td1"><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>

                    <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>
                    {/* <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic"/>
                        <p>dubai</p></td>

                    <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic" />
                        <p>dubai</p></td>
                        <td><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg' alt='img' id="pic"/>
                        <p>dubai</p></td> */}
                </tr>
            </table>


        </div>
    )
}

export default FavoriteList
