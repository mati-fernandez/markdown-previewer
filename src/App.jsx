import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [editor, setEditor] = useState('# Hola\n\nRendered by **marked**.');

  const handleEditorChange = (event) => {
    setEditor(event.target.value);
  };
  const updatePreview = () => {
    document.getElementById('preview').innerHTML = marked(
      document.getElementById('editor').value
    );
  };

  updatePreview();

  return (
    <>
      <h2>Type some MD format text downhere...</h2>
      <textarea id="editor" onChange={handleEditorChange}></textarea>
      <h2>Markdown previewer</h2>
      <div id="preview"></div>
    </>
  );
}

export default App;
