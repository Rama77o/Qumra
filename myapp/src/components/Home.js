import React, { useState } from "react";
import firstImg from "./images/banner4.jpeg";
import secondImg from "./images/cardImage2.jpeg";
import thirdImg from "./images/cardImage3.jpeg";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={firstImg} style={{ height: "84vh", width: "100%" }} alt="1" />
        <Carousel.Caption style={{ marginBottom: "200px" }}>
          <h3>التسويق الالكتروني تحولًا استراتيجيًا في عالم الأعمال،</h3>
          <p>
            لقد غيرت التكنولوجيا والإنترنت كل جانب من جوانب حياتنا، بدءًا من
            كيفية تفاعلنا مع العالم إلى كيفية تسويق منتجاتنا وخدماتن
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={secondImg}
          style={{ height: "84vh", width: "100%" }}
          alt="2"
        />
        <Carousel.Caption style={{ marginBottom: "200px" }}>
          <h3>التسويق الالكتروني أستراتيجية رابحة</h3>
          <p>
            التسويق الالكتروني. سيسمح لك القيام بذلك أيضًا بجمع معلومات قيمة عن
            جمهورك بشكل سريع وفوري؛ حتى تتمكن من إنشاء حملات تسويقية أكثر دقة
            وفعالية.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={thirdImg} style={{ height: "84vh", width: "100%" }} alt="3" />
        <Carousel.Caption style={{ marginBottom: "200px" }}>
          <h3>قمرة التسويق الالكتروني</h3>
          <p>
            كبر كصندوق أدوات يحتوي على جميع أدوات التسويق التي يمكنك استخدامها
            لزيادة التعرف على العلامة التجارية والحصول على المزيد من الزيارات
            والظهور عبر الإنترنت.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
