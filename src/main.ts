import './globalImports'
import './mediawiki/mediawiki.js'
import CodeMirror from 'codemirror'
import mwConfig from './mediawiki/mwConfig'

import 'codemirror/lib/codemirror.css'
import './styles/index.scss'

const textarea = document.createElement('textarea')
document.body.append(textarea)

function remakeEditor() {
  window.editor?.toTextArea()
  const editor = CodeMirror.fromTextArea(textarea, {
    ...({ mwConfig } as any),
    mode: 'mediawiki',
    lineWrapping: true,
  })
  
  window.editor = editor
  return editor
}

window.editor = remakeEditor()
;(window as any).remakeEditor = remakeEditor

function resetEditorSize() {
  window.editor.setSize(document.documentElement.clientWidth, document.documentElement.clientHeight)
}

window.addEventListener("resize", resetEditorSize)

resetEditorSize()

window.editor.on("change", editor => {
  ;(window as any).onEditorTextChange?.call(null, editor.getValue())
})