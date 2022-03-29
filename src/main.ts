import './globalImports'
import './mediawiki/mediawiki.js'
import CodeMirror from 'codemirror'
import mwConfig from './mediawiki/mwConfig'

import 'codemirror/lib/codemirror.css'
import './styles/index.scss'

const textarea = document.createElement('textarea')
document.body.append(textarea)

const editor = CodeMirror.fromTextArea(textarea, {
  ...({ mwConfig } as any),
  mode: 'mediawiki',
  lineWrapping: true,
  cursorHeight: 0.85,
  cursorBlinkRate: 100,
  // lineNumbers: true,
})

;(window as any).editor = editor

editor.on("change", editor => {
  ;(window as any).onEditorTextChange?.call(null, editor.getValue())
})