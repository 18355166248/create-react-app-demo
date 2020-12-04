import React from "react";
import { Button } from "antd";
import { EditTable } from "arctic-business-component";

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
      <Button type="primary" onClick={changeTheme}>
        测试
      </Button>
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
}

export default ArcticBusinessComponent;
