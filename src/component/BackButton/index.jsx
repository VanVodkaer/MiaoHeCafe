import { Link } from "react-router-dom";
import "./index.css";

function BackButton() {
  return (
    <Link to="/" className="backbtn">
      返回主页
    </Link>
  );
}

export default BackButton;
