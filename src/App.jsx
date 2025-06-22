import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome to MiniStore</h1>
        {/* More content will go here */}
      </main>
    </div>
  );
}

export default App;
