import { useState, useEffect } from 'react';
import './App.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

function App() {
  const defaultState = `
# Header 1

## Header 2

[Link Example](https://www.example.com)

\`Inline code example\`

~~~
// Code block example
function helloWorld() {
  console.log('Hello, World!');
}
~~~

- List item 1
- List item 2

> Blockquote example

![Image Example](https://media.istockphoto.com/id/471621500/photo/tennis-court-with-tennis-ball-close-up.jpg?s=612x612&w=0&k=20&c=K4kHMI9lxAl2L_s6CfKdR_VOHWcjx6KDHXJNRN35myc=)

**Bold text example**
`;

  const [editor, setEditor] = useState(defaultState);

  useEffect(() => {
    updatePreview(editor);
  }, [editor]);

  const updatePreview = (value) => {
    const sanitizedHtml = DOMPurify.sanitize(marked(value));
    document.getElementById('preview').innerHTML = sanitizedHtml;
  };

  const handleEditorChange = (event) => {
    setEditor(event.target.value);
  };

  return (
    <div id="container">
      <h2>Type some MD format text downhere...</h2>
      <textarea
        id="editor"
        value={editor}
        onChange={handleEditorChange}
      ></textarea>
      <h2>Markdown previewer</h2>
      <div id="preview"></div>
    </div>
  );
}

export default App;
