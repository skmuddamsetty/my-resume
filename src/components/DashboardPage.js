import React from 'react';
import { connect } from 'react-redux';
const DashboardPage = props => (
	<div className="container">
		<div className="sidebar">
			<button className="nav-btn" />
		</div>
		<header className="header">
			<nav>
				<ul className="main-nav">
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact Me</a>
					</li>
				</ul>
			</nav>
			<h1 className="heading-1">{props.headerInformation.fullName}</h1>
			<h2 className="heading-2 heading-2--light">
				{props.headerInformation.position}
			</h2>
			<h3 className="heading-3 heading-3--light heading-3--thin heading-3--no-text-transform">
				&ldquo;{props.headerInformation.intro}&rdquo;
			</h3>
			<div className="header__seenon-text">Expert in</div>
			<div className="header__seenon-logos">
				<img src="images/npm.svg" alt="npm" />
				<img src="images/nodejs.svg" alt="Node Js" />
				<img src="images/angular-icon.svg" alt="Angular JS" />

				<img src="images/react.svg" alt="React JS" />
				<img src="images/redux.svg" alt="Redux JS" />
				<img src="images/reactivex.svg" alt="npm" />
				<img src="images/javascript.svg" alt="npm" />
				<img src="images/typescript.svg" alt="npm" />
				<img src="images/bootstrap.svg" alt="npm" />

				<img src="images/sass.svg" alt="npm" />
				<img src="images/express.svg" alt="npm" />
				<img src="images/gulp.svg" alt="npm" />
				<img src="images/firebase.svg" alt="npm" />
				<img src="images/java.svg" alt="npm" />
				<img src="images/spring.svg" alt="npm" />
				<img src="images/hibernate.svg" alt="npm" />

				<img src="images/mysql.svg" alt="npm" />

				<img src="images/mongodb.svg" alt="npm" />
				<img src="images/ionic.svg" alt="npm" />

				<img src="images/visual-studio-code.svg" alt="npm" />

				<img src="images/intellij-idea.svg" alt="npm" />
			</div>
		</header>
		<section className="features" />

		<div className="story__pictures" />

		<div className="story__content" />
		<section className="projects">
			<div className="project">
				<div className="project__text">
					<div className="project__text__name">Title</div>
					<div className="project__text__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						deleniti dignissimos sit mollitia illum architecto ad minima. Nobis
						ducimus ab consequatur, nam cumque laudantium voluptate praesentium
						voluptates tempora, non architecto. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Vero, facilis eum vel ipsum ut
						adipisci in voluptatem modi labore temporibus sequi harum eius alias
						impedit quidem illum facere
					</div>
				</div>
				<div className="project__urls">
					<p>
						<span className="bold">GitHub URL:</span>
						<a href="www.google.com">www.google.com</a>
					</p>
					<p>
						<span className="bold">Live URL:</span>
					</p>
				</div>
				<div className="project__environment">
					<h4 className="heading-4 heading-4--dark mb-sm__center__border-bottom">
						Environment
					</h4>
					<div className="project__environment__seenon-logos">
						<img src="images/npm.svg" alt="npm" />
						<img src="images/nodejs.svg" alt="Node Js" />
						<img src="images/angular-icon.svg" alt="Angular JS" />
					</div>
				</div>
				<div className="project__responsibilities">
					<h4 className="heading-4 heading-4--dark mb-sm__center__border-bottom">
						Responsibilities
					</h4>
					<ul>
						<li>
							Created new REST web service operations and modified the existing
							web service's WADLs Web Application Description Language
						</li>
						<li>
							Used Junit for unit testing the web service opearations' code.
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section className="gallery" />

		<footer className="footer">
			<ul className="nav">
				<li className="nav__item">
					<a href="#" className="nav__link">
						one
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						two
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						three
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						four
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						five
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						six
					</a>
				</li>
			</ul>
			<p className="copyright">
				&copy; Copyright 2018 Santhosh Kumar Muddamsetty. All rights reserved.
			</p>
		</footer>
	</div>
);

const mapStateToProps = state => {
	return {
		headerInformation: state.resume.headerInformation
	};
};
export default connect(mapStateToProps)(DashboardPage);
