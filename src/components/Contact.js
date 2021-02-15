import "./Contact.css"
const Contact = () => {
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/72.jpg"></img>
            <div className="status status-text">
                <h4 className="name">Sergio Holmes</h4>
                <div className="wrapper">
                    <span className="status status-online"></span>
                    <p className ="status"> online</p>
                </div>

            </div>
        </div>
    )
}

export default Contact;