import React from "react";
// import FeedCard from './showFeed.js'
import './feedback.css'
import axios from "axios";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackArr: '',
            // userName:''
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
       
        console.log("mytrip", tripId)
        this.setState({ tripId })
        // this.setState({this.state.feedbackArr})
        this.getFeedBack();
    }
    getFeedBack = () => {
        var array = [];
        const tripId = this.props.id1
        console.log("the iddddddd", this.props.id1)
        // var feedbackArr = this.props.tripId.feedback
        axios.post('/FindAllFeedByIdOfTrip', {

            params: {
                ID: tripId
              }

        })
            .then((response) => {
                const data = response.data;
                array = data;
                var feedbackArr = array;
                this.setState({ feedbackArr: data })
                console.log("here", this.state.feedbackArr)
                // console.log('data recivied',data);
            })
            .catch(() => {
                alert("error reciving");
            })
    }
    // displayFeedBack = () => {

    //     return this.state.feedbackArr.feeds.map((feed, index) => {

    //         <div key={index}>
    //             <h3>{feed.userName}</h3>
    //             <p>{feed.feedback}</p>
    //         </div>
    //     })
    // };


    render() {
        if (!this.state.feedbackArr) {
            return <span>Loading...</span>;
        }
        // console.log(this.props.tripId)

        return (
            <div id="root1">
               
               <h3 >All Feedback For This Trip</h3><br/><br/>
                <div className="user-details" id="show">
                
                  
                   { this.state.feedbackArr.feeds.map((feed, index) => (
                        //  {  console.log("nnn",this.state.feedbackArr.feeds[0])}
                        
                       <div id="contain"> 
                      
                      <div id="in">
                             <h3 id="text">{feed.userName} : </h3>
                             <h3 id="feed">{feed.feedback}</h3> <br/><br/>
                             </div><br/><br/><br/><br/>
                           
                            </div>
                        
                   ))} 

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