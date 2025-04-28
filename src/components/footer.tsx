export default function Footer() {
  // You can get this from your environment variables or build process
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <footer className="mt-24 border-t border-gray-100 w-full">
      <div className="py-12">
        <div className="flex flex-col space-y-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 ml-4 text-[13px]">
            <div className="space-y-1 text-gray-600">
              <p>University of California, Davis</p>
              <p>One Shields Avenue, Davis, CA 95616</p>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a 
                href="/contact" 
                className="hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <a 
                href="/faq" 
                className="hover:text-gray-900 transition-colors"
              >
                FAQ
              </a>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* Build Info */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 text-[11px] ml-4 text-gray-400">
            <span>Last updated: {lastUpdated}</span>
            <div className="flex items-center gap-1">
              <span>Built by</span>
              <a 
                href="https://mohnishgopi.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Mohnish Gopi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 