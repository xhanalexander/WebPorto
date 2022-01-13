import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faTwitch, faFacebook, faDeviantart, faGithub, faDiscord, faTumblr, faSoundcloud, faInstagram, faCodepen } from "@fortawesome/free-brands-svg-icons"

export default function footer() {
   return (
      <div>
         <footer className="flex flex-col my-14 p-0 m-auto">
            <div className="text-white text-center leading-8 text-xl mb-6">
               <a href="https://www.facebook.com/xhan.alexander/" target="_blank" rel="noreferrer" title="Facebook">
                  <FontAwesomeIcon icon={faFacebook} className="fa-lg mx-4 transition-all hover:text-green-400"/>
               </a>
               <a href="https://twitter.com/xhanalexander" target="_blank" rel="noreferrer" title="Twitter">
                  <FontAwesomeIcon icon={faTwitter} className="fa-lg mx-4 transition-all hover:text-green-400"/>
               </a>
               <a href="https://github.com/xhanalexander" target="_blank" rel="noreferrer" title="Github">
                  <FontAwesomeIcon icon={faGithub} className="fa-lg mx-4 transition-all hover:text-green-400"/>
               </a>
               <a href="https://xhanalexander.tumblr.com/" target="_blank" rel="noreferrer" title="Tumblr">
                  <FontAwesomeIcon icon={faTumblr} className="fa-lg mx-4 transition-all hover:text-green-400"/>
               </a>
               <a href="https://www.instagram.com/xhanalexander" target="_blank" rel="noreferrer" title="Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="fa-lg mx-4 transition-all hover:text-green-400"/>
               </a>
               <a href="https://codepen.io/Xhanalexander" target="_blank" rel="noreferrer" title="Codepen">
                  <FontAwesomeIcon icon={faCodepen} className="fa-lg mx-2 transition-all hover:text-green-400"/>
               </a>
               <a href="mailto:xhanalexander@gmail.com" target="_blank" rel="noreferrer" title="E-mail">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-lg mx-4 transition-all hover:text-green-400"/>
               </a>

               {/* =============== Alternate Account ===============  */}

               {/* 
               
               <a href="https://soundcloud.com/xhanalexander" target="_blank">
                  <FontAwesomeIcon icon={faSoundcloud} className="fa-lg mx-2 transition-all hover:text-green-400"/>
               </a>
               <a href="xhanalexander#0754" title="xhanalexander#0754">
                  <FontAwesomeIcon icon={faDiscord} className="fa-lg mx-2 transition-all hover:text-green-400"/>
               </a>
               <a href="https://www.twitch.tv/xhanalexander" target="_blank">
                  <FontAwesomeIcon icon={faTwitch} className="fa-lg mx-2 transition-all hover:text-green-400"/>
               </a>
               <a href="https://www.deviantart.com/xhan-alexander" target="_blank">
                  <FontAwesomeIcon icon={faDeviantart} className="fa-lg mx-2 transition-all hover:text-green-400"/>
               </a>

               */}
            </div>
            <div className='text-sm text-center text-gray-50 text-opacity-60 leading-5'>
               © 2022 Alexander Achmad Khan. All Rights Reserved.
            </div>

         </footer>
         
      </div>
   )
}
