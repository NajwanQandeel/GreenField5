import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

//Slide img proparity (react slide img)
const properties = {
    duration: 9000000000000,
    transitionDuration: 400,
    infinite: true,
    indicators: false,
    arrows: true
};
class Day extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div >
                <div className='d-flex flex-wrap justify-content-around' style={{'position':'relative','top':'40px'}} >
                    <div className='inlinediv' style={{ 'width': '55%', 'height': '200px','padding':'25px','marginTop':'-15px'}}>
                        <div style={{ "borderRadius": "10px ", 'width': '10%', 'height': "35px", 'backgroundColor': " rgb(82, 10, 41)", 'color': 'white', 'paddingTop': '5px','marginLeft':'20px' }}>
                            <h5 style={{ 'marginLeft': '20px', 'color':'white' }}>Day {this.props.dayno}</h5>
                        </div>
                        <p className='pfont' style={{ 'marginTop': '8px' ,'padding':'10px','fontSize':'28px'}}> {this.props.dayinfo}
                        </p>
                    </div>
                    <div className='inlinediv2' style={{ 'width': '500px'}}>
                        <div>
                            <Slide  {...properties}>
                                {this.props.imgs.map((item, i) => { return <img className='tripimgs' src={item} key={i} alt='Date'></img> })}
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Day