import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ConnectButtonWithModal, useWallet } from '@vechain/dapp-kit-react'
import './App.css'
import { useCounter } from './hooks/useCounter'
import { useMemo } from 'react'

function App() {
  const { count, incrementCount, status } = useCounter()
  const { account } = useWallet()

  const statusColor = useMemo(() => {
    switch (status) {
      case undefined:
        return 'white'
      case 'Waiting for wallet':
      case 'Pending Transaction':
        return 'orange'
      case 'Error (See Console)':
        return 'red'
      case 'Transaction Success':
        return 'green'
    }
  }, [status])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ConnectButtonWithModal />
        <button disabled={!account} onClick={incrementCount}>
          count is {count}
        </button>

        {status && <p style={{ color: statusColor }}>{status}</p>}

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
