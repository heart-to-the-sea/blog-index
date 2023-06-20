import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import "./style/index.less";
const data = [
  {
    name: "首页",
    path: "/",
    active: 0,
  },
  {
    name: "前沿技术",
    path: "/qjs",
    active: 0,
  },
  {
    name: "前端",
    path: "/before",
    active: 0,
  },
  {
    name: "后端",
    path: "/after",
    active: 0,
  },
  {
    name: "运维",
    path: "/prod",
    active: 0,
  },
  {
    name: "生活总结",
    path: "/live",
    active: 0,
  },
  {
    name: "关于我",
    path: "/about",
    active: 0,
  },
];
const MenuItem = ({ path, data }: { path: string; data: any[] }) => {
  const navigate = useNavigate();
  const handleClick = (url: string) => {
    navigate(url);
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className={["menu-item", item.path === path ? "active" : ""].join(" ")}
            key={index}
            onClick={() => handleClick(item.path)}
          >
            {item.name}
          </div>
        );
      })}
    </>
  );
};
export default function Header() {
  const location = useLocation();
  return (
    <>
      <div className="header">
        <div className="left-box flex-center">沧海一粟(简)</div>
        <div className="center flex-center">路虽远,行则将至! 事虽难,作则必成!!</div>
        <div className="right-box">
          <MenuItem path={location.pathname} data={data} />
        </div>
      </div>
    </>
  );
}
