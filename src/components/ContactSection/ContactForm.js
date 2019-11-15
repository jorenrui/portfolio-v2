import React from 'react';

export default class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<div className="contact-info">
				<div className="title">
					<p className="text-muted">CONTACT</p>
					<h2 className="mt-0">Send me a message</h2>
					<p>
						Wanna connect? Don't hesitate and let's talk. You can
						also email me at <b>joeylenerivera@gmail.com</b>
					</p>
				</div>
				<form
					onSubmit={this.submitForm}
					action="https://formspree.io/mzbbalqv"
					method="POST"
					className="contact-form"
					autoComplete="off"
				>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							name="name"
							type="text"
							className="form-control"
							placeholder="eg. Juan Dela Cruz"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							name="email"
							type="email"
							className="form-control"
							placeholder="eg. juandelacruz@gmail.com"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input
							name="subject"
							type="text"
							className="form-control"
							placeholder="Enter Subject"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							className="form-control"
							placeholder="Enter Message"
							required
						></textarea>
					</div>
					{status === 'SUCCESS' ? (
						<p className="alert-message">Message Submitted!</p>
					) : (
						<button type="submit" className="btn btn-lg">
							Send Message
						</button>
					)}
					{status === 'ERROR' && (
						<p className="alert-message">
							Ooops! There was an error.
						</p>
					)}
				</form>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
