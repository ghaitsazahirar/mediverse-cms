// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import TextInput from '../components/TextInput';
import mediverseLogo from '../assets/mediverse-logo.png';
import mbakmed from '../assets/mbak-med.png';

interface LoginPageProps {
  onLoginSuccess: () => void; // Callback for successful login
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setMessage('Logging in...');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else if (data.user) {
      setMessage(`Success! Welcome, ${data.user.email ?? 'User'}`);
      console.log('User data:', data);
      onLoginSuccess();
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Bagian kiri - FORM */}
        <div className="absolute top-6 left-6">
            <img src={mediverseLogo} alt="Logo Mediverse" className="h-24 w-auto" />
        </div>
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Selamat Datang</h2>
          <p className="text-sm text-gray-500 mb-8">Masuk dan kelola dashboard Mediverse Anda <br />sekarang</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <TextInput
              label="Email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              icon={<EnvelopeIcon className="h-5 w-5" />}
              error={message.includes('Email') ? message : undefined}
            />
            <TextInput
              label="Kata Sandi"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              icon={<LockClosedIcon className="h-5 w-5" />}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="focus:outline-none text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              }
              error={message.includes('Password') ? message : undefined}
            />
            <div className="text-right text-sm font-semibold text-black cursor-pointer">
              Lupa Kata Sandi?
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full font-semibold flex items-center justify-center gap-2">
              MASUK SEKARANG <ArrowRightOnRectangleIcon className="h-5 w-5 text-white" />
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
        </div>
      </div>

      {/* Bagian kanan - Gambar / branding */}
      <div className="hidden md:flex w-1/2 flex-col justify-start items-center bg-gradient-to-b from-purple-700 to-purple-500 rounded-l-[3rem] px-6 py-6 text-white text-center space-y-4">
      <div className="w-full flex justify-center">
            <img
            src={mediverseLogo}
            alt="Logo Mediverse"
            className="h-33 w-auto"
            />
        </div>
        <div className="flex-1 flex flex-col justify-start items-center text-white text-center mt-4">
        <img
            src={mbakmed}
            alt="Mediverse Banner"
            className="h-33 w-auto transform -translate-y-14"
        />
        <h2 className="text-4xl font-semibold text-white/70 transform -translate-y-10">
            Your Personal <br /> Healthcare Assistant
        </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
