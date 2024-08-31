import { EditorView } from "codemirror";

import { createTheme } from "@uiw/codemirror-themes";
import { linter, Diagnostic } from "@codemirror/lint";

import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { cn } from "@/lib/utils";
import { WasmParserError } from "@reciperium/recipe-parser-wasm";

const recipriumTheme = createTheme({
  theme: "light",
  settings: {
    fontSize: "11pt",
    // background: "#ffffff",
  },
  styles: [],
});

type Props = ReactCodeMirrorProps & {
  error?: WasmParserError | null;
  value: string;
  onChange: (value: string) => void;
};

export default function Editor({ error, value, onChange, className, ...props }: Props) {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      theme={recipriumTheme}
      height="100%"
      autoFocus={true}
      indentWithTab={false}
      basicSetup={{
        allowMultipleSelections: true,
        highlightSelectionMatches: true,
        lineNumbers: false,
        foldGutter: false,
        searchKeymap: true,
        lintKeymap: false,
      }}
      extensions={[
        EditorView.lineWrapping,
        linter((_view: EditorView) => {
          let diagnostics: Diagnostic[] = [];
          if (error?.offset) {
            diagnostics.push({
              from: error?.offset - 2,
              to: error?.offset + 0,
              severity: "error",
              message: error?.message,
            });
          }
          return diagnostics;
        }),
      ]}
      className={cn(
        className,
        "dark:bg-slate-950 dark:selection:text-slate-900 caret-pink-500 text text-sm",
        error?.message && "err"
      )}
      {...props}
    />
  );
}
