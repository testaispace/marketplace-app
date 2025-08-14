import Link from 'next/link'
import { MapPin, Star, Clock, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connect Services &amp; Talent
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find local services and digital freelancers in one marketplace.
              From home repairs to graphic design, book with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consumer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Find Services
              </Link>
              <Link
                href="/provider"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Marketplace?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring together the best of local and digital services with trust and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local &amp; Digital</h3>
              <p className="text-muted-foreground">
                Book local services like cleaning, repairs, and beauty treatments, or hire digital freelancers.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Reviews</h3>
              <p className="text-muted-foreground">
                All providers are rated by real customers. See ratings, reviews, and portfolios before booking.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Booking</h3>
              <p className="text-muted-foreground">
                Book services instantly or request quotes. Track your bookings and communicate directly with providers.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
              <p className="text-muted-foreground">
                Your payment is protected. Money is held securely until service is completed to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Popular Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From everyday tasks to specialized skills, find the right service for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Home Services',
                items: ['Cleaning', 'Plumbing', 'Electrical', 'Carpentry'],
                color: 'bg-blue-500'
              },
              {
                title: 'Beauty &amp; Wellness',
                items: ['Massage Therapy', 'Hair Styling', 'Makeup', 'Fitness Training'],
                color: 'bg-pink-500'
              },
              {
                title: 'Digital Services',
                items: ['Graphic Design', 'Web Development', 'Content Writing', 'SEO'],
                color: 'bg-purple-500'
              },
              {
                title: 'Event Services',
                items: ['Photography', 'Catering', 'DJ Services', 'Event Planning'],
                color: 'bg-green-500'
              },
              {
                title: 'Business Services',
                items: ['Accounting', 'Legal Advice', 'Marketing', 'Consulting'],
                color: 'bg-orange-500'
              },
              {
                title: 'Learning &amp; Tutoring',
                items: ['Language Lessons', 'Music Lessons', 'Academic Tutoring', 'Skill Training'],
                color: 'bg-indigo-500'
              }
            ].map((category, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold">{category.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers and skilled providers on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consumer"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Book a Service
            </Link>
            <Link
              href="/provider"
              className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Earning Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
