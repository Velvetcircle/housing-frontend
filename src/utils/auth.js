// src/utils/auth.js

// Save token to localStorage
export const saveToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Remove token (on logout)
export const clearToken = () => {
  localStorage.removeItem('authToken');
};

// Check if user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem('authToken');
};
