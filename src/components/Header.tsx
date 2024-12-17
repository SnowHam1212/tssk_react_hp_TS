import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Examples from "../pages/Examples";
import News from "../pages/News";
import Order from "../pages/Order";

// ナビゲーションバーのコンポーネント
const Navbar: React.FC = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/info"}>企業情報</Link></li>
                    <li><Link to={"/examples"}>加工事例</Link></li>
                    <li><Link to={"/news"}>News</Link></li>
                    <li><Link to={"/order"}>注文</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/news" element={<News />} />
                <Route path="/order" element={<Order />} />
            </Routes>
        </Router>
    );
};

// ヘッダーコンポーネント
const Header: React.FC = () => {
    return (
        <div className="navbar">
            <h1>田代精工株式会社</h1>
            <Navbar />
        </div>
    );
};

export default Header;