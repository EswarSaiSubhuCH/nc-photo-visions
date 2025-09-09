import React, { useState } from "react";
import { ArrowLeft, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import cameraImage from "../../assets/samples/camera-gear.jpg";
const CameraGear = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const cameras = [{
    id: 1,
    src: "<a href="https://ibb.co/wr6xXtK3"><img src="https://i.ibb.co/jZ412tLB/Sony-R3.jpg" alt="Sony-R3" border="0"></a>",
    name: "Sony Alpha ILCE-7RM3A",
    description: "An entirely renewed image processing system further enhances image quality. Up to approximately 2x improved AF speed15, AF tracking7, and Eye AF tracking7Â performance and up to 10fps continuous shooting allow more decisive moments to be captured. Reliable pro-style operability packed within a strong, compact body provides superior flexibility and mobility",
    specifications: ["42.4 megapixels with Exmor R CMOS sensor", "4K Video Recording in XAVC S Format", "5-axis Image Stabilisation to minimize camera shakes", "Fast Hybrid Autofocus", "Continuous Burst Shooting at up to 10fps", "Dynamic Range of up to 15 Stops", "NP-FZ100 Battery for long duration shooting"],
  }, {
    id: 2,
    src: cameraImage,
    name: " --- ",
    description: "High-performance full-frame camera optimized for speed and low-light performance",
    specifications: ["24.2MP Full Frame", "6K Video Oversampling", "40fps Electronic Shutter", "Advanced Subject Detection"],
  }, {
    id: 3,
    src: cameraImage,
    name: " ---- ",
    description: "Ultra-high resolution camera with exceptional detail and dynamic range",
    specifications: ["61MP Full Frame", "8K 24p Video", "693-point AF System", "8-stop Image Stabilization"],
  }, {
    id: 4,
    src: cameraImage,
    name: " ----- ",
    description: "Flagship mirrorless camera combining speed, resolution, and video capabilities",
    specifications: ["45.7MP Stacked Sensor", "8K 30p Internal", "493-point AF System", "120fps Continuous Shooting"],
  }];
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/gear" className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Gear</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Camera Equipment</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional camera bodies that form the foundation of our photography equipment. 
            From full-frame mirrorless to specialized cameras for every shooting scenario.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{cameras.length} Items</span>
            </div>
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cameras.map(camera => <div key={camera.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer" onClick={() => setSelectedItem(camera.id)}>
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <img src={camera.src} alt={camera.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-playfair font-semibold text-xl">{camera.name}</h3>
                
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {camera.description}
              </p>
              <div className="space-y-2 mb-4">
                {camera.specifications.map((spec, index) => <div key={index} className="flex items-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-accent"></div>
                    <span className="text-xs text-muted-foreground">{spec}</span>
                  </div>)}
              </div>
              
            </div>)}
        </div>

        
      </div>
    </div>;
};
export default CameraGear;