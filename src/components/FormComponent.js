import React from "react";

export default function Form() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-4 mt-5">Contact</h1>
          <form className="mt-3">
            <div className="form-group">
              <label>Name:</label>

              <input
                className="form-control form-control-lg mb-3"
                type="text"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Email:</label>

              <input
                className="form-control form-control-lg mb-3"
                type="text"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Message:</label>

              <textarea className="form-control" rows="3" />
            </div>
            <button className="btn button-cor px-4 mt-3 text-white mb-3">
              Send
            </button>
          </form>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}
