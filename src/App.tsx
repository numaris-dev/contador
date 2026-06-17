import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          Contador
        </h1>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mb-8">
          <p className="text-6xl font-bold text-white text-center tabular-nums">
            {count}
          </p>
        </div>

        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl active:scale-95 transform"
          >
            <span className="text-2xl">−</span>
          </button>
          
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl active:scale-95 transform"
          >
            <span className="text-2xl">+</span>
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg active:scale-95 transform"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
