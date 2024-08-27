import { useState } from "react";

import "./index.css";
import Footer from "../Footer";
import BackButton from "../BackButton";

function Map() {
  const [activeTab, setActiveTab] = useState("高德地图");

  const renderContent = () => {
    switch (activeTab) {
      case "高德地图":
        return (
          <div className="map-content">
            <p>高德地图 链接</p>
            <a href="https://surl.amap.com/ySn5dFWF7zK" target="_blank" rel="noopener noreferrer">
              喵和MaidCafe桌游-剧本杀-二次元体验
              <br />
              <br />
              武汉市武昌区水岸国际瞰江公寓26层15室2015
            </a>
          </div>
        );
      case "百度地图":
        return (
          <div className="map-content">
            <p>百度地图 链接</p>
            <a href="https://j.map.baidu.com/68/Ui3i" target="_blank" rel="noopener noreferrer">
              喵和Miaohe Cafe
              <br />
              <br />
              湖北省武汉市武昌区和平大道692号
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="map">
      <BackButton />
      <div className="tabs fadein">
        <button className={activeTab === "高德地图" ? "active" : ""} onClick={() => setActiveTab("高德地图")}>
          高德地图
        </button>
        <button className={activeTab === "百度地图" ? "active" : ""} onClick={() => setActiveTab("百度地图")}>
          百度地图
        </button>
      </div>
      <div className="content fadein">{renderContent()}</div>
      <Footer />
    </div>
  );
}

export default Map;
