import "./index.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="content">
        <h1>MIAOHE CAFE</h1>
        <p>
          步入喵和，恍如进入一个温柔的梦境
          <br />
          为您带来独属于自己的悠然时光。
        </p>
        <div className="navbar">
          <Link to="/info">喵和简介</Link>
          <Link to="/menu">服务体验</Link>
          <Link to="/map">地图导航</Link>
          <Link to="/contact">联系我们</Link>
          <Link to="/social">社交媒体</Link>
        </div>
      </div>

      <div className="footer">
        <p>© MIAOHE.CAFE</p>
      </div>
    </>
  );
}

export default HomePage;
