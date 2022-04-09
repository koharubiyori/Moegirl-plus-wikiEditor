declare module 'expose-loader?*' {
  const globalModule: any
  export default globalModule
}

interface Window {
  editor: CodeMirror.EditorFromTextArea
}