import React, { useState } from "react";
// import { Button, Checkbox } from "antd";
import { BaseButton, EditTable } from "arctic-business-component";

const themeColor = [
  "#ccc",
  "pink",
  "gray",
  "blue",
  "yellow",
  "yellowGreen",
  "green",
];

function ArcticBusinessComponent() {
  return (
    <div>
      <BaseButton />
      <EditTable />
    </div>
  );

  function changeTheme() {
    window.less
      .modifyVars({
        "@primary-color": themeColor[Math.ceil(Math.random() * 7)],
      })
      .then(() => {})
      .catch((err) => {
        console.error(err.message, "Failed to update theme");
      });
  }

  function onChange(check) {
    console.log(check);
  }
}

export default ArcticBusinessComponent;
