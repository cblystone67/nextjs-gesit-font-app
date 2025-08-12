import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100">
            From incarceration to transformation - building bridges back to community
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It All Began</h2>
            
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Corrections to Connections was born from a simple yet powerful realization: the gap between 
                incarceration and successful community reentry was far too wide, and too many people were 
                falling through the cracks.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our three founders - Chad Walton, Dustin Walton, and Christopher Blystone - collectively 
                experienced over 70 years of incarceration. But more importantly, they experienced the 
                challenges, barriers, and often overwhelming process of trying to rebuild their lives 
                upon release.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Gap We Identified</h3>
            <p className="text-gray-700 mb-6">
              During their own reentry journeys, our founders encountered numerous obstacles:
            </p>
            
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Limited and scattered information about housing resources</li>
              <li>Difficulty finding recovery meetings that fit their schedules and locations</li>
              <li>Complex educational and vocational training application processes</li>
              <li>Lack of peer support from others who truly understood their experience</li>
              <li>Overwhelming bureaucracy with little guidance on where to start</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              We envisioned a centralized resource where individuals reentering society could find 
              comprehensive, up-to-date information about:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-700">Housing Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From emergency shelter to transitional housing to long-term stability
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Recovery Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    AA and NA meetings with detailed schedules and accessibility information
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-700">Educational Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    College programs, vocational training, and skill development resources
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-700">Community Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Building meaningful relationships and support networks
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Mission Statement</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To provide comprehensive, accessible resources and support for individuals reentering 
                society after incarceration, helping them build successful bridges back to community 
                through housing assistance, recovery support, educational opportunities, and meaningful connections.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-blue-600 mr-2">•</span>
                  <span><strong>Second Chances:</strong> Everyone deserves the opportunity to rebuild and transform their life</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-blue-600 mr-2">•</span>
                  <span><strong>Dignity & Respect:</strong> Treating every individual with compassion and understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-blue-600 mr-2">•</span>
                  <span><strong>Community:</strong> Building bridges that connect rather than walls that divide</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-blue-600 mr-2">•</span>
                  <span><strong>Empowerment:</strong> Providing tools and resources for self-sufficiency</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://placehold.co/500x400?text=Community+support+group+showing+diverse+individuals+building+connections+and+hope" 
                alt="Community support group showing diverse individuals building connections, sharing hope, and supporting each other in reentry journey"
                className="rounded-lg shadow-lg w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-blue-100 rounded-lg p-8 text-center">
                <p className="text-blue-700 font-semibold">Building Community Connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters - Statistics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The statistics tell a story of both challenge and opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">68%</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">National Recidivism Rate</div>
              <div className="text-gray-600 text-sm">Within 3 years of release</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">27%</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Unemployment Rate</div>
              <div className="text-gray-600 text-sm">For formerly incarcerated individuals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">13%</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Recidivism Reduction</div>
              <div className="text-gray-600 text-sm">With proper support programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.3M</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">People Incarcerated</div>
              <div className="text-gray-600 text-sm">In the United States</div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
              The Power of Community Support
            </h3>
            <p className="text-lg text-green-700 text-center leading-relaxed">
              Research consistently shows that individuals with strong community support, stable housing, 
              and access to recovery resources have significantly lower recidivism rates and higher 
              success in rebuilding their lives. This is why our work matters.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Have questions? Need support? Want to get involved? We're here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@correctionstoconnections.org</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-blue-100">Seattle, Washington</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              <Link href="/donations">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
