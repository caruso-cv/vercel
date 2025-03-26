'use client';
import React from 'react';

export default function CookieLink() {
  return (
    <a
      href="#"
      className="hover:text-white"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event('open-cookie-dialog'));
      }}
    >
      Cookies
    </a>
  );
}