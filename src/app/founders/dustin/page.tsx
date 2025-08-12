import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function DustinWaltonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dustin Walton
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 mb-6">
                Co-Founder & Resource Coordinator
              </p>
              <p className="text-lg text-green-200 leading-relaxed">
                "Housing and education are the foundation of successful reentry. When people have 
                a safe place to live and opportunities to learn and grow, they can focus on 
                rebuilding their lives instead of just surviving day to day."
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://placehold.co/400x500?text=Dustin+Walton+professional+portrait+showing+dedication+to+resource+coordination+and+community+support" 
                alt="Dustin Walton professional portrait showing dedication to resource coordination, community support, and helping others access housing and education"
                className="rounded-lg shadow-2xl mx-auto max-w-sm w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-green-500 rounded-lg p-12 mx-auto max-w-sm">
                <div className="text-6xl font-bold mb-4">DW</div>
                <p className="text-lg">Dustin Walton</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Journey</h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Purpose Behind Bars</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                During my 25 years of incarceration, I discovered something that would change 
                the trajectory of my life: I had a natural ability to help people navigate 
                complex systems and find the resources they needed. Whether it was helping 
                fellow inmates access educational programs or connecting them with family 
                services, I found purpose in being a bridge between people and opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This experience taught me that information is power, and that many people 
                struggle not because resources don't exist, but because they don't know 
                how to access them or even that they exist at all.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Housing Crisis Reality</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When I was released, I experienced firsthand the housing crisis that affects 
              so many people reentering society. Despite having family support, finding 
              appropriate housing was incredibly challenging. I spent weeks calling different 
              programs, filling out applications, and trying to understand complex eligibility 
              requirements.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold text-orange-800 mb-3">Housing Challenges I Faced</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Scattered information across multiple agencies and websites</li>
                <li>Long waiting lists with unclear timelines</li>
                <li>Complex application processes with different requirements</li>
                <li>Limited options for people with criminal backgrounds</li>
                <li>Lack of transitional support between different housing levels</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education as a Pathway</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              While navigating housing challenges, I also pursued educational opportunities. 
              I enrolled in community college courses and discovered that education wasn't 
              just about gaining skills - it was about rebuilding my identity and confidence. 
              However, I also learned that the educational system can be just as confusing 
              to navigate as housing resources.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              I realized that many people give up on educational opportunities not because 
              they lack motivation, but because the process seems overwhelming. Financial aid, 
              course selection, career planning - these systems weren't designed with formerly 
              incarcerated individuals in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dustin's Perspective on Resource Navigation
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <video 
                controls 
                className="w-full h-full rounded-lg"
                poster="https://placehold.co/800x450?text=Dustin+Walton+video+testimonial+about+housing+education+and+resource+coordination"
              >
                <source src="/videos/dustin-testimonial.mp4" type="video/mp4" />
                <p className="text-gray-600 p-8 text-center">
                  Video testimonial: Dustin Walton discusses his experience navigating housing 
                  and educational systems during reentry, and his passion for helping others 
                  access these critical resources more easily.
                </p>
              </video>
            </div>
            <p className="text-gray-600 text-center italic">
              "When we remove barriers to housing and education, we're not just helping individuals - 
              we're strengthening entire communities."
            </p>
          </div>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dustin's Role at Corrections to Connections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-blue-700">Housing Resource Database</CardTitle>
                <CardDescription>Maintaining comprehensive housing information</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dustin oversees our housing resource database, ensuring that information 
                  is current, accurate, and accessible. He personally vets housing programs 
                  and maintains relationships with providers across Washington State.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-green-700">Educational Partnerships</CardTitle>
                <CardDescription>Connecting people with learning opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  He works directly with community colleges, vocational schools, and training 
                  programs to create pathways for formerly incarcerated individuals, including 
                  specialized support services and financial aid guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="text-purple-700">Individual Navigation Support</CardTitle>
                <CardDescription>One-on-one assistance with applications and processes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dustin provides personalized support to help individuals navigate complex 
                  application processes, understand eligibility requirements, and develop 
                  step-by-step plans for accessing housing and educational resources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-orange-700">System Advocacy</CardTitle>
                <CardDescription>Working to improve resource accessibility</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  He advocates with service providers and policymakers to make systems more 
                  accessible and responsive to the needs of people reentering society, 
                  helping to reduce barriers and improve processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Impact Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-green-700">Housing Success</CardTitle>
                <CardDescription>From homelessness to stability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Working with Dustin, I was able to navigate the transitional housing system 
                  and eventually secure permanent housing. He helped me understand the process 
                  and advocated for me when I faced barriers."
                </p>
                <p className="text-sm text-gray-500 italic">- Maria, Program Participant</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-blue-700">Educational Achievement</CardTitle>
                <CardDescription>Returning to school after 15 years</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "I thought college was impossible for someone like me. Dustin showed me the 
                  programs available and helped me through the financial aid process. I'm now 
                  in my second year studying social work."
                </p>
                <p className="text-sm text-gray-500 italic">- James, Community College Student</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Housing or Educational Support?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Dustin and our team are here to help you navigate the resources available 
            and create a plan that works for your situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
              <Link href="/housing">Explore Housing Resources</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Link href="/education">Educational Opportunities</Link>
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-8">
            <Link href="/founders/chad" className="text-green-200 hover:text-white underline">
              ← Chad's Story
            </Link>
            <Link href="/founders/christopher" className="text-green-200 hover:text-white underline">
              Christopher's Story →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
