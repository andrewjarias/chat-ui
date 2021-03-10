import React from "react";

export class MessageInput extends React.Component<any, any> {
    initialState = {msgVal: ''};

    constructor(props: any) {
        super(props);
        this.state = this.initialState;
    }

    submitMessage = (e: any) => {
        e.preventDefault();
        this.props.addMessage({
            author: this.props.userName,
            message: this.state.msgVal,
            timestamp: new Date().toISOString()
        });

        this.setState(() => this.initialState);
    };

    updateMessageVal = (event: any) => {
        this.setState({msgVal: event.target.value});
    };

    render() {
        return (
            <div className="msg-box">
                <label htmlFor="msg">Message: </label>
                <input className="input-box" id="msg" type="text" value={this.state.msgVal} onChange={this.updateMessageVal}/>
                <button className="btn" type="submit" onClick={this.submitMessage}>Submit</button>
            </div>
        );
    }
}
