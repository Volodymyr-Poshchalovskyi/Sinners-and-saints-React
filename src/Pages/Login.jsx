import React, { useState } from 'react';

const Login = () => {
  const [currentTab, setCurrentTab] = useState('SIGN_IN');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [staffId, setStaffId] = useState(''); // Additional field for STAFF

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
    // Clear all fields on tab change
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setStaffId('');
  };

  const renderForm = () => {
    switch (currentTab) {
      case 'SIGN_IN':
        return (
          <form className="space-y-6">
            <div className="border-b border-gray-400 py-2">
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
            <div className="border-b border-gray-400 py-2">
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
            <a href="#" className="block text-right text-xs text-gray-500 uppercase hover:underline">
              Forgot password?
            </a>
            <button
              type="submit"
              className="w-full py-4 mt-6 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>
        );
      case 'REGISTER':
        return (
          <form className="space-y-6">
            <div className="border-b border-gray-400 py-2">
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
            <div className="border-b border-gray-400 py-2">
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
            <div className="border-b border-gray-400 py-2">
              <input
                type="password"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 mt-6 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Register
            </button>
          </form>
        );
      case 'STAFF':
        return (
          <form className="space-y-6">
            <div className="border-b border-gray-400 py-2">
              <input
                type="text"
                placeholder="STAFF ID"
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
            <div className="border-b border-gray-400 py-2">
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
            <a href="#" className="block text-right text-xs text-gray-500 uppercase hover:underline">
              Forgot password?
            </a>
            <button
              type="submit"
              className="w-full py-4 mt-6 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  const getTabClass = (tabName) => {
    return `text-xs uppercase cursor-pointer ${currentTab === tabName ? 'font-bold' : 'text-gray-400'}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl font-light mb-12">ACCOUNT</h1>
        <div className="flex justify-center space-x-8 mb-12">
          <div className={getTabClass('STAFF')} onClick={() => handleTabChange('STAFF')}>
            STAFF
          </div>
          <div className={getTabClass('SIGN_IN')} onClick={() => handleTabChange('SIGN_IN')}>
            SIGN IN
          </div>
          <div className={getTabClass('REGISTER')} onClick={() => handleTabChange('REGISTER')}>
            REGISTER
          </div>
        </div>
        <div className="text-left">
          <p className="text-sm font-light mb-6">
            WELCOME BACK.
            <br />
            SIGN IN WITH YOUR EMAIL AND PASSWORD
          </p>
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;