import React from "react";
import {ChatHistory} from "../../components/chat-history/chat-history";
import {MessageInput} from "../message-input/message-input";
import {Message} from "../../core/models/message";

export class Chat extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            userNameTemp: '',
            userName: '',
            messages: []
        };
    }

    userNameValChanged = (event: any) => {
        this.setState({userNameTemp: event.target.value});
    };

    updateUserName = () => {
        this.setState({userName: this.state.userNameTemp});
    };

    addMessage = (newMessage: Message) => {
        let messages = this.state.messages.slice();
        messages.push(newMessage);
        this.setState({messages: messages});
    }

    render() {
        return (
            <div>
                <div className="update-box">
                    <label htmlFor="userName">Username: </label>
                    <input id="userName" type="text" onChange={this.userNameValChanged}/>
                    <button className="btn" onClick={this.updateUserName}>Update</button>
                </div>
                <div className="chat-box">
                    <ChatHistory messages={this.state.messages}/>
                    <hr/>
                    <MessageInput userName={this.state.userName} addMessage={this.addMessage}/>
                </div>
            </div>
        );
    }

}
