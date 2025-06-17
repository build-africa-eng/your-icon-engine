// src/pages/About.tsx
import React from 'react';

export const About = () => {
  return (
    <div className="bg-dark-gray text-light-gray min-h-screen p-12 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-custom-teal">About Utility Icon Engine</h1>

        <p className="text-gray-300 mb-4">
          The Utility Icon Engine v2 is a plugin-ready system that maps utility-like strings
          (such as Tailwind classes, Docker service names, or custom semantic labels)
          to meaningful icons from multiple icon libraries.
        </p>

        <h2 className="text-2xl text-custom-purple mt-8 mb-3 font-semibold">Supported Icon Libraries</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>🎨 Lucide Icons (<code>lucide-react</code>)</li>
          <li>🧩 Tabler Icons (<code>@tabler/icons-react</code>)</li>
          <li>📦 Heroicons Outline (<code>@heroicons/react</code>)</li>
        </ul>

        <h2 className="text-2xl text-custom-purple mt-8 mb-3 font-semibold">Usage</h2>
        <p className="text-gray-300">
          Just feed the engine utility-like strings — for example, <code className="bg-medium-gray px-1">bg-blue-500</code>,
          <code className="ml-2 bg-medium-gray px-1">docker-mysql-db</code>, or
          <code className="ml-2 bg-medium-gray px-1">alert-danger</code> — and it will resolve the most appropriate icon using the
          available matching rules and adapters.
        </p>

        <h2 className="text-2xl text-custom-purple mt-8 mb-3 font-semibold">Contributing</h2>
        <p className="text-gray-300">
          You can contribute by adding new icon match rules, improving fallback logic,
          or suggesting new icon libraries. The system is fully extensible.
        </p>

        <footer className="mt-12 text-sm text-gray-500 border-t border-gray-700 pt-4">
          Built with ❤️ by the Utility African Future(Nyigoro).
        </footer>
      </div>
    </div>
  );
};