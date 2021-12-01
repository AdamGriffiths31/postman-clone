import React,{useEffect,useRef} from 'react'
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { json } from '@codemirror/lang-json';
import CodeMirror from 'codemirror';


const basicExtensions = [
    basicSetup,
    json(),
    EditorState.tabSize.of(2)
  ]

const ResponseBody = ({doc,setDoc, isEditable=true})=> {
    console.log(doc)
    const editorRef = useRef();

  useEffect(() => {  
    if(editorRef.current === null) return;
    const state = EditorState.create({
        doc: doc,
      extensions: [
        ...basicExtensions,
        EditorView.updateListener.of((view) => {
          if (view.docChanged) {
            setDoc(view.state.doc);
          }
        }),
        EditorView.editable.of(isEditable)
      ]
    });

    const view = new EditorView({
      state,
      parent: editorRef.current
    });

    return () => {
      view.destroy();
    }

  }, [editorRef.current, doc])
    return (
        <div className="p-3 border-top-0 border">
           
                <div className="editor-pane" ref={editorRef}></div>

        </div>
    )
}

export default ResponseBody
