import React from 'react'

const FeedCard= ({ card }) => {
   
    return (
        <div className='Card'>
            <h2 className='card_name'>{card.userName}</h2>
            <h2 className='card_name'>{card.feedback}</h2>
        </div>
    )
}


export default FeedCard
