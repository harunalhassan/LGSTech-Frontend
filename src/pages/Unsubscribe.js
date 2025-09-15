import React, { useEffect, useState } from "react";
import '../styles/Unsubscribe.css'
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import unsubscribedIcon from "../assets/icons8-unsubscribed.gif"

const Unsubscribe = () => {
  const [status, setStatus] = useState("loading"); // "loading", "success", "error"
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    if (!email) {
      setStatus("error");
      setMessage("Invalid unsubscribe link.");
      return;
    }

    // Call backend API
    fetch(`http://localhost:5000/unsubscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("success");
          setMessage(data.success);
        } else {
          setStatus("error");
          setMessage(data.error || "Something went wrong.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Server error. Try again later.");
      });
  }, []);

  return (
    <div className="unsubscribe-container">
      {status === "loading" && <p className="loading">Unsubscribing you...</p>}

      {status === "success" && (
        <div className="success-box">
          <h2>
            <img
              
              src={unsubscribedIcon}
              alt="success icon"
              style={{ width: "28px", height: "28px", marginRight: "8px", verticalAlign: "middle" }}
            />
            Unsubscribed
          </h2>
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="error-box">
          <h2>⚠️ Error</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Unsubscribe;
