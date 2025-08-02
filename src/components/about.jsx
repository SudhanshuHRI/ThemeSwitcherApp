import React from "react";
import { useTheme } from "../context/theme.jsx";

const About = () => {
  const theme = useTheme();

  return (
    <div>
      {theme.theme === "theme1" && (
        <div className="container" style={{ paddingTop: "100px" }}>
          <h2 className="text-center mb-4 animate-fade-in">About ThemeApp</h2>

          <div className="bg-light p-4 rounded shadow-sm mb-5 aboutBackgroundImg pointer animate-fade-in zoom-on-hover pointer">
            <p className="mb-3">
              ThemeApp is a revolutionary demonstration of how powerful theme
              switching can transform the entire user experience. Built with
              React and JavaScript, this application showcases three distinct
              themes that dont just change colors . they completely reimagine
              layout, typography, spacing, and visual hierarchy.
            </p>
            <p className="mb-3">
              Each theme tells a different story: the Minimalist theme focuses
              on clean lines and simplicity, the Dark Professional theme offers
              a sophisticated sidebar experience with elegant serif typography,
              and the Playful Colors theme brings joy with its vibrant grid
              layout and whimsical font choices.
            </p>
            <p className="mb-0">
              The application integrates with the Fake Store API to demonstrate
              real-world data handling while maintaining consistent theming
              across all components. Every element responds to theme changes
              with smooth transitions, creating a seamless and delightful user
              experience.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 bg-white p-4 rounded shadow-sm aboutBackgroundImg pointer animate-fade-in hover-scale">
                <h5>Dynamic Theming</h5>
                <p>Three completely different visual experiences...</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 bg-white p-4 rounded shadow-sm aboutBackgroundImg pointer animate-fade-in hover-scale">
                <h5>Modern Tech Stack</h5>
                <p>Built with React, JavaScript, styled-components...</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 bg-white p-4 rounded shadow-sm aboutBackgroundImg pointer animate-fade-in hover-scale">
                <h5>Responsive Design</h5>
                <p>Fully responsive layouts that work on all devices.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 bg-white p-4 rounded shadow-sm aboutBackgroundImg pointer animate-fade-in hover-scale">
                <h5>Secure & Fast</h5>
                <p>Implements security best practices and performance.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {theme.theme === "theme2" && (
        <div className="container" style={{ paddingTop: "80px" }}>
          <div className="row">
            <div className="col-md-4 bg-dark text-light p-4">
              <h2>About ThemeApp</h2>
              <p className="mb-3">
                ThemeApp is a demonstration of dynamic theme switching in modern
                web apps using React. It proves that design isnt just about
                colors, but layout, spacing, fonts, and overall feel.
              </p>
              <p className="mb-3">
                Minimalist, Dark Professional, and Playful . each theme
                transforms not just the look but the structure of the app.
              </p>
              <p className="mb-0">
                With integration to Fake Store API, the experience remains
                consistent across all themes.
              </p>
            </div>

            <div className="col-md-8 bg-light text-dark p-4">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="h-100 bg-white p-4 rounded shadow-sm pointer zoom-on-hover">
                    <h5>Dynamic Theming</h5>
                    <p>
                      Switch between radically different layouts with a single
                      toggle.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="h-100 bg-white p-4 rounded shadow-sm pointer zoom-on-hover">
                    <h5>Modern Tech Stack</h5>
                    <p>
                      Built using React, Router, and the latest CSS layout
                      strategies.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="h-100 bg-white p-4 rounded shadow-sm pointer zoom-on-hover">
                    <h5>Responsive Design</h5>
                    <p>
                      Adaptive design principles ensure smooth usability across
                      all screens.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="h-100 bg-white p-4 rounded shadow-sm pointer zoom-on-hover">
                    <h5>Secure & Fast</h5>
                    <p>
                      Efficient loading and safe rendering practices implemented
                      throughout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {theme.theme === "theme3" && (
        <div className="container" style={{ paddingTop: "100px" }}>
          <h2 className="text-center mb-4 text-primary">
            {" "}
            Welcome to ThemeApp!
          </h2>

          <div className="bg-white border border-primary p-4 rounded shadow mb-5 zoom-on-hover pointer">
            <p className="mb-3">
              ThemeApp isnt just a project—its a creative playground. We believe
              apps should reflect personality through themes that truly change
              the way things feel.
            </p>
            <p className="mb-3">
              Whether you love simplicity, darkness, or playful colors, ThemeApp
              adjusts to your mood with animations, layout shifts, and bold font
              pairings.
            </p>
            <p className="mb-0">
              No matter the theme, you get access to real data and a
              consistently delightful experience.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 p-4 rounded shadow text-white bg-info zoom-on-hover pointer">
                <h5>Dynamic Theming</h5>
                <p>
                  Layouts and visuals change completely with each theme, not
                  just colors.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 p-4 rounded shadow text-white bg-warning zoom-on-hover pointer">
                <h5>Modern Tech Stack</h5>
                <p>
                  Leverages powerful tools like React and modern CSS to deliver
                  a seamless UX.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 p-4 rounded shadow text-white bg-info zoom-on-hover pointer">
                <h5>Responsive Design</h5>
                <p>
                  Mobile-first design with graceful fallbacks and flexible grid
                  system.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="h-100 p-4 rounded shadow text-white bg-warning zoom-on-hover pointer">
                <h5>Secure & Fast</h5>
                <p>
                  Built with performance and accessibility in mind from the
                  ground up.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
