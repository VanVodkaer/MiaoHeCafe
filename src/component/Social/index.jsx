import { useState } from "react";
import "./index.css";
import Footer from "../Footer";
import BackButton from "../BackButton";

import Instagram from "../../assets/Instagram.png";
import Douyin from "../../assets/Douyin.png";
import Xiaohongshu from "../../assets/Xiaohongshu.png";
import Telegram from "../../assets/Telegram.png";

function Social() {
  const [activeTab, setActiveTab] = useState("Bilibili");

  const renderContent = () => {
    switch (activeTab) {
      case "Bilibili":
        return (
          <div className="social-content">
            <p>哔哩哔哩 链接</p>
            <a href="https://space.bilibili.com/3546742649785171" target="_blank" rel="noopener noreferrer">
              喵和の女仆咖啡
              <br />
              <br />
              https://space.bilibili.com/3546742649785171
            </a>
          </div>
        );
      case "Twitter":
        return (
          <div className="social-content">
            <p>Twitter 链接</p>
            <a href="https://x.com/miaohecafe" target="_blank" rel="noopener noreferrer">
              喵和の女仆咖啡
              <br />
              @miaohecafe
              <br />
              <br />
              https://x.com/miaohecafe
            </a>
          </div>
        );
      case "Instagram":
        return (
          <div className="social-content">
            <p>Instagram 链接</p>
            <div className="qrcode">
              <img src={Instagram} alt="Instagram QR Code" />
            </div>
          </div>
        );
      case "Douyin":
        return (
          <div className="social-content">
            <p>抖音 链接</p>

            <div className="qrcode">
              <img src={Douyin} alt="Douyin QR Code" />
            </div>
          </div>
        );
      case "Youtube":
        return (
          <div className="social-content">
            <p>Youtube 链接</p>
            <a href="https://www.youtube.com/@MiaoHeCafe" target="_blank" rel="noopener noreferrer">
              喵和の女仆咖啡
              <br />
              @MiaoHeCafe
              <br />
              <br />
              https://www.youtube.com/@MiaoHeCafe
            </a>
          </div>
        );
      case "Xiaohongshu":
        return (
          <div className="social-content">
            <p>小红书 链接</p>
            <a
              href="https://www.xiaohongshu.com/user/profile/66be2ecb000000001d03112a?xhsshare=CopyLink&appuid=66be2ecb000000001d03112a&apptime=1724402099&share_id=c43da5f163ed4906b5d3d344e47fb283https://www.xiaohongshu.com/user/profile/66be2ecb000000001d03112a?xhsshare=CopyLink&appuid=66be2ecb000000001d03112a&apptime=1724402099&share_id=c43da5f163ed4906b5d3d344e47fb283"
              target="_blank"
              rel="noopener noreferrer">
              喵和の女仆咖啡
              <br />
              小红书号：miaohecafe
            </a>
            <div className="qrcode">
              <img src={Xiaohongshu} alt="Douyin QR Code" />
            </div>
          </div>
        );
      case "Telegram":
        return (
          <div className="social-content">
            <p>Telegram 链接</p>
            <a href="https://t.me/MiaoHeCafe" target="_blank" rel="noopener noreferrer">
              喵和 · 女仆咖啡
              <br />
              https://t.me/MiaoHeCafe
            </a>
            <div className="qrcode">
              <img src={Telegram} alt="Douyin QR Code" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="social">
      <BackButton />
      <div className="tabs fadein">
        <button className={activeTab === "Bilibili" ? "active" : ""} onClick={() => setActiveTab("Bilibili")}>
          哔哩哔哩
        </button>
        <button className={activeTab === "Twitter" ? "active" : ""} onClick={() => setActiveTab("Twitter")}>
          Twitter
        </button>
        <button className={activeTab === "Instagram" ? "active" : ""} onClick={() => setActiveTab("Instagram")}>
          Instagram
        </button>
        <button className={activeTab === "Douyin" ? "active" : ""} onClick={() => setActiveTab("Douyin")}>
          抖音
        </button>
        <button className={activeTab === "Youtube" ? "active" : ""} onClick={() => setActiveTab("Youtube")}>
          Youtube
        </button>
        <button className={activeTab === "Xiaohongshu" ? "active" : ""} onClick={() => setActiveTab("Xiaohongshu")}>
          小红书
        </button>
        <button className={activeTab === "Telegram" ? "active" : ""} onClick={() => setActiveTab("Telegram")}>
          Telegram
        </button>
      </div>
      <div className="content fadein">{renderContent()}</div>
      <Footer />
    </div>
  );
}

export default Social;
