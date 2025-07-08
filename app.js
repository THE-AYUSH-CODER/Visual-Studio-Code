let htmlCode = document.querySelector("#htmlCode");
let cssCode = document.querySelector("#cssCode");
let jsCode = document.querySelector("#jsCode");

let languageHtml = document.querySelector("#languageHtml");
let languageCss = document.querySelector("#languageCss");
let languageJs = document.querySelector("#languageJs");

function updateHighlight() {
  languageHtml.innerHTML = Prism.highlight(
    htmlCode.value,
    Prism.languages.html,
    "html"
  );
  languageCss.innerHTML = Prism.highlight(
    cssCode.value,
    Prism.languages.css,
    "css"
  );
  languageJs.innerHTML = Prism.highlight(
    jsCode.value,
    Prism.languages.js,
    "js"
  );
}

htmlCode.addEventListener("input", updateHighlight);
cssCode.addEventListener("input", updateHighlight);
jsCode.addEventListener("input", updateHighlight);

htmlCode.addEventListener("keyup", updateHighlight);
cssCode.addEventListener("keyup", updateHighlight);
jsCode.addEventListener("keyup", updateHighlight);

window.addEventListener("load", updateHighlight);

htmlCode.addEventListener("scroll", () => {
  languageHtml.parentElement.scrollTop = htmlCode.scrollTop;
});

cssCode.addEventListener("scroll", () => {
  languageCss.parentElement.scrollTop = cssCode.scrollTop;
});

jsCode.addEventListener("scroll", () => {
  languageJs.parentElement.scrollTop = jsCode.scrollTop;
});
let editors = document.querySelectorAll(".editor");

editors.forEach((editor) => {
  editor.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;

      const spaces = "    ";
      this.value =
        this.value.substring(0, start) + spaces + this.value.substring(end);

      this.selectionStart = this.selectionEnd = start + spaces.length;
    }
  });
});

const htmlTab = document.querySelector("#html");
const cssTab = document.querySelector("#css");
const jsTab = document.querySelector("#js");

const htmlCodeEditor = document.querySelector("#html-code-editor");
const cssCodeEditor = document.querySelector("#css-code-editor");
const jsCodeEditor = document.querySelector("#js-code-editor");
const filePath = document.querySelector("#file-path");
const fileName = document.querySelector("#file-name");

htmlTab.addEventListener("click", () => {
  htmlCodeEditor.style.zIndex = "10";
  cssCodeEditor.style.zIndex = "5";
  jsCodeEditor.style.zIndex = "5";
  htmlTab.className = "active";
  cssTab.className = "lang";
  jsTab.className = "lang";
  filePath.innerText =
    "index.html - New Folder - Visual Studio Code [Administrator]";
  fileName.innerText = "HTML";
});

cssTab.addEventListener("click", () => {
  cssCodeEditor.style.zIndex = "10";
  htmlCodeEditor.style.zIndex = "5";
  jsCodeEditor.style.zIndex = "5";
  cssTab.className = "active";
  htmlTab.className = "lang";
  jsTab.className = "lang";
  filePath.innerText =
    "style.css - New Folder - Visual Studio Code [Administrator]";
  fileName.innerText = "CSS";
});

jsTab.addEventListener("click", () => {
  jsCodeEditor.style.zIndex = "10";
  htmlCodeEditor.style.zIndex = "5";
  cssCodeEditor.style.zIndex = "5";
  jsTab.className = "active";
  htmlTab.className = "lang";
  cssTab.className = "lang";
  filePath.innerText =
    "script.js - New Folder - Visual Studio Code [Administrator]";
  fileName.innerText = "JavaScript";
});

let goLiveBtn = document.querySelector("#goLive");
let portBtn = document.querySelector("#port");
let live;

function showOutput() {
  setTimeout(() => {
    live = window.open("output.html", "_blank");
  }, 2000);

  goLiveBtn.style.display = "none";
  portBtn.style.display = "block";

  localStorage.setItem("html", document.getElementById("htmlCode").value);
  localStorage.setItem("css", document.getElementById("cssCode").value);
  localStorage.setItem("js", document.getElementById("jsCode").value);
}

portBtn.addEventListener("click", () => {
  live.close();
  portBtn.style.display = "none";
  goLiveBtn.style.display = "block";
});

//BoilerPlate

