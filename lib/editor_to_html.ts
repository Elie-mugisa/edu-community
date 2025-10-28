import editorjsHTML from "editorjs-html";

const parse = editorjsHTML();

export function renderEditorJsToHtml(data: any) {
  const htmlBlocks = parse(data);
  return htmlBlocks.join("");
}
