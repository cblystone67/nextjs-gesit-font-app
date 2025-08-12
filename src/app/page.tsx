import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Building Bridges Back to 
                <span className="text-blue-200"> Community</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Supporting individuals reentering society after incarceration with resources for 
                housing, education, recovery meetings, and meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                  <Link href="/housing">Find Housing</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Inspirational+bridge+connecting+communities+with+hope+and+transformation" 
                alt="Inspirational bridge connecting communities, symbolizing hope, transformation, and the journey from incarceration to community reintegration"
                className="rounded-lg shadow-2xl w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-blue-500 rounded-lg p-8 text-center">
                <p className="text-lg">Building Bridges to Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by individuals with collective 70+ years of prison experience, 
              now dedicated to transforming lives and building stronger communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">70+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Years of Experience</div>
              <div className="text-gray-600">Collective prison experience transformed into community service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Housing Resources</div>
              <div className="text-gray-600">Transitional housing, halfway houses, and long-term options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Recovery Meetings</div>
              <div className="text-gray-600">AA and NA meetings across Washington State</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three individuals who transformed their lives and are now dedicated to helping others 
              build successful bridges back to community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="https://placehold.co/300x300?text=Chad+Walton+professional+portrait+showing+transformation+and+leadership" 
                  alt="Chad Walton professional portrait showing transformation and leadership in community reentry support"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-32 h-32 rounded-full mx-auto mb-4 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">CW</span>
                </div>
                <CardTitle className="text-xl">Chad Walton</CardTitle>
                <CardDescription>Co-Founder & Community Advocate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Chad's journey from incarceration to community leadership demonstrates the power of 
                  transformation and second chances.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/founders/chad">Read Chad's Story</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="https://placehold.co/300x300?text=Dustin+Walton+professional+portrait+showing+dedication+to+community+service" 
                  alt="Dustin Walton professional portrait showing dedication to community service and reentry support"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-32 h-32 rounded-full mx-auto mb-4 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">DW</span>
                </div>
                <CardTitle className="text-xl">Dustin Walton</CardTitle>
                <CardDescription>Co-Founder & Resource Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dustin specializes in connecting individuals with housing and educational resources, 
                  drawing from his own reentry experience.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/founders/dustin">Read Dustin's Story</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="https://placehold.co/300x300?text=Christopher+Blystone+professional+portrait+showing+commitment+to+recovery+support" 
                  alt="Christopher Blystone professional portrait showing commitment to recovery support and community building"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-32 h-32 rounded-full mx-auto mb-4 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">CB</span>
                </div>
                <CardTitle className="text-xl">Christopher Blystone</CardTitle>
                <CardDescription>Co-Founder & Recovery Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Christopher focuses on recovery meeting coordination and building supportive 
                  community networks for sustainable reentry.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/founders/christopher">Read Christopher's Story</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Resources */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Essential Resources
            </h2>
            <p className="text-xl text-gray-600">
              Quick access to the support you need for successful reentry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Housing Support</CardTitle>
                <CardDescription>Find transitional housing, halfway houses, and long-term options</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Searchable database of housing resources across Washington State with application guidance.
                </p>
                <Button asChild className="w-full">
                  <Link href="/housing">Explore Housing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Recovery Meetings</CardTitle>
                <CardDescription>AA and NA meetings with locations and schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive directory of recovery meetings with search by location and time.
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/meetings">Find Meetings</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700">Education & Training</CardTitle>
                <CardDescription>College programs, vocational training, and skill development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Educational opportunities and vocational training programs to build your future.
                </p>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Build Your Bridge?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every journey starts with a single step. Let us help you take yours with confidence and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/housing">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="/donations">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
