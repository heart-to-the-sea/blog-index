import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.less";
import "highlight.js/styles/vs2015.css";
import "markdown-it-latex/dist/index.css";
import reportWebVitals from "./reportWebVitals";
import initLangurage from "./components/Markdown/initLangurage";
import appStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
initLangurage();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
