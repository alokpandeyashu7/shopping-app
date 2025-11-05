import React from 'react'
import './NewsLater.css'
const NewsLater = () => {
  return (
    <div className='newslater'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our news-letter and get updates</p>
      <div>
        <input type="email" placeholder='Enter Your email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLater
