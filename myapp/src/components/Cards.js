import React from "react";
import "./Cards.css";
import Body from "./Body.js";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import card5 from "./images/card5.png";
import card6 from "./images/card6.png";
import card7 from "./images/card7.png";

const Cards = () => {
  return (
    <div className=" cards">
      <Body name="بناء الهوية البصرية الحديثة و المتطورة" img={card1} />
      <Body name="تصاميم الجرافيك وتصاميم الفيديو" img={card2} />
      <div className="single-card">
        <Body name="إدارة منصات التواصل الاجتماعي" img={card3} />
      </div>
      <Body name="إدارة الحملات الإعلانية المدفوعة" img={card4} />
      <Body name="إعداد استراتيجيات وخطط المحتوى" img={card5} />
      <Body name={`تصميم تطبيقات الموبايل`} img={card6} />
      <Body name="تصميم المواقع الإلكترونية" img={card7} />
    </div>
  );
};

export default Cards;
