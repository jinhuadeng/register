import React, { useState } from 'react'
import { User, UserPlus, LogIn, LogOut } from 'lucide-react'
import Register from './components/Register'
import Login from './components/Login'
import Account from './components/Account'

function App() {
  const [user, setUser] = useState(null)
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleRegister = (userData) => {
    console.log('Registered:', userData)
    setUser(userData)
    setShowRegister(false)
  }

  const handleLogin = (userData) => {
    console.log('Logged in:', userData)
    setUser(userData)
    setShowLogin(false)
    window.open('https://x.yuhuawenyu.com', '_blank')
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-light mb-8 text-center text-gray-800">Welcome to x.yuhuawenyu.com</h1>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {user ? (
            <Account user={user} onLogout={handleLogout} />
          ) : (
            <div className="p-8 space-y-4">
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setShowRegister(true)}
              >
                <UserPlus className="mr-2" size={20} />
                Register
              </button>
              <button
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setShowLogin(true)}
              >
                <LogIn className="mr-2" size={20} />
                Login
              </button>
            </div>
          )}
        </div>
      </div>
      {showRegister && <Register onRegister={handleRegister} onClose={() => setShowRegister(false)} />}
      {showLogin && <Login onLogin={handleLogin} onClose={() => setShowLogin(false)} />}
    </div>
  )
}

export default App