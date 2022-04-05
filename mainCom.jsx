import React, {Component} from "react";
import ContactCom from "./contactCom";
import ChatCom from "./chatCom";
import "./style.css";



class MainComponent extends Component{
    state={

    }

    render(){
        return(
            <div className="container">
                <ContactCom />
                <ChatCom/>
            </div>
        )
    }
}
export default MainComponent;