import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import './App.css'

const App = () => {
  return (
    <div>
  <div className = "header">
  <nav>
    <img src= "https://res.cloudinary.com/dy2iezllj/image/upload/v1735985931/WhatsApp_Image_2025-01-04_at_3.45.06_PM-removebg-preview_wirpj7.png" 
    className = "logo" alt = "image"/>
    <div>
      <button className = "language-btn">English<span className = "drop-down"><IoMdArrowDropdown /></span></button>
      <button className = "language-btn2">Sign In</button>
      
    </div>
  </nav>
<div className = "header-content">
    <h1>Unlimited movies, TV shows and more.</h1>
    <h3>Watch anywhere. Cancel anyrtime.</h3>
    <p>Ready to watch? Enter your email to create or restrat your membership.</p>
    <form className  ="email-signup">
      <input type = "email" placeholder = "Email address"required/>
      <button type = "submit">Get Started</button>
    </form>
   </div>
   
</div>
    <div className = "features">
    <div className = "row">
      <div className = "text-col">
      <h2>Enjoy on your Tv</h2>
      <p>Watch on smart TVS, PlayStation,Xbox, Chromecast,Apple TV, Blu-ray players and more.</p>
    </div>
    <div className = "img-col">
      <img src = "https://res.cloudinary.com/dy2iezllj/image/upload/v1736094918/WhatsApp_Image_2025-01-05_at_10.04.14_PM_keu0lz.jpg"
      className = "features-1" alt = "image"/>
    </div>
   </div>
  
   <div className = "row">
    <div className = "img-col">
      <img src = "https://res.cloudinary.com/dy2iezllj/image/upload/v1736094928/WhatsApp_Image_2025-01-05_at_10.04.39_PM_qy715s.jpg"
      className = "features-1" alt = "image"/>
    </div>
    <div className = "text-col">
      <h2>Download your shows to watch offline</h2>
      <p>Save your favourites easily and always have something to watch.</p>
    </div>
   </div>
   

   <div className = "row">
      <div className = "text-col">
      <h2>Watch everyWhere.</h2>
      <p>Stream unlimited movies and TV shows on Your phone, tablet. laptop, and TV.</p>
    </div>
    <div className = "img-col">
      <img src = "https://res.cloudinary.com/dy2iezllj/image/upload/v1736096721/WhatsApp_Image_2025-01-05_at_10.33.08_PM_cp7djl.jpg"
      className = "features-1" alt = "image"/>
    </div>
   </div>
   
   <div className = "row">
    <div className = "img-col">
      <img src = "https://res.cloudinary.com/dy2iezllj/image/upload/v1736094906/WhatsApp_Image_2025-01-05_at_10.03.53_PM_wpzhvp.jpg"
      className = "features-1" alt = "image"/>
    </div>
    <div className = "text-col">
      <h2>Create Profiles for Children</h2>
      <p>Send children on adventures with their favourite characters in a space
        made just for them-free with your memebership.
      </p>
    </div>
   </div>
  </div>
  
  <div className = "faq">
    <h2>Frequently Asked Questions</h2>
    <ul className = "according">
      <li>
        <input type = "radio" name = "according" id = "first"/>
        <label for = "first">What is Netflix?</label>
        <div className = "content">
          <p>Netflix is a streaming service that offers a wide selection of movies, TV shows, documentaries, and anime.
             It's available on thousands of internet-connected devices, and you can watch as much as you want for a monthly fee.</p>
        </div>
        </li>

        <li>
        <input type = "radio" name = "according" id = "second"/>
        <label for = "second">How much does Netflix cost?</label>
        <div className = "content">
          <p>Netflix plans in India cost between Rs 149 and Rs 649 per month 
        </p>
        </div>
        </li>

        <li>
        <input type = "radio" name = "according" id = "Third"/>
        <label for = "Third">Where can i watch?</label>
        <div className = "content">
          <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com 
            from your personal computer or on any internet-connected device that offers the Netflix app,
             including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
        </div>
        </li>

        <li>
        <input type = "radio" name = "according" id = "fourth"/>
        <label for = "fourth">How do i cancel?</label>
        <div className = "content">
          <p>
          Click on the arrow at the top right corner of the home page. Select 'Account' from the drop-down list. 
          Click on 'Cancel Membership' under the 'Membership & Billing' section. 
          Click 'Finish Cancellation' to confirm.</p>
        </div>
        </li>

        <li>
        <input type = "radio" name = "according" id = "Sixth"/>
        <label for = "Sixth">Is Netflix good for Kids?</label>
        <div className = "content">
          <p> Netflix can be good for kids if you use the dedicated "Kids Profile" feature, which filters content to only 
            show age-appropriate shows and movies, allowing parents to control what their children watch</p>
        </div>
        </li>

    </ul>
    <small>Ready to Watch ? Enter your email to create or restat your memberShip.</small>
    <form className  ="email-signup">
      <input type = "email" placeholder = "Email address" required></input>
      <button type = "submit">Get Started</button>
    </form>
  </div>

  <div class = "footer">
    <h2>Questions? call 000-000-000-000</h2>

    <div className = "row">
      <div className = "col">
        <a href = "#">FAQ</a>
        <a href = "#">Investor Relations</a>
        <a href = "#">Privacy</a>
        <a href= "#">Speed Test</a>
      </div>

      <div className = "col">
        <a href = "#">Help Center</a>
        <a href = "#">Jobs</a>
        <a href = "#">Cookies Preferences</a>
        <a href= "#">Legal Notices</a>
      </div>

      <div className = "col">
        <a href = "#">Account</a>
        <a href = "#">Ways to watch</a>
        <a href = "#">Corporate Information</a>
        <a href= "#">Only on Netflix</a>
      </div>

      <div className = "col">
        <a href = "#">Media Centre</a>
        <a href = "#">Terms of Use</a>
        <a href = "#">Contact Us</a>
      </div>
    </div>
    <button className = "language-btn">English <span><IoMdArrowDropdown /></span></button> 
    <p className = "copyright-txt">Netflix India</p>
  </div>
  
  </div>
  )
}
export default App