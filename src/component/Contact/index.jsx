import "./index.css";
import Footer from "../Footer";
import BackButton from "../BackButton";

import wxqrcode from "../../assets/wxqrcode.jpg";

function Contact() {
  return (
    <div className="contact">
      <BackButton />
      <div className="w fadein">
        <div className="contact-details">
          <p>
            联系电话
            <br />
            18986267472
          </p>
          <p>
            微信号
            <br />
            MiaoHeCafe
          </p>
        </div>
        <div className="qrcode">
          <img src={wxqrcode} alt="WeChat QR Code" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
