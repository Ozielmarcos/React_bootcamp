import './App.css'
import Relogio from './components/Relogio'
import Contador from './components/Contador'
import { Button, Alert, Calendar } from 'antd'

function App() {

  return (
    <>
      <Relogio dataHora={new Date()} />
      <Contador />
      <Button type='primary' onClick={() => { alert('Clicou') }}>Clique aqui</Button>
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
      <Calendar fullscreen={false} />
    </>
  )
}

export default App
