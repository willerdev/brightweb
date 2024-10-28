import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const team = [
    {
      name: "John Smith",
      role: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Training",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Brown",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
            alt="About BFTC"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">About BFTC</h1>
            <p className="text-xl">Building futures through excellence in vocational training</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, BFTC has been at the forefront of vocational training, providing quality education and practical skills to thousands of students. Our commitment to excellence and industry-relevant training has made us a trusted name in vocational education.
              </p>
              <p className="text-gray-700">
                We pride ourselves on our state-of-the-art facilities, experienced instructors, and comprehensive curriculum that prepares students for successful careers in their chosen fields.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="BFTC History"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
                  alt="Training Kitchen"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">Training Kitchen</h3>
                </div>
              </div>
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
                  alt="Hair Salon"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">Hair Salon</h3>
                </div>
              </div>
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc"
                  alt="Auto Workshop"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">Auto Workshop</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}