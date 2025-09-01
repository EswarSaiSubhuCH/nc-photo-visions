import React from "react";
import { Camera, Award, Users, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: "1",
      name: "Nick Carter",
      role: "Founder & Lead Photographer",
      bio: "With over 10 years of experience in professional photography, Nick specializes in aerial photography and portrait sessions. His artistic vision and technical expertise have earned recognition from industry professionals.",
      specialties: ["Aerial Photography", "Portrait Photography", "Commercial Work"],
      experience: "10+ years"
    },
    {
      id: "2",
      name: "Sarah Mitchell",
      role: "Senior Photographer",
      bio: "Sarah brings a creative eye and passion for storytelling to every shoot. Specializing in wedding photography and event coverage, she captures authentic moments with artistic flair.",
      specialties: ["Wedding Photography", "Event Coverage", "Family Portraits"],
      experience: "7+ years"
    },
    {
      id: "3",
      name: "Mike Johnson",
      role: "Drone Operations Specialist",
      bio: "Mike is our certified drone pilot with expertise in aerial videography and complex flight operations. He ensures safe and stunning aerial captures for all our projects.",
      specialties: ["Drone Operations", "Aerial Videography", "Technical Planning"],
      experience: "5+ years"
    },
    {
      id: "4",
      name: "Emma Davis",
      role: "Post-Production Manager",
      bio: "Emma's expertise in post-production and digital artistry brings our images to life. She ensures every photo meets our high standards of quality and artistic vision.",
      specialties: ["Photo Editing", "Color Grading", "Digital Artistry"],
      experience: "6+ years"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Professional Excellence Awards",
      description: "Recognized by the National Photography Association for outstanding aerial photography"
    },
    {
      icon: Camera,
      title: "1000+ Successful Projects",
      description: "Completed over 1000 photography projects with 100% client satisfaction"
    },
    {
      icon: Users,
      title: "Certified Team",
      description: "All team members are certified professionals with specialized training and expertise"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">About NC Photography & Aerials</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of professional photographers dedicated to capturing life's most precious moments 
            from every angle. Our expertise spans from intimate portraits to breathtaking aerial perspectives.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2014, NC Photography & Aerials began as a passion project by Nick Carter, 
                who saw the untapped potential of combining traditional photography with emerging drone technology.
              </p>
              <p>
                What started as weekend aerial photography sessions has grown into a full-service photography studio 
                serving clients across the region. We've captured everything from intimate family moments to 
                large-scale commercial projects, always with the same commitment to excellence.
              </p>
              <p>
                Today, our team combines years of experience with cutting-edge technology to deliver 
                stunning visual content that tells your unique story. Whether it's a wedding, corporate event, 
                or architectural project, we approach each assignment with creativity and professionalism.
              </p>
            </div>
          </div>

        </div>


        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team of photographers and specialists bring creativity, 
              technical expertise, and passion to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Camera size={32} className="text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-playfair font-semibold">{member.name}</h3>
                        <p className="text-accent font-medium">{member.role}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {member.experience}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold mb-4">Get In Touch</h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              Ready to work with our team? We'd love to hear about your project and discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                <MapPin size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Visit Our Studio</h3>
              <p className="opacity-90 text-sm">
                123 Photography Lane<br />
                Creative District<br />
                Photo City, PC 12345
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                <Phone size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="opacity-90 text-sm">
                +1 (555) 123-4567<br />
                Available 9 AM - 6 PM<br />
                Monday - Saturday
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                <Mail size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="opacity-90 text-sm">
                info@ncphotography.com<br />
                bookings@ncphotography.com<br />
                We respond within 24 hours
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;