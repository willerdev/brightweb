import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChefHat, Scissors, Ruler, Wrench, Flame } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Culinary Arts",
      description: "Master the art of cooking with our comprehensive culinary program. Learn from experienced chefs and gain hands-on experience in our state-of-the-art kitchen.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
      duration: "12 months",
      features: [
        "Professional kitchen techniques",
        "Menu planning and development",
        "Food safety and hygiene",
        "International cuisine"
      ]
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Hairdressing",
      description: "Develop your skills in cutting, styling, and hair treatment techniques. Our program covers both traditional and modern hairdressing methods.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
      duration: "9 months",
      features: [
        "Cutting and styling techniques",
        "Color theory and application",
        "Hair treatments",
        "Salon management"
      ]
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Tailoring",
      description: "Learn the art of garment making from pattern drafting to final construction. Master both hand and machine sewing techniques.",
      image: "https://images.unsplash.com/photo-1520973199355-e6e936b33024",
      duration: "6 months",
      features: [
        "Pattern making",
        "Garment construction",
        "Fabric selection",
        "Fashion design basics"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Motor Vehicle Mechanics",
      description: "Comprehensive training in vehicle maintenance and repair. Learn to diagnose and fix various automotive issues.",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
      duration: "15 months",
      features: [
        "Engine diagnostics",
        "Electrical systems",
        "Brake systems",
        "Vehicle maintenance"
      ]
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Welding",
      description: "Master various welding techniques and become a certified welder. Learn to work with different materials and welding equipment.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
      duration: "8 months",
      features: [
        "Arc welding",
        "MIG and TIG welding",
        "Safety procedures",
        "Metal fabrication"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
            alt="BFTC Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">Comprehensive training programs to launch your career</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Program Features:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-600">Duration: {service.duration}</p>
                    <Button asChild>
                      <Link href="/apply">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}