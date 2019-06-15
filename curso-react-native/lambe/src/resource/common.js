import { setMessage } from '../store/actions/message'

const showError = (title = 'Erro!!', text = 'Ocorreu um erro inesperado') =>
  setMessage({ title, text })

const showMessage = (title, text) => setMessage({ title, text })

export { showError, showMessage }
