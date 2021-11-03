
import React, { Component } from 'react'
import './agree.scss';
// import Marketing from './Marketing/marketing';

class Agree extends Component {
    render() {
        const { EveryChecked, conditionChecked, personalChecked, personalChecked2, MarketingEveryChecked, EmailChecked, SMSChecked, AppChecked } = this.props
        const {handleOnChangeCheckBox, handleOnChangeMarketingCheckBox, handleEveryCheck, handleMarketingEveryCheck } = this.props
        return (
            <div className="agree-container">
                <div className="allCheck"> 전체동의
                    <input className="everyCheck" onChange={handleEveryCheck} checked={EveryChecked} value='EveryChecked' type='checkbox'></input> <hr />
                </div>
                <div className='personalInfo'>
                    <div className='personalCheck1'>
                        <input className='personalInput1' onChange={handleOnChangeCheckBox} checked={conditionChecked} value='conditionChecked' type='checkbox'></input>
                        <span> 이용약관  </span>
                        <button className='personalBtn1'>내용보기</button>
                    </div>
                    <div className='personalCheck2'>
                        <input className='personalInput2' onChange={handleOnChangeCheckBox} checked={personalChecked} value='personalChecked' type='checkbox'></input>
                        <span> 개인정보 수집 및 이용 안내  </span>
                        <button className='personalBtn2'>내용보기</button>
                    </div>
                    <div className='personalCheck3'>
                        <input className='personalInput3' onChange={handleOnChangeCheckBox} checked={personalChecked2} value='personalChecked2' type='checkbox'></input>
                        <span> 개인정보 처리위탁  </span>
                        <button className='personalBtn3'>내용보기</button>
                    </div>
                    <div className="marketing-container">
                        <div className='marketingCheck'>
                            <input className='marketingAgree' onChange={handleMarketingEveryCheck} checked={MarketingEveryChecked} value='MarketingEveryChecked' type='checkbox'></input>
                            <span> 마켓팅 수신동의(</span>
                            <input className='marketingEmail' onChange={handleOnChangeMarketingCheckBox} checked={EmailChecked} value='EmailChecked' type='checkbox'></input>
                            <span>이메일  </span>
                            <input className='marketingSMS' onChange={handleOnChangeMarketingCheckBox} checked={SMSChecked} value='SMSChecked' type='checkbox'></input>
                            <span>SMS  </span>
                            <input className='marketingApp' onChange={handleOnChangeMarketingCheckBox} checked={AppChecked} value='AppChecked' type='checkbox'></input>
                            <span>앱Push알림)</span>
                        </div>
                    </div>
                </div>
                {/* <Marketing ref={this.child} EveryChecked={this.state.EveryChecked} /> */}
            </div>
        )
    }
}

export default Agree