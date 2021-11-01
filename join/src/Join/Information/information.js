
import React, { Component } from 'react'
import './information.scss';
import Email from './Email/email';

class Information extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: '',
            password: '',
            checkPassword: '',
            passwordMessage: '',
            emailTail: '',
            emailHead: '',
            selectEmail: '',
        }
    }

    onInputNameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onInputIdHandler = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    onInputPasswordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onInputCheckedPasswordHandler = (e) => {
        this.setState({
            checkPassword: e.target.value
        })
    }

    onInputEmailHeadHandler = (e) => {
        this.setState({
            emailHead: e.target.value
        })
    }

    onInputEmailTailHandler = (e) => {
        this.setState({
            emailTail: e.target.value,
        })
    }

    // onInputSelectEmail = (e) => {
    //     this.setState({
    //         selectEmail: e.target.value,
    //     })
    // }

    onSelectEmail = (e) => {
        const { selectEmail } = this.state
        // if (this.state.selectEmail === '1') {
        //     this.setState({
        //         emailTail: e.target.value,
        //         selectEmail: ''
        //     })
        // }
        if (this.state.selectEmail !== '직접입력') {
            this.setState({
                selectEmail: e.target.value,
                emailTail: e.target.value
            })
        }
        else {
            this.setState({
                selectEmail: e.target.value,
                emailTail: ''
            })
        }
        console.log(this.state.selectEmail, this.state.emailTail)
    }

    render() {
        const { password, checkPassword, selectEmail, emailTail } = this.state
        console.log(selectEmail, emailTail)
        return (
            <div className='information-container'>
                <div className="join_info">
                    <h2>회원정보 입력</h2>
                    <div className="join_input">
                        <input className="name" type="text" onChange={this.onInputNameHandler} value={this.state.name} placeholder="이름"></input>
                        <input className="id" type="text" onChange={this.onInputIdHandler} value={this.state.id} placeholder="아이디"></input>
                        <input className="password" type="password" onChange={this.onInputPasswordHandler} value={this.state.password} placeholder="비밀번호"></input>
                        <input className="checkPassword" type="password" onChange={this.onInputCheckedPasswordHandler} value={this.state.checkPassword} placeholder="비밀번호 확인"></input>
                        <div className="notMatchPassword">
                            {password.length < 1 || checkPassword.length < 1 ? '' : (password === checkPassword ? <div className="match">일치</div> : '비밀번호가 일치하지 않습니다.')}
                        </div>
                        {/* <Email/> */}
                        <div className="email">
                            <input className="emailHead" type='text' onChange={this.onInputEmailHeadHandler} value={this.state.emailHead} placeholder="이메일"></input>
                            <span>@</span>
                            <input className="emailTail" onChange={this.onInputEmailTailHandler} value={this.state.emailTail} type='text'></input>
                            <select className="selectEmail" onChange={this.onSelectEmail} value={this.state.selectEmail}>
                                <option value="직접입력">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.com">daum.com</option>
                                <option value="nate.com">nate.com</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Information