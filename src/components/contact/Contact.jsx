import React from 'react'

const Contact = () => {
  return (
	<div className="contact" id='contact'>
    <div className="container">
      <h2 className="section-title">Connect with me</h2>
      <div className="contact-form">
        <form action="">
          <div className="form-input">
            <input type="text" placeholder='Name' />
          </div>
          <div className="form-input">
            <input type="text" placeholder='Reason' />
          </div>
          <div className="form-input">
            <input type="text" placeholder='Email' />
          </div>
          <div className="form-input">
            <input type="text" placeholder='Number [if indian]' />
          </div>
          <textarea name="" id="" placeholder='Message'></textarea>

          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className="goodby">Have a Good Time</div>
    </div>
  </div>
  )
}

export default Contact