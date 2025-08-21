'use client';

export default function FooterSection() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-gray-600">
          <a 
            href="https://netnode.ch/de/datenschutz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            Datenschutz
          </a>
          <span className="mx-3 text-gray-400">|</span>
          <a 
            href="https://netnode.ch/de/impressum" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}