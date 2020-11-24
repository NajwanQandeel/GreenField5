// import React from "react";
// import './feedback.css';

// class Feedback extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           userName: '',
//           feedback: '',
//           tripId:''
//         };
      
    
    //   onSubmit = (e) => {
    //     e.preventDefault();
    
    //     fetch('http://localhost:4000/feedback', {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(this.state),
    //     })
    //       .then(response => response.json())
        
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
    
    //     this.setState({
    //       userName: '',
    //       feedback: ''
    //     })
    
    //   }
    
    //   render() {
    //     return (
    //       <div className="root1">
    //         <div id="move">
    //         <div className="name2">
    //           <h3 >All Feedback</h3>
    //         </div><br/>
    //         <div>
    //                     <p>{this.state.userName}</p>
    //                 </div>
    //                 <div>
    //                     <p>{this.state.feedback}</p>
    //         </div>
            /////////////////////////////////////////
            {/* <div>
                    {Object.keys(this.state.tripId.userName).map((value) => {
                        let props = {
                            userName: value,
                            feedback: value,
                        }
                        return (<div>{props}
                            <br></br></div>)
                    }
                    )}
                </div> */}
            
//             </div>
//           </div>
          
    
//         );
//       }
//     }
    
// export default Feedback;