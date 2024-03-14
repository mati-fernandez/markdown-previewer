import { useState, useEffect } from 'react';
import './App.css';
import { marked } from 'marked';

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

  const handleEditorChange = (event) => {
    setEditor(event.target.value);
  };

  marked.setOptions({ breaks: true });

  return (
    <div id="container">
      <h1 id="title-1">Type some Markdown format text downhere...</h1>
      <textarea
        id="editor"
        value={editor}
        onChange={handleEditorChange}
      ></textarea>
      <h1 id="title-2">Markdown previewer</h1>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(editor) }}
      ></div>
    </div>
  );
}

export default App;
