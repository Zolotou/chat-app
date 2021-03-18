import "./Contact.css"
import {Component} from 'react';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            online: this.props.online
        }
    }


    handleClick = () => {
        this.setState({online : !this.state.online})
    }

    render(){
        const {name, avatar} = this.props;
        const onlineStatus = this.state.online;
        return(
            <div className="Contact">
                <img className="avatar" src={avatar}></img>
                <div className="status status-text">
                    <h4 className="name">{name}</h4>
                    <div className="wrapper" onClick={ this.handleClick }>
                        <span  className={onlineStatus ? "status-online" : 'status-offline'} ></span>
                        <p  className ="status">{onlineStatus ? "online" : "offline"}</p>
                    </div>
    
                </div>
            </div>
        )
    }

}

export default Contact;