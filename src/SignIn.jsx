import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Heart, Building2, Users } from "lucide-react";

const SignIn = ({ onNavigateToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#f8faf7] flex items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
              Welcome <span className="text-emerald-500">back!</span>
              <Heart className="w-8 h-8 text-emerald-500 stroke-[1.5]" />
            </h1>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Sign in to continue your journey and make a real impact.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100/60 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Donate food easily
                </h3>
                <p className="text-gray-500 text-xs mt-0.5">
                  Share extra food and help someone in need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100/60 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Partner with charities
                </h3>
                <p className="text-gray-500 text-xs mt-0.5">
                  We work with trusted organizations to deliver your donations.
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100/60 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Track your impact
                </h3>
                <p className="text-gray-500 text-xs mt-0.5">
                  See how your kindness is changing lives.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Sign <span className="text-emerald-500">in</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-600 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-600 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a
                href="#forgot"
                className="text-xs font-semibold text-emerald-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg text-sm transition duration-200 shadow-sm"
            >
              Sign In
            </button>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-4 text-xs text-gray-400">
                or continue with
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 px-4 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 px-4 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onNavigateToSignUp}
                className="font-bold text-emerald-500 hover:underline inline-block"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
