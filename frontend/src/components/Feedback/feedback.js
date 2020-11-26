import React from "react";
// import FeedCard from './showFeed.js'
import './feedback.css'
import axios from "axios";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackArr: '',
            // tripId: ''
        };

    }


    // getFeedback(obj) {
    //     const getFeedback = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(obj)
    //     };
    //     fetch('/FindAllFeedByIdOfTrip', getFeedback)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("nnnnn",data)
    //             this.setState({ feedbackArr: data })
    //         })
    // }

    componentDidMount = () => {
        const tripId = this.props.id1
        console.log("mytrip",tripId)
        this.setState({ tripId })
        this.getFeedBack();
    }
    getFeedBack = () => {
        var array = [];
        const tripId = this.props.id1
// console.log(this.props.id)
        // var feedbackArr = this.props.tripId.feedback
        axios.post('/FindAllFeedByIdOfTrip',{
            
            params: {
                ID: tripId
              }
        
          })
            .then((response) => {
                const data = response.data;
                array = data;
                var feedbackArr=array;
                this.setState({ feedbackArr: data })
                console.log("here",this.state.feedbackArr)
                console.log('data recivied',data);
            })
            .catch(() => {
                alert("error reciving");
            })
    }
    displayFeedBack = (feedbackArr) => {
        console.log("element zero",feedbackArr.feeds)
        let result =feedbackArr.feeds
   console.log("najwan",result[0])
        if (!feedbackArr.length) return null;
     return   feedbackArr.map((feed, index) => {
        
            <div key={index}>
                <h3>{feedbackArr.userName}</h3>
                <p>{feedbackArr.feedback}</p>
            </div>
        })
    };




    render() {
        console.log(this.props.tripId)
        const { feedbackArr } = this.state
        return (
            <div id="root1">
                <h3 >All Feedback For This Trip</h3>
                <div className="user-details" id="show">
                 {this.displayFeedBack(this.state.feedbackArr)}

                </div>
            </div>
        );
    }
}


export default Feedback;

// {
//     this.state.feedbackArr.map(feed =>
//         <tr id="tr">
//             <td>Username: </td>
//             {/* <td>{{this.props.userid.userName}</td> */}
//             <td>Feedback: </td>
//             <td>{this.props.userid.feedback}</td>
//         </tr>

//     )
// }