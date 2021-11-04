import React, { Component } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core"

class PersonalBtn2 extends Component {

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
                    <DialogTitle>개인정보 처리위탁(선택)</DialogTitle>
                    <DialogContent dividers>
                        <Typography>
                            <table>
                                <tr>
                                    <th>수탁자</th>
                                    <th>목적</th>
                                </tr>
                                <tr>
                                    <td>우체국, CJ대한통운, 오늘의 픽업</td>
                                    <td>상품 배송 업무 및 배송위치/ 도착정보 등의 서비스 제공</td>
                                </tr>
                                <tr>
                                    <td>㈜코리아센터닷컴</td>
                                    <td>고객정보 DB시스템 위탁운영(전산아웃소싱)</td>
                                </tr>
                                <tr>
                                    <td>셀메이트</td>
                                    <td>주문정보 DB시스템 위탁운영(전산아웃소싱)</td>
                                </tr>
                                <tr>
                                    <td>서울신용평가정보㈜</td>
                                    <td>본인인증</td>
                                </tr>
                                <tr>
                                    <td>INICIS</td>
                                    <td>결제(신용카드)</td>
                                </tr>
                                <tr>
                                    <td>카카오페이 , 페이코, 네이버</td>
                                    <td>간편결제</td>
                                </tr>
                                <tr>
                                    <td>다날</td>
                                    <td>결제(휴대폰 소액결제)</td>
                                </tr>
                                <tr>
                                    <td>(주)루나소프트, (주)알리는 사람들</td>
                                    <td>카카오 알림톡 서비스</td>
                                </tr>
                                <tr>
                                    <td>(주)크리마</td>
                                    <td>고객 마일리지 및 후기, 리뷰 솔루션 유지보수 관리</td>
                                </tr>
                                <tr>
                                    <td>(주)스냅컴퍼니</td>
                                    <td>상품 자동 진열 솔루션, 상품 고객 맞춤 솔루션, 타겟팅 알림 솔루션</td>
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

export default PersonalBtn2