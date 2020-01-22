import react from 'react';
import HomeButton from '../components/HomeButton';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hide=false,
        }
    }
    render(){
        return(
            <HomeButton redirect="resume" onclick={this.state.hide}/>
        )
    }
}