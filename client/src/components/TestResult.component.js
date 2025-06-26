import React from "react";

function Testresult() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#4CAF50", fontSize: "2rem" }}>
        🎉 Thank You for Participating!
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        You have successfully completed <strong>Zara Sultana's Quiz</strong>.
      </p>
      <p style={{ marginTop: "10px" }}>
        Hope you enjoyed it! You can close the tab or go back to the homepage to try again.
      </p>
    </div>
  );
}

export default Testresult;
