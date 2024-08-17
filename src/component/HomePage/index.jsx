import "./index.css";

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
          <a href="#">简介</a>
          <a href="#">菜单</a>
          <a href="#">地图</a>
          <a href="#">联系</a>
        </div>
      </div>

      <div className="footer">
        <p>© MIAOHE.CAFE</p>
      </div>
    </>
  );
}

export default HomePage;
