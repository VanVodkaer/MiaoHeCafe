import "./index.css";
import Footer from "../Footer";
import BackButton from "../BackButton";

function Info() {
  return (
    <div className="info">
      <BackButton />
      <div className="w fadein">
        <h1 className="fast-slidein">关于喵和</h1>
        <div className="mid-slidein">
          <p>欢迎来到“喵和”——一个充满温馨与趣味的咖啡馆。</p>
          <p>在这里，我们不仅提供美味的饮品与轻食，还为您带来独特的桌游体验和温柔可爱的女仆陪伴服务。</p>
          <p>无论是与朋友小聚，还是放松心情，我们都致力于为每一位顾客创造难忘的时光。</p>
          <p>“喵和”的灵感来源于猫咪的温暖与治愈，结合了日式女仆文化的细腻与贴心服务。</p>
          <p>我们相信，每一位来到“喵和”的客人，都会在这里找到属于自己的片刻宁静与欢乐。</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
