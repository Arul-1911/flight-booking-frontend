import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import backendUrl from "../../Url/backendurl";
import feedback_img from '../../assets/feedback.png'
import './feedback.css'

const MyModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setSubmissionStatus(null); // Reset submission status when opening the modal
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/submitFeedback`, {
        name,
        feedback,
      });

      if (response.data.success) {
        console.log("Feedback submitted successfully.");
        setSubmissionStatus("Feedback submitted successfully.");
        // Optionally, close the modal or reset form fields
        // setShowModal(false);
      } else {
        console.error("Feedback submission failed.");
        setSubmissionStatus("Feedback submission failed.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSubmissionStatus("Error submitting feedback.");
    }
  };

  return (
    <div className="feedback-container">
    <button className="feedback-logo" onClick={handleToggleModal}>
    <img src={feedback_img} alt="Feedback" className="feedback" style={{ width: '100%', height: '90%', border: '0 !important', borderRadius:'13px' }} />

</button>



      {showModal && (
        <div
          className="modal show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">kiwi.com Feedback</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleToggleModal}
                  style={{
                    fontSize: "0.75rem",
                    width: "2rem",
                    height: "2rem",
                    padding: "0.25rem",
                  }}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {submissionStatus ? (
                  <div
                    className={`alert ${
                      submissionStatus.includes("success")
                        ? "alert-success"
                        : "alert-danger"
                    }`}
                    role="alert"
                  >
                    {submissionStatus}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="feedback">Desc:</label>
                      <textarea
                        className="form-control"
                        id="feedback"
                        rows="4"
                        value={feedback}
                        onChange={handleFeedbackChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4" style={{backgroundColor:' #008774'}}>
                      Submit
                    </button>
                  </form>
                )}
              </div>
              <div className="modal-footer">
                {/* Additional footer buttons if needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
