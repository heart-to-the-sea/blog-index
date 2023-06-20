import "./style/index.less";
import "../../components/Markdown/style/index.less";
import { useEffect, useRef, useState } from "react";
import Thumbnail, { ThumbnailHandler } from "../../components/Thumbnail";
import Directory, { DirectoryHandler } from "../../components/Directory";
import { useParams } from "react-router-dom";
import api from "../../api";
import { CatalogueNode } from "../../utils";
import ViewHeader from "../../components/pagesComponent/ViewHeader";
async function getInfoViewById(id: string) {
  const { data: res } = await api.info.infoViewById(id);
  if (res.code === 200) {
    return res.data;
  }
  return undefined;
}
export default function View() {
  const box = useRef<HTMLDivElement>(null);
  const [directoryList, setDirectoryList] = useState<CatalogueNode[]>();
  const router = useParams<{ id: string }>();
  const thumbnail = useRef<ThumbnailHandler>(null);
  const directory = useRef<DirectoryHandler>(null);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    // getInfoViewById(router?.id || "")
    //   .then((item) => {
    //     if (!item) return;
    //     if (!box.current) return;
    //     console.log(item.contentHTML);
    //     console.log(item);
    //     box.current.innerHTML = item.contentHTML || "";
    //     setDirectoryList(JSON.parse(item.directory));
    //   })
    //   .then(() => {
    //     if (!thumbnail.current) return;
    //     thumbnail.current.update();
    //   });
    if (!box.current?.innerHTML) return;
    debugger
    box.current.innerHTML = `<h1 id=\"title-这是一级标题\" tabindex=\"-1\">这是一级标题 <a class=\"header-anchor\" href=\"#title-这是一级标题\">#</a></h1>\n<pre><code class=\"language-pseudocode\"><div class=\"ps-root\"><div class=\"ps-algorithm with-caption\"><p class=\"ps-line\" style=\"text-indent:-1.5em;padding-left:1.5em;\"><span class=\"ps-keyword\">Algorithm 5 </span>Example Pseudocode</p><div class=\"ps-algorithmic\"><div class=\"ps-block\" style=\"margin-left:1.5em;\"><p class=\"ps-line ps-code\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>←</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x\\gets0</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">←</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></p><p class=\"ps-line ps-code\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>←</mo><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">y\\gets\\sqrt{x}+1</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.03588em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">←</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.04em;vertical-align:-0.2397em;\"></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8003em;\"><span class=\"svg-align\" style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\" style=\"padding-left:0.833em;\"><span class=\"mord mathnormal\">x</span></span></span><span style=\"top:-2.7603em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"min-width:0.853em;height:1.08em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"1.08em\" viewBox=\"0 0 400000 1080\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,-221l0 -0c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47zM834 80h400000v40h-400000z\"></path></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2397em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span></p><p class=\"ps-line ps-code\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>z</mi><mo>←</mo><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mi>x</mi><mi>y</mi></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">z\\gets\\dfrac{x}{y}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.04398em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">←</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.988em;vertical-align:-0.8804em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.03588em;\">y</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></p></div></div></div></div></code></pre>\n`;
    if (!thumbnail.current) return;
    thumbnail.current.update();
  }, []);
  useEffect(() => {
    // 更新线条
    directory.current?.init();
  }, [directoryList]);
  return (
    <>
      <ViewHeader />
      <div className="view">
        <div className="view">
          <div className="box-content">
            <div className="left">
              <Directory ref={directory} percent={percent} node={directoryList} />
            </div>

            <div className="markdown">
              <div className="preview" ref={box}></div>
            </div>
          </div>
          <Thumbnail dom={box} ref={thumbnail} percent={percent} onPercentChange={(e) => setPercent(e)} />
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
}
