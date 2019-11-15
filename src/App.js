import React from "react";
import HeroSection from "./components/HeroSection.js";
import WorkSection from "./components/WorkSection.js";
import AboutSection from "./components/AboutSection.js";
import BlogSection from "./components/BlogSection.js";
import DesignSection from "./components/DesignSection.js";
import ContactSection from "./components/ContactSection.js";
import "./App.css";

function App() {
	return (
		<div>
			<HeroSection />
			<WorkSection />
			<AboutSection />
			<BlogSection />
			<DesignSection />
			<ContactSection />
		</div>
	);
}

export default App;
