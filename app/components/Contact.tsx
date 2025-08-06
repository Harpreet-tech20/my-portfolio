import React from "react";

export default function Contact() {
  return (
    <section>
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
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/harpreetkaurharpreetkaur360"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          linkedin.com/in/harpreetkaurharpreetkaur360
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/Harpreet-tech20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          github.com/Harpreet-tech20
        </a>
      </p>
    </section>
  );
}
