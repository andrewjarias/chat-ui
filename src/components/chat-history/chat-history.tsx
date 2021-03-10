import React from "react";
import {Message} from "../../core/models/message";

export class ChatHistory extends React.PureComponent<any> {
    render() {
        return (
            <div className="msg-hist">
                {this.props.messages.map((message: Message) => {
                    return (
                        <div className="message-row" key={message.timestamp}>
                            <div className="author">{message.author}:</div>
                            <div className="message">{message.message}</div>
                            <div className="timestamp">{message.timestamp}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
