'use client';
import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="font-sans min-h-screen bg-white text-black">
      <Navbar />
      <section className="max-w-4xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6">Hi, I’m Harpreet Kaur</h1>
        <p className="text-lg mb-8">
          Welcome to my portfolio website built with Next.js and Tailwind CSS.
        </p>
      </section>

      <About />
      <Projects />
      <Contact />
    </main>
  );
}
