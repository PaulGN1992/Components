import ReactDOM from 'react-dom'
import { useState } from 'react'

function Modal({children}) {
  return ReactDOM.createPortal( 
    <div className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 ">
      <h1>Modal Title</h1>
      <p>This modal content is rendered outside the normal DOM flow</p>
      {children}
    </div>,
    document.body
  )
}

export default function Prueba() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="app">
      <button className='text-green-500' onClick={() => setShowModal(true)}>Open Modal</button>
      
      {showModal && (
        <Modal >
          <button className='text-red-500' onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      )}

    </div>
  )
}