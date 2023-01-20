import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase pt-4 "> Contact us </h3>
      <div className="text-muted shadow-sm  rounded p-3 lh-2">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Full Name
            </label>
            <input type="text" class="form-control" id="name" required />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Contact no.
            </label>
            <input type="text" class="form-control" id="phone" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="email" required />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="timing" class="form-label">
              When can we reach you?
            </label>
            <select class="form-select" id="timing">
              <option selected>Best time to reach</option>
              <option value="M">Morning</option>
              <option value="A">Afternoon</option>
              <option value="E">Evening</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="query" class="form-label">
              Enter your query below
            </label>
            <textarea class="form-control" id="query" required></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
