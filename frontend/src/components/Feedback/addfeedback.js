import React from "react";
import './addfeedback.css';
<<<<<<< HEAD
=======
// import Trip from '../trips/trips'
>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e


class AddFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      value: "",
      userName: "",
      feedback: "",
      userMail: "",
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeFeedback = this.changeFeedback.bind(this)
=======
      userMail:'',
      userName: '',
      feedback: '',
      tripId:''
    };
    // this.changeTripeId = this.changeTripeId.bind(this)
    this.changeUserName = this.changeUserName.bind(this);
    this.changeFeedback = this.changeFeedback.bind(this);
    this.changeUserMail = this.changeUserMail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e
  }

  componentDidMount() {
    //  console.log( this.props.location.state.trip)
    //  const tripId = this.props.location.state.trip._id
    //  this.setState({ tripId})
}
// getTripId = () => {
//   var tripId; 
//   $.ajax({
//     type: "GET",
//     url: "/trip",
//     success: (res) => {
//       for (var i in res) {
//         alltrips.push(res[i])
//       }
//       this.setState({
//         testtrips: alltrips
//       })
//     },
//     error: function (err) {
//       console.error(err)
//     }
//   })
// }

  // changeTripeId(e) {
  //   this.setState({ tripId:this.props.location.state.trip._id})
  // }

  changeUserName(e) {
    this.setState({ userName: e.target.value })
  }

<<<<<<< HEAD
  changeUserName(e) {
    this.setState({ userName: e.target.value })
  }

  changeEmail(e) {
    this.setState({ userMail: e.target.value })
  }
=======
  changeUserMail(e) {
    this.setState({ userMail: e.target.value })
  }

 

>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e
  changeFeedback(e) {
    this.setState({ feedback: e.target.value })
  }

<<<<<<< HEAD

  onSubmit(e) {
    e.preventDefault()
=======
>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e

  onSubmit = (e) => {
    e.preventDefault();

<<<<<<< HEAD
    fetch('http://localhost:4000/addfeedback', {
=======
    fetch('/addfeedback', {
>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(data => {
        alert("Thank You For Your Feedback !!");
        // window.location.href = '/'
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    this.setState({
<<<<<<< HEAD
      userName: '',
      userMail: '',
      feedback: ''
=======
      userMail:'',
      userName: '',
      feedback: '',
      tripId:''
>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e
    })
  }

  render() {
    return (
      <div className="root1">
        <div id="move">
        <div className="name2">
<<<<<<< HEAD
          <h3>Give Feedback</h3>
        </div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="details">
            <div className="namedetails">
=======
          <h3 >Give Feedback</h3>
        </div><br/>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="details">
            <div className="namedetails">

>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e
              <input
                className="inputborder"
                placeholder="Enter Your Name Here"
                type="text"
                name="Name"
                value={this.state.userName}
                onChange={this.changeUserName}
              />
            </div><br/>
            <div className="namedetails">
              <input
                className="inputborder"
                placeholder="Enter Your Email Here"
                type="text"
                name="Email"
                value={this.state.userMail}
<<<<<<< HEAD
                onChange={this.changeEmail}
=======
                onChange={this.changeUserMail}
>>>>>>> 186b52533e2549f7f8a4935090d441b1da2a338e
              />
            </div><br/>
            <div className="namedetails">
              <input
                className="inputborder"
                placeholder="Enter Your Feedback Here"
                type="text"
                name="Feedback"
                value={this.state.feedback}
                onChange={this.changeFeedback}
              />
            </div><br/>
            <div className="submit">
              <button className="button" onClick={this.handleClick}>
                Submit
              </button>
            </div>
          </div>
        </form>
        <div class="vl"></div>
        </div>
      </div>
      

    );
  }
}


export default AddFeedback;