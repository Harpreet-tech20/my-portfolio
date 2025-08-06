'use client';
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md py-4 mb-8">
      <ul className="flex justify-center space-x-6 font-semibold">
        <li>
          <a href="#about" className="hover:text-blue-600">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </li>
        <li>
          <a href="/resume.pdf" download className="hover:text-blue-600">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
