import React, { useState } from 'react';

const Login = () => {
  const [currentTab, setCurrentTab] = useState('SIGN_IN');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [staffId, setStaffId] = useState('');

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setStaffId('');
  };

  const renderForm = () => {
    // Adding a key to force re-render and trigger animation on tab change
    return (
      <div key={currentTab} className="transition-opacity duration-500 ease-in-out">
        {(() => {
          switch (currentTab) {
            case 'SIGN_IN':
              return (
                <form className="space-y-6">
                  <div className="py-2">
                    <label htmlFor="email" className="block text-xs text-gray-400 uppercase tracking-widest mb-1">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm py-1"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="password" className="block text-xs text-gray-400 uppercase tracking-widest mb-1">PASSWORD</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm py-1"
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
                  <div className="py-2">
                    <label htmlFor="email" className="block text-xs text-gray-400 uppercase tracking-widest mb-1">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm py-1"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="password" className="block text-xs text-gray-400 uppercase tracking-widest mb-1">PASSWORD</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm py-1"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="confirmPassword" className="block text-xs text-gray-400 uppercase tracking-widest mb-1">CONFIRM PASSWORD</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm py-1"
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
                  <div className="py-2">
                    <label htmlFor="staffId" className="block text-xs text-gray-400 uppercase tracking-widest mb-1">STAFF ID</label>
                    <input
                      type="text"
                      id="staffId"
                      value={staffId}
                      onChange={(e) => setStaffId(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm py-1"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="password" className="block text-xs text-gray-400 uppercase tracking-widest mb-1">PASSWORD</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm py-1"
                    />
                  </div>
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
        })()}
      </div>
    );
  };

  const getTabClass = (tabName) => {
    return `text-xs uppercase cursor-pointer tracking-widest ${currentTab === tabName ? 'font-bold border-b-2 border-black' : 'text-gray-400'}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-12 tracking-widest">ACCOUNT</h1>
        <div className="flex justify-center space-x-12 mb-12 border-b border-gray-400 pb-2">
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
          <p className="text-sm font-light mb-8 uppercase tracking-wide leading-relaxed">
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
