import { editor } from "monaco-editor";
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from "react";
import { handlePaste } from "./markdownUtils";
interface Props {
  data: string;
  onChange?: (data: string) => void;
  onScroll?: (data: number) => void;
}

export interface MonacoEditorHandler {
  init: (val: string) => void;
  format: () => void;
}
const MonacoEditor: ForwardRefRenderFunction<MonacoEditorHandler, Props> = (props: Props, ref: any) => {
  const [monacoEditor, setMonacoEditor] = useState<editor.IStandaloneCodeEditor>();
  const init = (val: string) => {
    monacoEditor?.setValue(val);
  };
  const format = () => {
    // monacoEditor?.getAction("editor.action.formatDocument").run();
  };
  useImperativeHandle(ref, () => ({
    init,
    format,
  }));
  useEffect(() => {
    const dom = document.querySelector<HTMLDivElement>("#monaco");
    if (!dom) return;
    const edit = editor.create(dom, {
      theme: "vs-dark",
      language: "markdown",
      automaticLayout: true,
      quickSuggestions: true,
      fontSize: 14,
      tabSize: 2,
      folding: true,
      autoIndent: "full",
      foldingStrategy: "indentation",
    });

    edit.onDidChangeModelContent((e) => {
      const value = edit.getValue();
      props.onChange?.(value);
    });
    edit.onDidScrollChange((e) => {
      const box = document.querySelector<HTMLDivElement>("#monaco");
      if (!box) return;
      const p = e.scrollTop / (e.scrollHeight - box.offsetHeight || 0);
      props.onScroll?.(p);
    });
    edit.getDomNode()?.addEventListener("paste", handlePaste(edit));
    setMonacoEditor(edit);

    window.onresize = () => {
      // edit.updateOptions
    };
  }, []);
  return (
    <>
      <div className="eidtor" id="monaco"></div>
    </>
  );
};

export default forwardRef(MonacoEditor);
