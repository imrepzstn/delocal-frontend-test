import './colourLoversCard.css'
import React, { Component } from 'react';


class ColourLoversCard extends Component {
    state = {  }

     


    render() { 
        return (  
            <div className='colour-card-container'> 
                <div className='colour-card-data'>
                    <div className='card-title'>{this.props.ColourLoversCard.title.substring(0, 17)}</div>
                    <div className='card-username'>by {this.props.ColourLoversCard.userName} at { new Date(this.props.ColourLoversCard.dateCreated).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })  }</div>
                    <div className='card-votes-container'><span className='card-votes'>{this.props.ColourLoversCard.numViews} views {this.props.ColourLoversCard.numVotes} votes</span></div>
                </div>
                <div className='colour-card-palette-wrapper'>
                    <div className='colour-card-palette'>
                    {
                        this.props.ColourLoversCard.colors.map(color => (
                            
                            <div className="palette-color" key={color} style={{backgroundColor: '#' + color}}></div>
                        ))
                    }  
                    </div>
                    
                </div>
            </div> 
        );
    }
}
 
export default ColourLoversCard;