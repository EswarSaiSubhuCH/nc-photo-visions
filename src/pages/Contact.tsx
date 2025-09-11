import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours. Thank you for choosing NC Photography & Aerials!"
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        service: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    { icon: MapPin, title: "Studio Location", details: ["123 Photography Lane", "Creative District", "Photo City, PC 12345"] },
    { icon: Phone, title: "Phone Numbers", details: ["Main: +1 (555) 123-4567", "Mobile: +1 (555) 987-6543", "Emergency: +1 (555) 456-7890"] },
    { icon: Mail, title: "Email Addresses", details: ["info@ncphotography.com", "bookings@ncphotography.com", "support@ncphotography.com"] },
    { icon: Clock, title: "Business Hours", details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM", "Sunday: By Appointment Only"] }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to capture your special moments? Get in touch with our team to discuss your photography needs. 
            We're here to bring your vision to life with professional excellence.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Get In Touch */}
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:flex lg:justify-end lg:items-start mt-12 lg:mt-0">
            <div className="bg-accent/5 rounded-2xl p-8 w-full lg:w-80">
              <h3 className="text-xl font-playfair font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a href="tel:+15551234567" className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                  <Phone size={20} className="text-accent" />
                  <div>
                    <p className="font-medium">Call Now</p>
                    <p className="text-sm text-muted-foreground">Speak directly with our team</p>
                  </div>
                </a>

                <a href="mailto:info@ncphotography.com" className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                  <Mail size={20} className="text-accent" />
                  <div>
                    <p className="font-medium">Send Email</p>
                    <p className="text-sm text-muted-foreground">Get a detailed response</p>
                  </div>
                </a>

                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                  <MessageSquare size={20} className="text-accent" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Quick messaging support</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;