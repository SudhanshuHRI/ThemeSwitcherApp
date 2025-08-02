import React from "react";
import { useTheme } from "../context/theme.jsx";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const theme = useTheme();

  const notify = () => toast("Wow so easy!");

  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <ToastContainer />
      {theme.theme === "theme1" && (
        <>
          <h2 className="text-center mb-4">Contact Us</h2>

          <div className="bg-light p-4 rounded shadow-sm mb-4 aboutBackgroundImg border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent successfully!");
              }}
            >
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-4 rounded shadow-sm aboutBackgroundImg mb-4 border">
            <h5 className="fw-bold mb-2">Get in Touch</h5>
            <p>
              <strong>Email:</strong> hello@themeapp.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Theme Street, Design City, DC 12345
            </p>
            <p className="mb-0">
              We’d love to hear from you! Whether you have questions, need help,
              or want to share feedback—reach out.
            </p>
          </div>
        </>
      )}

      {theme.theme === "theme2" && (
        <div className="row">
          <div className="col-md-6 bg-dark text-white p-4 rounded-start shadow-sm">
            <h2>Contact Us</h2>
            <p className="mb-2">
              <strong>Email:</strong> hello@themeapp.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="mb-3">
              <strong>Address:</strong> 123 Theme Street, Design City, DC 12345
            </p>
            <p>
              Let us know your questions, feedback, or suggestions. We’re here
              to help you build better apps.
            </p>
          </div>
          <div className="col-md-6 bg-light text-dark p-4 rounded-end shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent successfully!");
              }}
            >
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" />
              </div>
              <button className="btn btn-dark w-100" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {theme.theme === "theme3" && (
        <>
          <h2 className="text-center mb-4 text-primary">Get in Touch!</h2>

          <div className="bg-warning p-4 rounded shadow mb-4 text-white">
            <p className="mb-2">
              <strong>Email:</strong> hello@themeapp.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="mb-3">
              <strong>Address:</strong> 123 Theme Street, Design City, DC 12345
            </p>
            <p className="mb-0">
              Whether it's a question or a compliment, we're all ears! Reach out
              anytime.{" "}
            </p>
          </div>

          <div className="bg-info p-4 rounded shadow text-white mb-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent successfully!");
              }}
            >
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" />
              </div>
              <button
                type="submit"
                className="btn btn-light text-primary fw-bold w-100"
              >
                Send Message
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
