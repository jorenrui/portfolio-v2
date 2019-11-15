import React from "react";
import ContactForm from "./ContactSection/ContactForm";
import BriefInfo from "./ContactSection/BriefInfo";

function ContactSection() {
	return (
		<section id="contact" className="contact-section">
			<ContactForm />
			<BriefInfo />
		</section>
	);
}

export default ContactSection;
