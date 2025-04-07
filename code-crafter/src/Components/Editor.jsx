import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import texteditor from "./Store";
import { BiSolidShare } from "react-icons/bi";
import { SlShareAlt } from "react-icons/sl";

const Editor = ({ language, title, value, onChange }) => {
//   const open = texteditor((state) => state.open);
//   const toggle = texteditor((state) => state.toggle);

const [open,setOpen] =  useState(false)
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${open ? "": "collapse"}` }>
      <div className="editor-title">
        {title}
        <button className="expand-collapse-button" onClick={()=>setOpen((pre)=>!pre)}>{open ?<BiSolidShare />:<SlShareAlt />}</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-editor-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
