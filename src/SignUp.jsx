import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Heart, Building2, Users, User, Globe, Phone, CheckCircle2 } from 'lucide-react';
import { useSettings } from "./SettingsContext";
const SignUp = ({ onNavigateToSignIn }) => {
  const [accountType, setAccountType] = useState('person'); // 'person' or 'charity'
  const [showPassword, setShowPassword] = useState(false);
  const { setIsLoggedIn } = useSettings();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    phoneNumber: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Sign Up Data:', { accountType, ...formData });
  setIsLoggedIn(true);
  window.location.href = "/";
};

  return (
    <div className="min-h-screen bg-[#f8faf7] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              Join <span className="text-emerald-700">donate for all</span>
              <Heart className="w-7 h-7 text-emerald-600 stroke-[1.5]" />
            </h1>
            <p className="text-gray-500 mt-3 text-xs leading-relaxed">
              Create your account and be part of a community that shares more and cares more.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-100/60 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-xs">Donate or Get Help</h3>
                <p className="text-gray-500 text-[11px] mt-0.5">Share extra food or find help from people around you.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-100/60 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-xs">Work with Trusted Charities</h3>
                <p className="text-gray-500 text-[11px] mt-0.5">We partner with verified organizations to reach more people.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-100/60 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-xs">Track Your Impact</h3>
                <p className="text-gray-500 text-[11px] mt-0.5">See how your donations and support are changing lives.</p>
              </div>
            </div>
          </div>
        </div>



        <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-1.5">
              Create <span className="text-emerald-700">your account</span>
              <Heart className="w-5 h-5 text-emerald-600 stroke-[2]" />
            </h2>
            <p className="text-gray-500 text-xs mt-1">Sign up to get started</p>
          </div>



          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">I am signing up as</label>
              <div className="grid grid-cols-2 gap-4">

                <div
                  onClick={() => setAccountType('person')}
                  className={`relative p-4 rounded-xl border text-center cursor-pointer transition ${
                    accountType === 'person'
                      ? 'border-emerald-600 bg-emerald-50/30 scale-110'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100/60 flex items-center justify-center">
                      <Users className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="font-semibold text-xs text-gray-900">Person</span>
                    <span className="text-[10px] text-gray-400">I want to donate food or help.</span>
                  </div>
                  {accountType === 'person' && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 fill-emerald-700 stroke-white absolute top-2 right-2" />
                  )}
                </div>

                <div
                  onClick={() => setAccountType('charity')}
                  className={`relative p-4 rounded-xl border text-center cursor-pointer transition ${
                    accountType === 'charity'
                      ? 'border-emerald-600 bg-emerald-50/30 scale-110'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100/60 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="font-semibold text-xs text-gray-900">Charity</span>
                    <span className="text-[10px] text-gray-400">I represent a charity or organization.</span>
                  </div>
                  {accountType === 'charity' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 fill-emerald-700 stroke-white absolute top-2 right-2" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border border-gray-300 absolute top-2 right-2"></div>
                  )}
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

              <div className=''>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-emerald-600 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-emerald-600 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full pl-9 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-emerald-600 transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full pl-9 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-emerald-600 transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Country</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-emerald-600 transition appearance-none text-gray-600"
                    required
                  >
                    <option value="" disabled>Select your country</option>
                    <option value="EG">Egypt</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="US">United States</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (Optional)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-emerald-600 transition"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-3.5 h-3.5 text-emerald-700 border-gray-300 rounded focus:ring-emerald-600"
                required
              />
              <label htmlFor="terms" className="text-[11px] text-gray-600">
                I agree to the{' '}
                <a href="#terms" className="text-emerald-700 underline font-semibold">Terms of Service</a> and{' '}
                <a href="#privacy" className="text-emerald-700 underline font-semibold">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-medium py-2.5 rounded-lg text-xs transition duration-200 shadow-sm mt-2 active:scale-90"
            >
              Sign Up
            </button>

            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-3 text-[11px] text-gray-400">or sign up with</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 px-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 px-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onNavigateToSignIn}
                className="font-bold text-emerald-700 hover:underline inline-block"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;