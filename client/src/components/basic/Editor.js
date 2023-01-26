import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";
import { Stack } from "@mui/material";

const Editor = ({ data, setValues, values }) => {
  function handleEditorChange({ html, text }) {
    setValues({ ...values, description: text });
  }
  const mdParser = new MarkdownIt();
  return (
    <Stack style={{ marginTop: 20 }}>
      <MdEditor
        placeholder={data.value}
        onChange={handleEditorChange}
        renderHTML={(text) => mdParser.render(text)}
      />
    </Stack>
  );
};

export default Editor;
