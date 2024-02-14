import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyImg from '../Assets/Image/Mayuri Jadhav.jpg'
import Img from '../Assets/Image/frontend.jpeg'

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [personalData, setPersonalData] = useState([]);

    useEffect(() => {
            setTimeout(() => {
                fetch('../../server/db.json')
                  .then(response => response.json())
                  .then(data => {
                    setPersonalData(data);
                    setIsLoading(false);
                  })
                  .catch(error => console.error('Error fetching data:', error));
              }, 2000);
            }, []);
    return (
        <div>
            <React.Fragment>
            <div className='body'>
                <section className='portfolio p-4'>
                    <div className='container'>
                        <div className='row d-flex algin-item-center'>
                            <div className='col-5 mx-auto'>
                                <div className="card">
                                    <img src={Img} alt="" className='img' />
                                    <div className="card-body" >
                                        <div className="col-md-4">
                                            <img src={MyImg} alt="" className='portfolio-img' />
                                        </div>
                                        <div className="col-md-7">
                                            <h3 className="text-danger">Mayuri Jadhav</h3>
                                            <h5 className="text-black">Fresher</h5>
                                            <Link to={'tel:+91 9373982775'} className='btn btn-white me-2'><i className='fa fa-mobile fa-2x'></i></Link>
                                            <Link to={'mailto:mayurijadhav17122000@gmail.com'} className='btn btn-white me-2'><i className='fa fa-envelope fa-2x'></i></Link>
                                            <Link to={'https://api.whatsapp.com/'} className='btn btn-white me-2'><i className='fab fa-whatsapp fa-2x'></i></Link>
                                            <Link to={'https://maps.app.goo.gl/TQ6kTt6EbXStAR6e9'} className='btn btn-white me-2'><i className='fa fa-map-marker fa-2x'></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='about p-2'>
                    <div className="container">
                        <div className="row d-flex algin-item-center">
                            <div className="col-5 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-10">
                                            <h1 className='text-center text-danger'>About Me</h1>
                                            <p className='align-items-center'>Hello, I'm Mayuri Jadhav, an accomplished individual with a strong educational background in computer science. I've completed my BTech degree in computer science. Currrently pursuing web develoment course. As i am fresher to achive high career growth a continous learning process and keep myself dynamic, visonary and competitive with the changing scenario of the world. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='contact p-2'>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-10">
                                            <h2 className="contact_name text-danger">Contact Us</h2>
                                            <p className='text-center'>----------------------------------------------------------------</p>
                                            <div className="contact_info">
                                                <h5 className="contact_info_title">Call Us</h5>
                                                <div className="contact_number">
                                                    <Link to={'tel:+91 9373982775'} >+91 9373982775{}</Link>
                                                </div>
                                            </div>
                                            <div className="email_info">
                                                <h5 className="email_info_title">Email</h5>
                                                <div className="email_id">
                                                    <Link to={'mailto:mayurijadhav17122000@gmail.com'}>mayurijadhav17122000@gmail.com</Link>
                                                   
                                                </div>
                                            </div>

                                            <div className="address_info">
                                                <h5 className="address_info_title">Address</h5>
                                                <p>Gurudhwara Chowk,
                                                    <br />
                                                    Near Akrudi Railway Station,
                                                    <br />
                                                    Akrudi.
                                                </p>
                                                <div className="address_link">
                                                    <Link to={'https://maps.app.goo.gl/TQ6kTt6EbXStAR6e9'} className='btn btn-danger'><i className='fas fa-location-arrow'></i> Direction</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='linkdin p-2'>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-10">
                                            <div className="heading">
                                                <h2 className='text-center text-danger'>Find Me here</h2>
                                                <p className='text-center'>----------------------------------------------------------------</p>
                                                <Link to={'https://www.linkedin.com/in/mayuri-jadhav-58b3171b6/'} className='btn btn'><i className='fab fa-linkedin-in fa-2x'></i>  LinkedIn</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='insta p-2'>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-10">
                                            <div className="heading">
                                                <Link to={'https://www.instagram.com/accounts/login/'} className='btn btn'><i className='fab fa-instagram fa-2x'></i>  Instagram</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="button">
                    <div className="qr">
                        <Link to={'/HomePage/qrcode'} className='btn btn-danger me-2'><i className='fa fa-qrcode fa-2x'></i></Link>
                        <button className='btn btn-danger my-2'><i className='fa fa-file-upload fa-2x'></i></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        </div>
    )
}

export default HomePage
