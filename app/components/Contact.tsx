import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-8 mb-12">
      <h2 className="text-3xl font-semibold mb-3">Contact</h2>
      <p>
        Email:{" "}
        <a
          href="mailto:harpreetkaurharpreetkaur360@gmail.com"
          className="text-blue-600 underline"
        >
          harpreetkaurharpreetkaur360@gmail.com
        </a>
      </p>

      <div className="mt-4">
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </p>
      </div>
    </section>
  );
}
