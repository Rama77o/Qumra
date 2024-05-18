import React from "react";
import "./We.css";
import imgWe from "./images/logo.png";
import headWe from "./images/we.png";

const We = () => {
  return (
    <div className="containers we">
      {/* <div className='img'>
                <img src={imgWe} alt='imgWe' />
            </div>
            <div className='info'>
                <div className='head'>
                    <h1>من نحن</h1>
                    <img src={headWe} alt="headwe" />
                </div>
                <div className='text'>
                    <p>تلبية للطلب المنتامي في مجال التسويق الرقمي تأسست شركة قُمرةالإمارة التسوقية
                        والتي تتضمت إدارة منصات التواصل الإحتماعي والحملات المدفوعة وجميع أنواع التصاميم والمحتوى وتصاميم الفيديو وبالإضافة
                        إلى العديد من الخدمات التسويقية الأخرى لمختلف القطاعات والشركات بمختلف أحجامها وأنواعها..
                    </p>
                </div>
            </div> */}
      <div className="img">
        <img src={imgWe} alt="imgWe" />
      </div>
      <div className="info">
        <h1>من نحن</h1>
        <img classname="imgInfo" src={headWe} alt="headwe" />
        <p>
          تلبية للطلب المنتامي في مجال التسويق الرقمي تأسست شركة قُمرةالإمارة
          التسوقية والتي تتضمت إدارة منصات التواصل الإحتماعي والحملات المدفوعة
          وجميع أنواع التصاميم والمحتوى وتصاميم الفيديو وبالإضافة إلى العديد من
          الخدمات التسويقية الأخرى لمختلف القطاعات والشركات بمختلف أحجامها
          وأنواعها..
        </p>
      </div>
    </div>
  );
};

export default We;
