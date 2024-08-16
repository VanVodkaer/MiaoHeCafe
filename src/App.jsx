import "./App.css";

function App() {
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
          <a href="#">简介</a>
          <a href="#">特色</a>
          <a href="#">菜单</a>
          <a href="#">地图</a>
          <a href="#">联系</a>
        </div>
      </div>

      <div className="footer">
        <div className="social-icons">
          <a href="https://space.bilibili.com/3546742649785171">&gt;BiliBili&lt;</a>
          <a href="#">&gt;抖音&lt;</a>
          <a href="https://t.me/MiaoHeCafe">&gt;Telegram&lt;</a>
        </div>
        <p>© MIAOHE.CAFE</p>
      </div>
    </>
  );
}

export default App;
