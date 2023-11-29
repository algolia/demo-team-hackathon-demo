import ace from 'ace-builds'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-javascript'
import { useEffect, useRef } from 'react'

interface Props {
  value: string
}

const CodeBlock = ({ value }: Props) => {
  const editorRef = useRef<any>(null)

  useEffect(() => {
    const editor = ace.edit(editorRef.current)
    editor.setTheme('ace/theme/monokai')
    editor.getSession().setMode('ace/mode/javascript')
    editor.setValue(value, -1)

    return () => {
      editor.destroy()
    }
  }, [value])

  return (
    <div className={`CodeEditor h-full w-full`}>
      <div ref={editorRef} style={{ width: '480px', height: '320px' }} />
    </div>
  )
}

export default CodeBlock
