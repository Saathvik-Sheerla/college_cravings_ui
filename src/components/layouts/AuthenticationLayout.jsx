// src/components/layouts/AuthenticationLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthenticationLayout({ children, title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {title === 'Welcome Back' ? (
              <>
                Or{' '}
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  create a new account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </Link>
              </>
            )}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}