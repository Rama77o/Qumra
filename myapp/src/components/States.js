import React from "react";
import "./States.css";

const States = () => {
  return (
    <div className="state">
      <div className="content">
        <h1>إحصائياتنا</h1>
        <div className="num">
          <div>
            <div className="sw sw3"></div>
            <span>موظف</span>
          </div>
          <div>
            <div className="sw sw2"></div>
            <span>شريك نجاح</span>
          </div>
          <div>
            <div className="sw sw1"></div>
            <span>تصميم</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
