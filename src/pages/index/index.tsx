import React, { useEffect, useRef, useState } from "react";
import api from "../../api";
import { infoDeleteById } from "../../api/blog/info";
import { TDoc } from "../../app.url";

import "./style/index.less";
import { useNavigate } from "react-router";
const mockBeforeData = [
  {
    title: "Vue",
    doc: "",
  },
  {
    title: "React",
    doc: "",
  },
  {
    title: "Nodejs",
    doc: "",
  },
  {
    title: "Javascript",
    doc: "",
  },
  {
    title: "Typescript",
    doc: "",
  },
  {
    title: "webpack",
    doc: "",
  },
  {
    title: "Vite",
    doc: "",
  },
  {
    title: "rollup",
    doc: "",
  },
  {
    title: "EsLint",
    doc: "",
  },
  {
    title: "ESBuild",
    doc: "",
  },
  {
    title: "SCSS",
    doc: "",
  },
];
const mockAfterData = [
  {
    title: "Mysql",
    doc: "",
  },
  {
    title: "Java",
    doc: "",
  },
  {
    title: "多线程",
    doc: "",
  },
  {
    title: "高并发",
    doc: "",
  },
  {
    title: "Spring",
    doc: "",
  },
  {
    title: "Shiro",
    doc: "",
  },
  {
    title: "nacos",
    doc: "",
  },
  {
    title: "JVM",
    doc: "",
  },
  {
    title: "SQL",
    doc: "",
  },
  {
    title: "MQ",
    doc: "",
  },
  {
    title: "支付系列",
    doc: "",
  },
];
export default function IndexPage() {
  const node = useRef<HTMLDivElement | null>(null);
  let navgait = useNavigate();
  let oldDom: HTMLElement | undefined = undefined;

  const handleMOuse = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
    e.stopPropagation();
    if (oldDom) {
      oldDom.style.color = "#000000";
    }
    if (!node.current) return;
    const dom = e.target as HTMLDivElement;
    node.current.style.left = dom.offsetLeft + "px";
    node.current.style.top = dom.offsetTop + "px";
    if (!dom) return;
    dom.style.color = "#ffd02f";
    oldDom = dom;
  };
  const handleClick = (url: string) => {
    navgait("/before");
  };
  return (
    <>
      <div className="page index">
        <div className="item node" ref={node} style={{ backgroundColor: "#000" }}></div>
        <div className="page-box">
          {([...mockBeforeData] || []).map((item) => (
            <div
              className="item"
              style={{ color: "" }}
              onMouseEnter={handleMOuse}
              onClick={() => handleClick("/before")}
            >
              <h2>{item.title}</h2>
              <p>{item.doc}</p>
            </div>
          ))}
        </div>
        <div className="page-box">
          {([...mockAfterData] || []).map((item) => (
            <div
              className="item"
              style={{ color: "" }}
              onMouseEnter={handleMOuse}
              onClick={() => handleClick("/before")}
            >
              <h2>{item.title}</h2>
              <p>{item.doc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
