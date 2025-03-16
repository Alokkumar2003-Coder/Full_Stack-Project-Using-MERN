import React from "react";

function Alert(props) {
  const capatalize = (word) => {
    if (word === "Danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ Height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capatalize(props.alert.type)}</strong>:{props.alert.msg}
          {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
        </div>
      )}
    </div>
  );
}

export default Alert;
