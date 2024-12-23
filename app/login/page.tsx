"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();

  const {login} = useAuth();
  const handleLogin = (role: 'admin' | 'viewer' | 'editor') => {
    const user = {
      name: "Rafael",
      email: `${role}@gmail.com`,
      role
    };

    login(user);
    router.push("/dashboard/home");
  };

  return (
    <div className="flex flex-col w-full justify-center">
      <h1 className="text-center">Login Page</h1>
      <button 
        onClick={() => handleLogin('admin')} 
        className="mt-4 block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Iniciar como ADMIN
      </button>
      <button
        onClick={() => handleLogin('viewer')}
        className="mt-4 block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Iniciar como VIEWER
      </button>
    </div>
  );
}