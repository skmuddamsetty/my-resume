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
      <h3 className="sub-heading heading-4 heading-4--light heading-4--no-text-transform">
        &ldquo;{props.headerInformation.intro}&rdquo;
      </h3>
      <div className="header__seenon-text">Expert in</div>
      <div className="header__seenon-logos">
        {props.headerInformation.expertin.map((technology, index) => {
          return (
            <img
              key={index}
              src={technology.imageUrl}
              alt={technology.imageText}
            />
          );
        })}
      </div>
    </header>

    <section className="features">
      <div className="feature__section-heading">EXPERTISE</div>
      <div className="feature feature__node">
        <img className="feature__icon" src="images/nodejs.svg" alt="Node JS" />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.node_summary.map((summary, index) => {
              return <li key={index}>{summary}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="feature feature__angular">
        <img
          className="feature__icon"
          src="images/angular-icon.svg"
          alt="Node JS"
        />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.angular_summary.map((summary, index) => {
              return <li key={index}>{summary}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="feature feature__react">
        <img className="feature__icon" src="images/react.svg" alt="Node JS" />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.react_summary.map((summary, index) => {
              return <li key={index}>{summary}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="feature feature__redux">
        <img className="feature__icon" src="images/redux.svg" alt="Node JS" />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.redux_summary.map((summary, index) => {
              return <li key={index}>{summary}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="feature feature__html-5">
        <img className="feature__icon" src="images/html-5.svg" alt="Node JS" />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.html5_summary.map((summary, index) => {
              return <li key={index}>{summary}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="feature feature__sass">
        <img className="feature__icon" src="images/sass.svg" alt="Node JS" />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.sass_summary.map((summary, index) => {
              return <li key={index}>{summary}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="feature feature__gulp">
        <img className="feature__icon" src="images/gulp.svg" alt="Node JS" />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.gulp_summary.map((summary, index) => {
              return <li key={index}>{summary}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="feature feature__spring">
        <img
          className="feature__icon"
          src="images/icon-spring-boot.svg"
          alt="Node JS"
        />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.spring_boot_summary.map(
              (summary, index) => {
                return <li key={index}>{summary}</li>;
              }
            )}
          </ul>
        </div>
      </div>
      <div className="feature feature__hibernate">
        <img
          className="feature__icon"
          src="images/hibernate.svg"
          alt="Node JS"
        />
        <div className="feature__resp-text">Responsibilities</div>
        <div className="feature__summary">
          <ul>
            {props.headerInformation.hibernate_summary.map((summary, index) => {
              return (
                <div className="feature__summary__point">
                  <div className="feature__summary__point__icon">
                    <img src="images/arrow.svg" alt="Node JS" />
                  </div>
                  <div className="feature__summary__point__p">
                    <p key={index}>{summary}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
    {/* <div className="story__pictures" /> */}
    <div className="story__content" />
    <section className="projects">
      <h2 className="heading-2 heading-2--dark">Projects</h2>
      {props.headerInformation.projects.map((project, index) => {
        return (
          <div className="project" key={index}>
            <div className="project__text">
              <div className="project__text__name">{project.title}</div>
              <div className="project__text__description">
                {project.description}
              </div>
            </div>
            <div className="project__urls">
              <p>
                {project.githubUrl ? (
                  <span className="bold">GitHub URL:</span>
                ) : (
                  ''
                )}
                <a href="www.google.com">{project.githubUrl}</a>
              </p>
              <p>
                {project.liveurl ? <span className="bold">Live URL:</span> : ''}
                <a href="www.google.com">{project.liveurl}</a>
              </p>
            </div>
            <div className="project__environment">
              <h4 className="heading-4 heading-4--dark mb-sm__center__border-bottom">
                Environment
              </h4>
              <div className="project__environment__seenon-logos">
                {project.environment.map((technology, index) => {
                  return (
                    <img
                      key={index}
                      src={technology.imageUrl}
                      alt={technology.imageText}
                    />
                  );
                })}
              </div>
            </div>
            {/* <div className="project__responsibilities">
              <h4 className="heading-4 heading-4--dark mb-sm__center__border-bottom">
                Responsibilities
              </h4>
              <ul>
                <li>
                  Created new REST web service operations and modified the
                  existing web service's WADLs Web Application Description
                  Language
                </li>
                <li>
                  Used Junit for unit testing the web service opearations' code.
                </li>
              </ul>
            </div> */}
          </div>
        );
      })}
    </section>
    {/* <section className="gallery" /> */}
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
