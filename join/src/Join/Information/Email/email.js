
import React, { Component } from 'react'
import './email.scss';

class Email extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emailTail: '',
            emailHead: '',
            selectEmail: '',
        }
    }

    onInputEmailHeadHandler = (e) => {
        this.setState({
            emailHead: e.target.value
        })
    }

    onInputEmailTailHandler = (e) => {
        this.setState({
            emailTail: e.target.value
        })
    }

    onSelectEmail = (e) => {
        const { selectEmail } = this.state
        if (selectEmail === 'directly') {
            this.setState({
                emailTail: e.target.value
            })
        }
        else {
            this.setState({
                selectEmail: e.target.value,
                emailTail: e.target.value
            })
        }
    }

    render() {
        return (
            <div className="email-container">
                <input className="emailHead" type='text' onChange={this.onInputEmailHeadHandler} value={this.state.emailHead} placeholder="이메일"></input>
                <span>@</span>
                <input className="emailTail" onChange={this.onInputEmailTailHandler} value={this.state.emailTail} type='text'></input>
                <select className="selectEmail" onChange={this.onSelectEmail} value={this.state.selectEmail}>
                    <option value="directly">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.com">daum.com</option>
                    <option value="nate.com">nate.com</option>
                </select>
            </div>
        )
    }
}

export default Email