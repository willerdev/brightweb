import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ChefHat, Scissors, Ruler, Wrench, Flame } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66",
    title: "Learn Culinary Arts",
    description: "Master the art of cooking with professional chefs"
  },
  {
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    title: "Hairdressing Excellence",
    description: "Transform careers in beauty and styling"
  },
  {
    image: "https://images.unsplash.com/photo-1503479200011-4f16cf4d67b8",
    title: "Auto Mechanics Training",
    description: "Hands-on experience in automotive repair"
  }
];

const services = [
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: "Culinary Arts",
    description: "Professional cooking and baking training",
    duration: "12 months",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d"
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Hairdressing",
    description: "Complete hair styling and beauty courses",
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Tailoring",
    description: "Fashion design and garment making",
    duration: "9 months",
    image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px]">
        <Carousel className="h-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-[600px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white space-y-4 max-w-3xl px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                    <p className="text-xl md:text-2xl">{slide.description}</p>
                    <Button asChild size="lg" className="mt-4">
                      <Link href="/apply">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                    <Button variant="outline" asChild>
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt="Student"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah K.</h4>
                    <p className="text-sm text-gray-600">Culinary Arts Graduate</p>
                  </div>
                </div>
                <p className="text-gray-700">"The hands-on training at BFTC was invaluable. I now run my own successful catering business thanks to the skills I learned here."</p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                      alt="Student"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">John M.</h4>
                    <p className="text-sm text-gray-600">Auto Mechanics Graduate</p>
                  </div>
                </div>
                <p className="text-gray-700">"The practical experience and industry connections I gained at BFTC helped me secure a position at a leading auto service center."</p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                      alt="Student"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emma R.</h4>
                    <p className="text-sm text-gray-600">Hairdressing Graduate</p>
                  </div>
                </div>
                <p className="text-gray-700">"BFTC provided me with both technical skills and business knowledge. I'm now successfully managing my own salon."</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BFTC</h3>
              <p className="text-gray-400">Empowering futures through practical skills training.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/apply" className="text-gray-400 hover:text-white">Apply Now</Link></li>
                <li><Link href="/book" className="text-gray-400 hover:text-white">Book Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white">Culinary Arts</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Hairdressing</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Tailoring</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Motor Mechanics</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Welding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +250 783 515 042</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> bidamaje@gmail.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Kimironko KG 40 St 11</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BFTC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
