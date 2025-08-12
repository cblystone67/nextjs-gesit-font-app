import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Corrections to Connections
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Building bridges back to community. Supporting individuals reentering society 
              after incarceration with resources for housing, education, recovery meetings, 
              and meaningful connections.
            </p>
            <p className="text-gray-400 text-sm">
              Founded by individuals with 70+ years of collective prison experience, 
              now dedicated to community service and transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/housing" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Housing Support
                </Link>
              </li>
              <li>
                <Link href="/meetings" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Recovery Meetings
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Educational Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/donations" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <a href="mailto:info@correctionstoconnections.org" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Corrections to Connections. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm italic">
              "Every person deserves a second chance and the support to build a meaningful life."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
