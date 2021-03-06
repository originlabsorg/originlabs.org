import React, { Component } from 'react'
// import firebase from '../services/Firebase'
import Reaptcha from 'reaptcha';
import { reCaptcha, staticman } from '../config'
import $ from 'jquery'

const submitForm = (formData, onSuccess, onError) => {
  $.ajax({
    type: 'POST',
    url: staticman.endpoint,
    data: formData,
    contentType: 'application/x-www-form-urlencoded',
    success: data => onSuccess(data),
    error: err => onError(err),
  })
}

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    reCaptchaVerified: false,
    sendingButtonMessage: 'Send Message',
    submissionResponse: '',
  }

  resetState = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      reCaptchaVerified: false,
      sendingButtonMessage: 'Send Message',
      submissionResponse: '',
    })
  }

  handleFieldChange = ev => {
    const target = ev.target
    const value = target.value
    const inputName = target.getAttribute('id')
    this.setState({ [inputName]: value })
  }

  onSuccess = () => {
    this.setState({
      submissionResponse: 'The contact form was successfully submitted!',
      sendingButtonMessage: 'Message sent!',
    })
    this.resetForm()
  }

  onError = () => {
    this.setState({
      submissionResponse:
        'There was an error with the submission, please try again later!',
    })
  }

  clearSubmissionResponse = () => this.setState({ submissionResponse: '' })

  handleFormSubmit = ev => {
    ev.preventDefault()
    const { name, email, message } = this.state
    // const firebaseData = { name, email, message }
    this.setState({ sendingButtonMessage: 'Sending...' })

    // save form to firebase
    // firebase
    //     .database()
    //     .ref('/contacts')
    //     .push(firebaseData)
    //     .then(() => {
    //         this.setState({ submissionResponse: 'Processing...' })
    //     })
    //     .catch((error) => {
    //         this.setState({ submissionResponse: 'Something went wrong!' })
    //     })

    // submit form to staticman server
    const formData = $(ev.target).serialize()
    submitForm(formData, this.onSuccess, this.onError)
  }

  checkCaptcha = res => {
    this.setState({
      reCaptchaVerified: !!res && true,
      sendingButtonMessage: 'Send Message'
    })
  }

  resetForm = () => {
    this.reCaptcha.reset()
    this.resetState()
  }

  render() {
    const {
      name,
      email,
      message,
      reCaptchaVerified,
      sendingButtonMessage,
      submissionResponse,
    } = this.state
    return (
      <section>
        <form
          method="post"
          onSubmit={this.handleFormSubmit}
          onChange={this.clearSubmissionResponse}>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="fields[name]"
              id="name"
              value={name}
              onChange={this.handleFieldChange}
              pattern="[A-Za-z\-'\s]+"
              required
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="fields[email]"
              id="email"
              value={email}
              onChange={this.handleFieldChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="fields[message]"
              id="message"
              rows="6"
              value={message}
              onChange={this.handleFieldChange}
              required
            />
          </div>
          <div className="field">
            {submissionResponse && <p>{submissionResponse}</p>}
          </div>
          <Reaptcha
            ref={el => (this.reCaptcha = el)}
            sitekey={reCaptcha.siteKey}
            theme="dark"
            onVerify={this.checkCaptcha}
          />
          <ul className="actions">
            <li>
              <input
                type="submit"
                value={sendingButtonMessage}
                className="special"
                disabled={!reCaptchaVerified}
              />
            </li>
            <li>
              <input type="reset" value="Clear"  onClick={this.resetForm}/>
            </li>
          </ul>
        </form>
      </section>
    )
  }
}

export default Form
