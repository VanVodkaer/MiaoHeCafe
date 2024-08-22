import "./index.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function HomePage() {
  return (
    <div className="homepage">
      <div className="w fadein">
        <h1 className="fast-slidein">MIAOHE CAFE</h1>
        <p className="mid-slidein">
          步入喵和，恍如进入一个温柔的梦境
          <br />
          为您带来独属于自己的悠然时光。
        </p>
        <div className="navbar slow-slidein">
          <Link to="/info">喵和简介</Link>
          <a href="#">美团点单</a>
          <Link to="/map">地图导航</Link>
          <Link to="/contact">联系我们</Link>
          <Link to="/social">社交媒体</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
