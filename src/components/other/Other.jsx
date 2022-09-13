import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Other = () => {
  return (
    <div className="other">
        <div className="social">
            <ul className="social-links">
                <a href='https://github.com/' className="sc-link-item"><FaGithubSquare /></a>
                <a href='https://in.linkedin.com/' className="sc-link-item"><AiFillLinkedin /></a>
                <a href='https://www.instagram.com/' className="sc-link-item"><BsInstagram /></a>
            </ul>
        </div>
        <div className="right-nav">

        </div>
    </div>
  )
}

export default Other
