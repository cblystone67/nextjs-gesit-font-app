import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function ChristopherBlystonePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Christopher Blystone
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mb-6">
                Co-Founder & Recovery Specialist
              </p>
              <p className="text-lg text-purple-200 leading-relaxed">
                "Recovery isn't just about stopping destructive behaviors - it's about building 
                a new life filled with purpose, connection, and hope. The meetings and community 
                we create become the foundation for lasting transformation."
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://placehold.co/400x500?text=Christopher+Blystone+professional+portrait+showing+commitment+to+recovery+and+community+building" 
                alt="Christopher Blystone professional portrait showing commitment to recovery support, community building, and helping others find hope in their journey"
                className="rounded-lg shadow-2xl mx-auto max-w-sm w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-purple-500 rounded-lg p-12 mx-auto max-w-sm">
                <div className="text-6xl font-bold mb-4">CB</div>
                <p className="text-lg">Christopher Blystone</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Struggle with Addiction</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My path to incarceration was deeply intertwined with addiction. For years, 
                substance abuse controlled my life, leading to poor decisions that ultimately 
                resulted in over 20 years behind bars. During my early years in prison, 
                I continued to struggle with the underlying issues that had brought me there.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It wasn't until I hit what felt like rock bottom - even within the confines 
                of prison - that I realized I had a choice: continue down the same destructive 
                path, or find a way to heal and transform my life.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Recovery Behind Bars</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My recovery journey began when I started attending AA meetings in prison. 
              At first, I was skeptical - I had tried to quit using substances before 
              and failed. But something was different this time. The community I found 
              in those meetings provided something I had been missing: genuine connection 
              and accountability.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold text-blue-800 mb-3">What Recovery Taught Me</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Recovery is a daily choice, not a one-time decision</li>
                <li>Community support is essential for lasting change</li>
                <li>Helping others strengthens your own recovery</li>
                <li>Honesty and vulnerability create real connections</li>
                <li>Everyone's recovery journey is unique but we share common struggles</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Becoming a Bridge for Others</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As my own recovery strengthened, I began sponsoring other inmates and helping 
              facilitate meetings. I discovered that sharing my experience and supporting 
              others in their recovery not only helped them - it was crucial to my own 
              continued growth and healing.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              When I was released, I was determined to continue this work in the community. 
              However, I quickly learned that finding recovery meetings and building 
              supportive networks on the outside presented its own unique challenges, 
              especially for people with criminal backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Christopher's Recovery Philosophy
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <video 
                controls 
                className="w-full h-full rounded-lg"
                poster="https://placehold.co/800x450?text=Christopher+Blystone+video+testimonial+about+recovery+community+and+hope"
              >
                <source src="/videos/christopher-testimonial.mp4" type="video/mp4" />
                <p className="text-gray-600 p-8 text-center">
                  Video testimonial: Christopher Blystone shares his recovery journey, 
                  the importance of community support in maintaining sobriety, and his 
                  vision for creating accessible recovery resources for everyone.
                </p>
              </video>
            </div>
            <p className="text-gray-600 text-center italic">
              "Recovery isn't a destination - it's a journey we take together. When we support 
              each other, we all become stronger."
            </p>
          </div>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Christopher's Role at Corrections to Connections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-blue-700">Meeting Directory Management</CardTitle>
                <CardDescription>Comprehensive AA and NA meeting database</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Christopher maintains our extensive database of AA and NA meetings across 
                  Washington State, ensuring accurate times, locations, and accessibility 
                  information. He personally visits meetings to verify details and assess 
                  their welcoming nature for people in reentry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-green-700">Recovery Mentorship</CardTitle>
                <CardDescription>Supporting individuals in early recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  He provides direct mentorship and sponsorship to individuals in early 
                  recovery, offering guidance based on his own experience and helping 
                  people navigate the challenges of maintaining sobriety while rebuilding 
                  their lives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="text-purple-700">Community Building</CardTitle>
                <CardDescription>Creating supportive recovery networks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Christopher works to build bridges between different recovery communities, 
                  organizing events and initiatives that bring people together and create 
                  lasting supportive relationships beyond formal meeting structures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-orange-700">Advocacy & Education</CardTitle>
                <CardDescription>Reducing stigma around addiction and recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  He advocates for better understanding of addiction as a health issue 
                  rather than a moral failing, working with community organizations and 
                  healthcare providers to improve access to recovery resources and reduce 
                  barriers for people seeking help.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery Resources */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recovery Resources Christopher Helps Coordinate
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-purple-700">AA Meetings</CardTitle>
                <CardDescription>Alcoholics Anonymous support groups</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Open and closed meetings</li>
                  <li>• Big Book study groups</li>
                  <li>• Step study meetings</li>
                  <li>• Speaker meetings</li>
                  <li>• Online and in-person options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-blue-700">NA Meetings</CardTitle>
                <CardDescription>Narcotics Anonymous support groups</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Basic text meetings</li>
                  <li>• Topic discussion groups</li>
                  <li>• Step working meetings</li>
                  <li>• Newcomer-focused meetings</li>
                  <li>• Literature study groups</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-green-700">Specialized Support</CardTitle>
                <CardDescription>Additional recovery resources</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Reentry-specific meetings</li>
                  <li>• Trauma-informed support groups</li>
                  <li>• Family recovery programs</li>
                  <li>• Dual diagnosis support</li>
                  <li>• Peer recovery coaching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recovery Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-700">Two Years Sober</CardTitle>
                <CardDescription>Finding community in recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Christopher helped me find my first meeting after release. I was scared 
                  and didn't know if I'd be accepted. He introduced me to people who became 
                  my recovery family. Today I have two years clean and I'm helping others 
                  just like he helped me."
                </p>
                <p className="text-sm text-gray-500 italic">- Sarah, Recovery Community Member</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-700">Rebuilding Relationships</CardTitle>
                <CardDescription>Recovery beyond sobriety</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Through the recovery community Christopher connected me with, I learned 
                  how to rebuild trust with my family. Recovery gave me back my relationships 
                  and my self-respect. I'm now sponsoring others and giving back."
                </p>
                <p className="text-sm text-gray-500 italic">- Michael, AA Member</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Christopher and our recovery community are here to support you every step 
            of the way. Recovery is possible, and you don't have to do it alone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              <Link href="/meetings">Find Recovery Meetings</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              <Link href="/contact">Get Support</Link>
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-8">
            <Link href="/founders/dustin" className="text-purple-200 hover:text-white underline">
              ← Dustin's Story
            </Link>
            <Link href="/about" className="text-purple-200 hover:text-white underline">
              Our Mission →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
