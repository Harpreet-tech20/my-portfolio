import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto p-8 mb-12">
      <h2 className="text-3xl font-semibold mb-3">Projects</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Portfolio Website:</strong> A personal site built using Next.js and Tailwind CSS.
        </li>
        <li>
          <strong>MERN Stack E-commerce:</strong> An online shopping app demonstrating full-stack development.
        </li>
        <li>
          <strong>Lab Assignments:</strong> Various projects and labs completed in CPAN 212 course.
        </li>
      </ul>
    </section>
  );
}
