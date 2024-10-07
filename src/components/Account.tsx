import React from 'react'
import { User, LogOut } from 'lucide-react'

interface AccountProps {
  user: { username: string; email: string }
  onLogout: () => void
}

const Account: React.FC<AccountProps> = ({ user, onLogout }) => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-center">
        <div className="bg-gray-200 rounded-full p-4">
          <User size={48} className="text-gray-600" />
        </div>
      </div>
      <h2 className="text-3xl font-light mb-4 text-center text-gray-800">Account Information</h2>
      <div className="space-y-2">
        <p className="text-center"><span className="font-medium">Username:</span> {user.username}</p>
        <p className="text-center"><span className="font-medium">Email:</span> {user.email}</p>
      </div>
      <button
        onClick={onLogout}
        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
      >
        <LogOut className="mr-2" size={20} />
        Logout
      </button>
    </div>
  )
}

export default Account