// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user } = useAuth();
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  return (
    <nav className="sticky top-0 z-50 bg-primary/90 text-secondary backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          {/* App Logo/Name - Always visible on all screens */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center">
              <span className="text-xl font-display font-bold text-accent">Campus Cravings</span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/menu" className="inline-flex items-center px-1 pt-1 text-secondary hover:text-accent transition-colors">
                Menu
              </Link>
              {user && user.role === 'client' && (
                <Link to="/orders" className="inline-flex items-center px-1 pt-1 text-secondary hover:text-accent transition-colors">
                  Orders
                </Link>
              )}
              {user && user.role === 'admin' && (
                <Link to="/admin" className="inline-flex items-center px-1 pt-1 text-secondary hover:text-accent transition-colors">
                  Admin Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Desktop right navigation - Hidden on mobile */}

          {user ? (
            <div className="hidden sm:flex sm:items-center">
              <div className="flex items-center space-x-8">
                <Link to="/cart" className="relative text-secondary hover:text-accent transition-colors">
                <span className="text-secondary hover:text-accent transition-colors">Cart</span>
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
                <Link to="/profile" className="text-secondary hover:text-accent transition-colors">
                  Profile
                </Link>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="m-2 px-4 py-2 w-fit h-fit border border-accent text-accent hover:bg-accent hover:text-primary transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}