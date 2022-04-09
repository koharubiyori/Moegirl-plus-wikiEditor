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
    scrollbarStyle: 'null',
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

// 解决点击编辑器底部内容时滚动后位置不再最底部的问题
window.editor.on('beforeSelectionChange', editor => {
  setTimeout(() => {
    const lineCount = editor.lineCount()
    const currentLine = editor.getCursor().line
    if (lineCount - currentLine <= 3) {
      const scrollElement = editor.getScrollerElement()
      const contentHeight = scrollElement.querySelector('.CodeMirror-sizer')!!.clientHeight
      scrollElement.scrollTo(0, contentHeight)
    }
  }, 30)
})