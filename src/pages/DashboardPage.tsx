import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();
  
      if (authError) {
        console.error("Auth error:", authError);
        setLoading(false);
        return;
      }
  
      if (user) {
        const { data: userProfile, error: profileError } = await supabase
          .from('users') 
          .select('name')
          .eq('id', user.id) 
          .single();
  
        if (profileError) {
          console.error('Profile error:', profileError);
        } else {
          setUser({ ...user, name: userProfile.name });
        }
      } else {
        // kalau user null langsung redirect
        window.location.href = '/';
      }
  
      setLoading(false);
    };
  
    fetchUser();
  }, []);  

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Redirect to login page after logout
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return null; // atau bisa <></> atau bisa kosongin aja
  }
  
  // kalau user ada, baru render dashboard
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h2>
      <p className="text-lg mb-4">Hello, {user.name}!</p>
  
      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Your Activities</h3>
          <p className="mt-2">Manage your activities here.</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Statistics</h3>
          <p className="mt-2">View your personal stats.</p>
        </div>
      </div>
  
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
  
};

export default DashboardPage;
