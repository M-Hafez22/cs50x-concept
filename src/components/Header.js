import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaQuora} from 'react-icons/fa'
import {FaReddit} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

function Header() {
    return (
        <header className="page-header">
            <div>
                <h1>This is CS50x</h1>
                <span>OpenCourseWare</span>
            </div>
            <div className="auther">
                <h3><a href="https://cs.harvard.edu/malan/">David J. Malan</a></h3>
                <h3><a href="malan@harvard.edu">malan@harvard.edu</a></h3>
                
                <div class="socialLinks">
                    <a href="https://www.facebook.com/dmalan"><FaFacebook /></a>
                    <a href="https://github.com/dmalan"><FaGithub /></a>
                    <a href="https://www.instagram.com/davidjmalan/"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/malan/"><FaLinkedin /></a>
                    <a href="https://www.quora.com/profile/David-J-Malan"><FaQuora /></a>
                    <a href="https://www.reddit.com/user/davidjmalan"><FaReddit /></a>
                    <a href="https://twitter.com/davidjmalan"><FaTwitter /></a>
                </div>
            </div>
        </header>
    )
}

export default Header