import ReactDOM from "react-dom/client";
import COMMAND from "../../../use/command";
import HelpList from "../components/Help/HelpList";
import { HandleCommand } from "../handleCommand";
const commandDocList = [
  {
    name: "命令",
    doc: "解释",
  },
  {
    name: "help",
    doc: "返回请求的命令的详细解释",
  },
  {
    name: "ls",
    doc: "返回博客列表",
  },
];

export default class HandleHelp implements HandleCommand {
  async handler(commandList: string[], content: HTMLDivElement) {
    if (commandList.length === 1) {
      const box = document.createElement("div");
      box.classList.add("terminal-index-box");

      content.append(box);
      const last = document.createElement("div");
      last.innerHTML = ":>";
      content.append(last);
      ReactDOM.createRoot(box).render(<HelpList list={commandDocList} />);
    }
  }
}
