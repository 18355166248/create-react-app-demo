import React, { useState } from "react";
import { Popover, Button } from 'antd';
import "antd/lib/calendar/style/css";
import { CalendarMonth } from "arctic-business-component";
import moment from 'moment';

console.log('CalendarMonth', CalendarMonth)

const themeColor = [
  "#ccc",
  "pink",
  "gray",
  "blue",
  "yellow",
  "yellowGreen",
  "green",
];

function ArcticBusinessComponent () {
  const [month, setMonth] = useState(moment());

  return (
    <div>
      <Button onClick={changeTheme} type="primary">改变</Button>
      <CalendarMonth value={month} onChange={onChangeCalendar} PopoverContent={popoverContent} />
    </div>
  );

  function onChangeCalendar (value) {
    setMonth(value);
  }

  function popoverContent ({ text, content, children }) {
    return (
      <Popover title={text} content={content} trigger="click">
        {children}
      </Popover>
    );
  }

  function changeTheme () {
    window.less
      .modifyVars({
        "@primary-color": themeColor[Math.ceil(Math.random() * 7)],
      })
      .then(() => { })
      .catch((err) => {
        console.error(err.message, "Failed to update theme");
      });
  }
}

export default ArcticBusinessComponent;
