import React from "react";
import './addfeedback.css';


class AddFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }


  changeUserName(e) {
    this.setState({ userName: e.target.value })
  }

  changeEmail(e) {
    this.setState({ userMail: e.target.value })
  }
  changeFeedback(e) {
    this.setState({ feedback: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()


    fetch('http://localhost:4000/addfeedback', {
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
      userName: '',
      userMail: '',
      feedback: ''
    })
  }

  render() {
    return (
      <div className="root1">
        <div className="name2">
          <h3>Give Feedback</h3>
        </div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="details">
            <div className="namedetails">
              <input
                className="inputborder"
                placeholder="Enter Your Name Here"
                type="text"
                name="Name"
                value={this.state.userName}
                onChange={this.changeUserName}
              />
            </div>
            <div className="namedetails">
              <input
                className="inputborder"
                placeholder="Enter Your Email Here"
                type="text"
                name="Email"
                value={this.state.userMail}
                onChange={this.changeEmail}
              />
            </div>
            <div className="namedetails">
              <input
                className="inputborder"
                placeholder="Enter Your Feedback Here"
                type="text"
                name="Feedback"
                value={this.state.feedback}
                onChange={this.changeFeedback}
              />
            </div>
            <div className="submit">
              <button className="button" onClick={this.handleClick}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default AddFeedback;