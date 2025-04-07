import React, { useEffect, useState } from "react";
import Editor from "./Components/Editor";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [Js, setJs] = useState("");
  const[srcDoc,setSrcDoc] = useState('');
  useEffect(()=>{
    setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${Js}</script>
      </html>`)

  },[html,css,Js])

  return (
    <div>
      <div className="panel top-panel">
        <Editor title="HTML" language="xml" value={html} onChange={setHtml} />
        <Editor title="CSS" language="css" value={css} onChange={setCss} />
        <Editor title="JS" language="javascript" value={Js} onChange={setJs} />
      </div>
      <div className="panel">

        <iframe srcDoc={srcDoc} title="Output" sandbox="allow-scripts"  width="100%" height="100%" />
      </div>
    </div>
  );
};

export default App;