htmlCode.addEventListener("keydown", (e) => {
  if (e.key === "!" && htmlCode.value.trim() === "") {
    e.preventDefault();

    const boilerplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`;

    htmlCode.value = boilerplate;
    updateHighlight();
  }
});

cssCode.addEventListener("input", () => {
  const trigger = cssCode.value.trim().toLowerCase();

  if (trigger === "css") {
    const cssSnippet = `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family: 'Poppins', Arial;
}

html, body{
  height: 100%;
  width: 100%;
}`;

    cssCode.value = cssSnippet;

    updateHighlight();
  }
});

htmlCode.addEventListener("input", () => {
  const lineNumbers = document.getElementById("lineNumbers");
  const lines = htmlCode.value.split("\n").length;
  lineNumbers.textContent = Array.from({ length: lines }, (_, i) => i + 1).join(
    "\n"
  );
});

htmlCode.addEventListener("scroll", () => {
  document.getElementById("lineNumbers").scrollTop = htmlCode.scrollTop;
});

cssCode.addEventListener("input", () => {
  const lineNumbers = document.getElementById("lineNumbers2");
  const lines = cssCode.value.split("\n").length;
  lineNumbers.textContent = Array.from({ length: lines }, (_, i) => i + 1).join(
    "\n"
  );
});

cssCode.addEventListener("scroll", () => {
  document.getElementById("lineNumbers2").scrollTop = cssCode.scrollTop;
});

jsCode.addEventListener("input", () => {
  const lineNumbers = document.getElementById("lineNumbers3");
  const lines = jsCode.value.split("\n").length;
  lineNumbers.textContent = Array.from({ length: lines }, (_, i) => i + 1).join(
    "\n"
  );
});

jsCode.addEventListener("scroll", () => {
  document.getElementById("lineNumbers3").scrollTop = jsCode.scrollTop;
});
//juxghxiugh

const pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
  '"': '"',
  "'": "'",
  "`": "`",
};

editors.forEach((editor) => {
  editor.addEventListener("keydown", (e) => {
    const open = e.key;
    const close = pairs[open];
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const value = editor.value;

    if (Object.values(pairs).includes(open) && value[start] === open) {
      e.preventDefault();
      editor.selectionStart = editor.selectionEnd = start + 1;
      return;
    }

    if (e.key === "Backspace" && start === end && start > 0) {
      const prev = value[start - 1];
      const next = value[start];
      if (pairs[prev] === next) {
        e.preventDefault();
        editor.value = value.slice(0, start - 1) + value.slice(start + 1);
        editor.selectionStart = editor.selectionEnd = start - 1;
        return;
      }
    }

    if (close) {
      e.preventDefault();
      const selected = value.slice(start, end);
      editor.value =
        value.slice(0, start) + open + selected + close + value.slice(end);
      editor.selectionStart = start + 1;
      editor.selectionEnd = end + 1;
    }

    updateHighlight();
  });
});

//sxufvhsxyfg

editors.forEach((textarea) => {
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const start = textarea.selectionStart;
      const value = textarea.value;

      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      const currentLine = value.slice(lineStart, start);

      const indentMatch = currentLine.match(/^\s*/);
      const indent = indentMatch ? indentMatch[0] : "";

      const before = value.slice(0, start);
      const after = value.slice(textarea.selectionEnd);
      const newCursorPos = start + 1 + indent.length;

      textarea.value = before + "\n" + indent + after;
      textarea.selectionStart = textarea.selectionEnd = newCursorPos;
    }
  });
});

//fgxdhgbsxi

jsCode.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "/") {
    e.preventDefault();

    const value = jsCode.value;
    const start = jsCode.selectionStart;
    const end = jsCode.selectionEnd;

    const lines = value.slice(0, end).split("\n");
    let lineStart = 0,
      charCount = 0;

    let startLine = 0,
      endLine = 0;
    for (let i = 0; i < lines.length; i++) {
      const lineLength = lines[i].length + 1; // +1 for \n
      if (charCount <= start) startLine = i;
      if (charCount <= end) endLine = i;
      charCount += lineLength;
    }

    const allCommented = lines
      .slice(startLine, endLine + 1)
      .every((line) => line.trim().startsWith("//"));

    for (let i = startLine; i <= endLine; i++) {
      if (allCommented) {
        lines[i] = lines[i].replace(/^(\s*)\/\/ ?/, "$1");
      } else {
        lines[i] = lines[i].replace(/^(\s*)/, "$1// ");
      }
    }

    const newValue = lines.join("\n");
    const newStart =
      lines.slice(0, startLine).join("\n").length + (startLine > 0 ? 1 : 0);
    const newEnd =
      newStart + lines.slice(startLine, endLine + 1).join("\n").length;

    jsCode.value = newValue;
    jsCode.selectionStart = newStart;
    jsCode.selectionEnd = newEnd;

    updateHighlight();
  }
});

htmlCode.addEventListener("keydown", (e) => {
  if (e.key === "/" && e.ctrlKey) {
    e.preventDefault();

    const value = htmlCode.value;
    let start = htmlCode.selectionStart;
    let end = htmlCode.selectionEnd;

    const nothingSelected = start === end;

    if (nothingSelected) {
      const beforeCursor = value.slice(0, start);
      const afterCursor = value.slice(start);

      const lineStart = beforeCursor.lastIndexOf("\n") + 1;
      const lineEnd = afterCursor.indexOf("\n");
      end = lineEnd === -1 ? value.length : start + lineEnd;
      start = lineStart;
    }

    const selected = value.slice(start, end);
    const trimmed = selected.trim();

    const isCommented = trimmed.startsWith("<!--") && trimmed.endsWith("-->");

    const newSelected = isCommented
      ? selected.replace(/<!--\s*/, "").replace(/\s*-->/, "")
      : `<!-- ${selected} -->`;

    htmlCode.value = value.slice(0, start) + newSelected + value.slice(end);

    // Restore selection
    htmlCode.selectionStart = start;
    htmlCode.selectionEnd = start + newSelected.length;
    updateHighlight();
  }
});

cssCode.addEventListener("keydown", (e) => {
  if (e.key === "/" && e.ctrlKey) {
    e.preventDefault();

    const value = cssCode.value;
    let start = cssCode.selectionStart;
    let end = cssCode.selectionEnd;

    const nothingSelected = start === end;

    if (nothingSelected) {
      const beforeCursor = value.slice(0, start);
      const afterCursor = value.slice(start);

      const lineStart = beforeCursor.lastIndexOf("\n") + 1;
      const lineEnd = afterCursor.indexOf("\n");
      end = lineEnd === -1 ? value.length : start + lineEnd;
      start = lineStart;
    }

    const selected = value.slice(start, end);
    const trimmed = selected.trim();

    const isCommented = trimmed.startsWith("/*") && trimmed.endsWith("*/");

    const newSelected = isCommented
      ? selected.replace(/\/\*\s*/, "").replace(/\s*\*\//, "")
      : `/* ${selected} */`;

    cssCode.value = value.slice(0, start) + newSelected + value.slice(end);
    cssCode.selectionStart = start;
    cssCode.selectionEnd = start + newSelected.length;
    updateHighlight();
  }
});

editors.forEach((editor) => {
  editor.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "d") {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      const value = editor.value;

      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      const lineEnd = value.indexOf("\n", end);
      const actualEnd = lineEnd === -1 ? value.length : lineEnd;

      const line = value.slice(lineStart, actualEnd);
      const before = value.slice(0, actualEnd);
      const after = value.slice(actualEnd);

      editor.value = before + "\n" + line + after;
      editor.selectionStart = editor.selectionEnd = actualEnd + 1;
    }
  });
});

editors.forEach((editor) => {
  editor.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const lineNumbers = document.getElementById("lineNumbers");
      const lines = htmlCode.value.split("\n").length;
      lineNumbers.textContent = Array.from(
        { length: lines },
        (_, i) => i + 1
      ).join("\n");
      updateHighlight();
    }
  });
});

const selfClosingTags = ["br", "img", "hr", "input", "link", "meta"];

htmlCode.addEventListener("input", () => {
  const cursorPos = htmlCode.selectionStart;
  const value = htmlCode.value;
  const before = value.slice(0, cursorPos);
  const after = value.slice(cursorPos);

  const match = before.match(/<(\w+)[^>]*?>$/);
  if (!match) return;

  const tag = match[1].toLowerCase();
  if (selfClosingTags.includes(tag)) return;

  const lines = before.split("\n");

  const closingTag = `</${tag}>`;
  htmlCode.value = before + closingTag + after;
  htmlCode.selectionStart = htmlCode.selectionEnd = before.length;
  updateHighlight();
});

function updateInfo() {
  const pos = htmlCode.selectionStart;
  const textUptoCursor = htmlCode.value.substring(0, pos);
  const lines = textUptoCursor.split("\n");
  const lineNumber = lines.length;
  const columnNumber = lines[lines.length - 1].length + 1;
  const currentLine = htmlCode.value.split("\n")[lineNumber - 1] || "";
  const spaceCount = (currentLine.match(/ /g) || []).length;

  const line = document.querySelector("#line");
  const col = document.querySelector("#col");
  const spaces = document.querySelector("#spaces");

  line.innerText = `Ln ${lineNumber}`;
  col.innerText = `Col ${columnNumber}`;
  spaces.innerText = `Spaces: ${spaceCount}`;
}

htmlCode.addEventListener("input", updateInfo);
htmlCode.addEventListener("mouseup", updateInfo);
htmlCode.addEventListener("keyup", updateInfo);

function updateInfo2() {
  const pos = cssCode.selectionStart;
  const textUptoCursor = cssCode.value.substring(0, pos);
  const lines = textUptoCursor.split("\n");
  const lineNumber = lines.length;
  const columnNumber = lines[lines.length - 1].length + 1;
  const currentLine = cssCode.value.split("\n")[lineNumber - 1] || "";
  const spaceCount = (currentLine.match(/ /g) || []).length;

  const line = document.querySelector("#line");
  const col = document.querySelector("#col");
  const spaces = document.querySelector("#spaces");

  line.innerText = `Ln ${lineNumber}`;
  col.innerText = `Col ${columnNumber}`;
  spaces.innerText = `Spaces: ${spaceCount}`;
}

cssCode.addEventListener("input", updateInfo2);
cssCode.addEventListener("mouseup", updateInfo2);
cssCode.addEventListener("keyup", updateInfo2);

function updateInfo3() {
  const pos = jsCode.selectionStart;
  const textUptoCursor = jsCode.value.substring(0, pos);
  const lines = textUptoCursor.split("\n");
  const lineNumber = lines.length;
  const columnNumber = lines[lines.length - 1].length + 1;
  const currentLine = jsCode.value.split("\n")[lineNumber - 1] || "";
  const spaceCount = (currentLine.match(/ /g) || []).length;

  const line = document.querySelector("#line");
  const col = document.querySelector("#col");
  const spaces = document.querySelector("#spaces");

  line.innerText = `Ln ${lineNumber}`;
  col.innerText = `Col ${columnNumber}`;
  spaces.innerText = `Spaces: ${spaceCount}`;
}

jsCode.addEventListener("input", updateInfo3);
jsCode.addEventListener("mouseup", updateInfo3);
jsCode.addEventListener("keyup", updateInfo3);

window.addEventListener("load", () => {
  htmlTab.click();
});

let downloadBtn = document.getElementById("downloadBtn");

htmlTab.addEventListener("click", () => {
  downloadBtn.className = "htmlDownload";
});

cssTab.addEventListener("click", () => {
  downloadBtn.className = "cssDownload";
});

jsTab.addEventListener("click", () => {
  downloadBtn.className = "jsDownload";
});

downloadBtn.addEventListener("click", () => {
  if (downloadBtn.classList.contains("htmlDownload")) {
    const htmlContent = htmlCode.value;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();

    URL.revokeObjectURL(url);
  } else if (downloadBtn.classList.contains("cssDownload")) {
    const cssContent = cssCode.value;

    const blob = new Blob([cssContent], { type: "text/css" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "style.css";
    a.click();

    URL.revokeObjectURL(url);
  } else if (downloadBtn.classList.contains("jsDownload")) {
    const jsContent = jsCode.value;

    const blob = new Blob([jsContent], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "script.js";
    a.click();

    URL.revokeObjectURL(url);
  }
});

let saveBtn = document.querySelector("#saveBtn");
let clearBtn = document.querySelector("#clearBtn");

saveBtn.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("html", document.getElementById("htmlCode").value);
  localStorage.setItem("css", document.getElementById("cssCode").value);
  localStorage.setItem("js", document.getElementById("jsCode").value);
});

window.addEventListener("load", () => {
  htmlCode.value = localStorage.getItem("html");
  cssCode.value = localStorage.getItem("css");
  jsCode.value = localStorage.getItem("js");
  updateHighlight();
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("html");
  localStorage.removeItem("css");
  localStorage.removeItem("js");

  htmlCode.value = "";
  cssCode.value = "";
  jsCode.value = "";
  updateHighlight();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    const lineNumbers = document.getElementById("lineNumbers");
    const lines = htmlCode.value.split("\n").length;
    lineNumbers.textContent = Array.from(
      { length: lines },
      (_, i) => i + 1
    ).join("\n");
    updateHighlight();
  }
});

document.getElementById("downloadAll").addEventListener("click", function () {
  const zip = new JSZip();
  const folder = zip.folder("myWebsite");

  folder.file("index.html", htmlCode.value);
  folder.file("style.css", cssCode.vlaue);
  folder.file("script.js", jsCode.value);

  zip.generateAsync({ type: "blob" }).then(function (content) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "New Folder.zip";
    a.click();
    URL.revokeObjectURL(a.href);
  });
});

let copyBtn = document.querySelector("#copyBtn");

htmlTab.addEventListener("click", () => {
  copyBtn.className = "htmlCopy";
});

cssTab.addEventListener("click", () => {
  copyBtn.className = "cssCopy";
});

jsTab.addEventListener("click", () => {
  copyBtn.className = "jsCopy";
});

copyBtn.addEventListener("click", () => {
  if (copyBtn.classList.contains("htmlCopy")) {
    htmlCode.select();
    document.execCommand("copy");
  } else if (copyBtn.classList.contains("cssCopy")) {
    cssCode.select();
    document.execCommand("copy");
  } else if (copyBtn.classList.contains("jsCopy")) {
    jsCode.select();
    document.execCommand("copy");
  }
});
