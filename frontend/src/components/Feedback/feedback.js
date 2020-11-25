import React from "react";
import FeedCard from './showFeed.js'
import './feedback.css'

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackArr: [],
            // tripId: ''
        };

    }
    componentDidMount() {

        const tripId = this.props.id
        this.setState({ tripId })
    }

    getFeedback(obj) {
        const getFeedback = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('/FindAllFeedByIdOfTrip', getFeedback)
            .then(response => response.json())
            .then(data => {
                console.log("nnnnn",data)
                this.setState({ feedbackArr: data })
            })
    }
    render() {
        console.log(this.props.tripId)
        const { feedbackArr } = this.state
        return (
            <div id="root1">
                <h3 >All Feedback For This Trip</h3>
                <div className="user-details" id="show">
                    
                    {
                        this.state.feedbackArr.map(feed =>
                            <tr id="tr">
                                <td>Username: </td>
                                {/* <td>{{this.props.userid.userName}</td> */}
                                <td>Feedback: </td>
                                <td>{this.props.userid.feedback}</td>
                            </tr>

                        )
                    }
                </div>
            </div>
        );
    }
}


export default Feedback;