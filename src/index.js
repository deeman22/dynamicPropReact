import React from "react";
import ReactDOM from "react-dom";

var msg;
const customStyle = {
  color: ""
};
var date = new Date(2019, 1, 1, 13);
if (date.getHours() < 12) {
  msg = "Good Morning";
  customStyle.color = "red";
} else if (date.getHours() < 18) {
  msg = "Good Evening";
  customStyle.color = "blue";
} else {
  msg = "Good Night";
  customStyle.color = "pink";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {msg}
    </h1>
  </div>,
  document.getElementById("root")
);
