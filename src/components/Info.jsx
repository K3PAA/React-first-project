import React from 'react'
import face from '../assets/face.avif'
export default function Info(){
    return (
        <section>
            <img className="myFace" src={face} alt="face" />

            <div className="container">
                <h1 className='name'>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>laurasmith.website</p>
                <div className="btn--container">
                    <button className="btn btn--white">
                        <i class="fa-solid fa-envelope info-icon"></i>
                        Email
                    </button>
                    <button className="btn btn--blue">
                        <i class="fa-brands fa-linkedin info-icon"></i>
                        LinkedIn
                    </button>
                </div>
            </div>
        </section>
    )
}