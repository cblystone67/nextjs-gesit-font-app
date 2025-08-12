import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function ChadWaltonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Chad Walton
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-6">
                Co-Founder & Community Advocate
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                "Every person deserves a second chance and the support to build a meaningful life. 
                My journey from incarceration to community leadership taught me that transformation 
                is possible when we have the right resources and people who believe in us."
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://placehold.co/400x500?text=Chad+Walton+professional+portrait+showing+confidence+leadership+and+transformation" 
                alt="Chad Walton professional portrait showing confidence, leadership, and personal transformation from incarceration to community advocacy"
                className="rounded-lg shadow-2xl mx-auto max-w-sm w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-blue-500 rounded-lg p-12 mx-auto max-w-sm">
                <div className="text-6xl font-bold mb-4">CW</div>
                <p className="text-lg">Chad Walton</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Early Years</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My path to incarceration wasn't unique - it was a combination of poor choices, 
                lack of support systems, and circumstances that spiraled beyond my control. 
                I spent over 20 years in the Washington State prison system, watching time 
                pass and wondering if I would ever have the chance to make things right.
              </p>
              <p className="text-gray-700 leading-relaxed">
                During those years, I witnessed countless individuals cycle in and out of the 
                system. I saw the same faces return again and again, and I began to understand 
                that the problem wasn't just about punishment - it was about the lack of real 
                support for people trying to rebuild their lives.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Turning Point</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My transformation began when I started participating in prison programs focused on 
              personal development and community service. I discovered that I had skills and 
              experiences that could help others. More importantly, I learned that my past didn't 
              have to define my future.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold text-blue-800 mb-3">Key Realizations</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Everyone deserves a second chance, regardless of their past</li>
                <li>Transformation is possible with the right support and mindset</li>
                <li>Community connections are essential for successful reentry</li>
                <li>Sharing our stories can inspire and help others</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reentry Challenges</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When I was released, I faced the same challenges that millions of others encounter: 
              finding housing, securing employment, rebuilding relationships, and navigating a 
              world that had changed significantly during my incarceration. The process was 
              overwhelming and often discouraging.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              I was fortunate to have some support, but I quickly realized how many people were 
              falling through the cracks. Resources were scattered, information was hard to find, 
              and there was little coordination between different support services. This experience 
              planted the seed for what would eventually become Corrections to Connections.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Chad's Story in His Own Words
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <video 
                controls 
                className="w-full h-full rounded-lg"
                poster="https://placehold.co/800x450?text=Chad+Walton+video+testimonial+about+transformation+and+community+building"
              >
                <source src="/videos/chad-testimonial.mp4" type="video/mp4" />
                <p className="text-gray-600 p-8 text-center">
                  Video testimonial: Chad Walton shares his personal journey from incarceration to 
                  community leadership, discussing the challenges of reentry and his vision for 
                  supporting others in their transformation.
                </p>
              </video>
            </div>
            <p className="text-gray-600 text-center italic">
              "The most important thing I learned is that we all have the power to change our story. 
              It's never too late to become the person you were meant to be."
            </p>
          </div>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Chad's Role at Corrections to Connections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-blue-700">Community Outreach</CardTitle>
                <CardDescription>Building bridges with local organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chad works directly with community organizations, government agencies, and 
                  service providers to expand our network of resources and ensure we're 
                  connecting people with the most current and effective support services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-green-700">Mentorship Programs</CardTitle>
                <CardDescription>One-on-one support for individuals in reentry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Drawing from his own experience, Chad provides direct mentorship to individuals 
                  navigating reentry challenges, offering practical guidance and emotional support 
                  during this critical transition period.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="text-purple-700">Public Speaking</CardTitle>
                <CardDescription>Sharing his story to inspire change</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chad regularly speaks at conferences, community events, and educational 
                  institutions, sharing his story to reduce stigma and advocate for 
                  criminal justice reform and reentry support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-orange-700">Strategic Planning</CardTitle>
                <CardDescription>Guiding organizational growth and impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As a co-founder, Chad helps shape the strategic direction of Corrections to 
                  Connections, ensuring our programs and services effectively meet the evolving 
                  needs of the reentry community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Inspired by Chad's Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Learn more about our other founders and how you can support our mission 
            of building bridges back to community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/founders/dustin">Meet Dustin Walton</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              <Link href="/donations">Support Our Work</Link>
            </Button>
          </div>
          
          <div className="mt-8">
            <Link href="/about" className="text-blue-200 hover:text-white underline">
              ← Back to Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
