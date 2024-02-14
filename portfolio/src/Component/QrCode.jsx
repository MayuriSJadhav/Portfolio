import React from 'react'
import MyImg from '../Assets/Image/Mayuri Jadhav.jpg'
import { Link } from 'react-router-dom'
import qrCode from '../Assets/Image/qrCode.png'

const QrCode = () => {
  return (
    <React.Fragment>
        <div className="qrcode">
            <Link to={'/'} className='btn btn-danger me-2'><i className='fas fa-circle-xmark fa-2x'></i></Link>
        </div>
        <section>
            <div className="container">
                <div className="qrcode-image text-center">
                    <img src={MyImg} alt="" className='qr-image' />
                </div>
                <h2 className='text-center text-danger'>Mayuri Jadhav</h2>
                <p className='text-center'>Fersher</p>
                <div className="qrcode text-center my-2 ">
                    <img src={qrCode} alt="" />
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default QrCode
