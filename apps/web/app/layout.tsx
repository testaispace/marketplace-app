import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marketplace - Connect Services & Talent',
  description: 'A full-featured marketplace platform connecting consumers with local service providers and digital freelancers.',
  keywords: 'marketplace, services, freelance, local services, digital services, booking, providers, consumers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <nav className="border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <h1 className="text-xl font-bold text-primary">Marketplace</h1>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
                      <a href="/consumer" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Find Services</a>
                      <a href="/provider" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Become Provider</a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-border mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Marketplace</h3>
                  <p className="text-muted-foreground text-sm">Connecting services and talent worldwide.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-4">For Consumers</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground">Browse Services</a></li>
                    <li><a href="#" className="hover:text-foreground">Book Appointments</a></li>
                    <li><a href="#" className="hover:text-foreground">Reviews & Ratings</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">For Providers</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground">Join Marketplace</a></li>
                    <li><a href="#" className="hover:text-foreground">Manage Services</a></li>
                    <li><a href="#" className="hover:text-foreground">Payment & Analytics</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Support</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                    <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                    <li><a href="#" className="hover:text-foreground">Terms & Privacy</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                  © 2025 Marketplace. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
