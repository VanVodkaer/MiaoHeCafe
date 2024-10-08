import "./index.css"
import mtqrcode from "../../assets/mtqrcode.png"

import Footer from "../Footer";
import BackButton from "../BackButton";


function MeiTuan() {
  return (
    <div className="meituan">
      <BackButton />
      <div className="w fadein">
        <div className="meituan-details">
          <p>
            收藏店铺<br/>可免费领取<br/>喵和可爱周边一只
          </p>
          
        </div>

        <div className="qrcode">
          <img src={mtqrcode} alt="MeiTuan QR Code" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MeiTuan;
