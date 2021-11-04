import React, { Component } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core"

class PersonalBtn1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
    }



    handleClickOpen() {
        this.setState({
            open: true
        })

    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>내용보기</Button>
                <Dialog onClose={this.handleClose} open={this.state.open}>
                    <DialogTitle>개인정보 수집 및 이용 안내</DialogTitle>
                    <DialogContent dividers>
                        <Typography>
                            <table>
                                <tr>
                                    <th>구분</th>
                                    <th>목적</th>
                                    <th>항목</th>
                                    <th>보유기간</th>
                                </tr>
                                <tr>
                                    <td rowspan='2'>필수정보</td>
                                    <td>회원제 서비스 이용/본인확인</td>
                                    <td>이름, 아이디, 비밀번호, 이메일, 휴대폰, 생일, 성별</td>
                                    <td>회원탈퇴 후 즉시</td>
                                </tr>
                                <tr>
                                    <td>재화의 공금</td>
                                    <td>이름, 휴대폰, 주소, 상품정보</td>
                                    <td>주문일로부터 5년</td>
                                </tr>
                                <tr>
                                    <td>선택정보</td>
                                    <td>마케팅 활용 (이벤트, 맞춤형 광고)</td>
                                    <td>휴대폰, 이메일</td>
                                    <td>회원탈퇴 후 즉시</td>
                                </tr>
                            </table>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleClose}>확인</Button>
                    </DialogActions>
                </Dialog>
            </div>

        )
    }
}

export default PersonalBtn1