import React from 'react';

export default class HomeBbutton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect=true,

        }
    }
    render(){
        return(
            <div>
            {
                this.props.hidden?null:(
                    <button onClick={this.props.redirect}/>  
                )
            }
            </div>
        )
           
    }
    
    
}