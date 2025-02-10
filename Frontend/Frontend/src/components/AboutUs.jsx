import React from "react";
import { Users, MapPin, Target, Star, Plane, Github, Linkedin } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="relative h-96 bg-blue-600 text-white flex items-center justify-center overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Travel background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 hover:scale-105"
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl font-bold mb-6 transform transition-all duration-700 hover:-translate-y-1">
                        Discover. Explore. Experience.
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        At Travel Scout, we believe that travel is more than just visiting places—it's about discovering experiences that resonate with who you are.
                    </p>
                </div>
            </div>

            {/* Why We Exist Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="transform transition-all duration-500 hover:scale-105">
                        <img 
                            src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                            alt="Travel planning" 
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Why We Exist</h2>
                        <p className="text-gray-600">
                            With countless destinations to choose from, planning a trip can be overwhelming. We know the struggle of searching through endless lists, comparing locations, and still wondering, "Is this really the right place for me?"
                        </p>
                        <p className="text-gray-600">
                            That's why we built Travel Scout—to simplify your travel decisions and inspire your next journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* What Makes Us Different Section */}
            <div className="bg-blue-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Target, title: "Personalized Recommendations", desc: "Our platform learns what you love and tailors destination ideas just for you." },
                            { icon: Star, title: "Smart Travel Insights", desc: "From hidden gems to trending hotspots, we provide curated details." },
                            { icon: Plane, title: "Seamless Planning", desc: "Explore destinations, compare options, and start planning—all in one place." },
                            { icon: Users, title: "Travel Community", desc: "Connect with fellow explorers and share your experiences." }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                                <h3 className="font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    We're on a mission to turn travel planning into an exciting journey of discovery. Our vision is to empower travelers with personalized recommendations, making every trip as unique and memorable as they are.
                </p>
                <div className="bg-blue-600 text-white py-8 px-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Find your perfect destination. Explore the world. Make unforgettable memories.</h3>
                    <p className="text-xl">Let's start your journey today! 🚀</p>
                </div>
            </div>

            {/* Contributors Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Tarun Rathore",
                                github: "https://github.com/taruncodex",
                                linkedin: "https://www.linkedin.com/in/tarun-rathore-50113921a/"
                            },
                            {
                                name: "Abhishek Joshi",
                                github: "https://github.com/abhishekjoshi1998",
                                linkedin: "https://www.linkedin.com/in/abhishekj1998"
                            },
                            {
                                name: "Biman Gharai",
                                github: "https://github.com/Biman72144",
                                linkedin: "https://www.linkedin.com/in/biman-gharai/"
                            },
                            {
                                name: "Abhishek Nalawade",
                                github: "https://github.com/AbhiNalawade09",
                                linkedin: "https://www.linkedin.com/in/abhishek-nalawade-4a919b199/"
                            }
                        ].map((contributor, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <img 
                                    src="data:image/jpeg;base64,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" 
                                    alt={contributor.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 transition-transform duration-300 hover:scale-110"
                                />
                                <h3 className="font-bold mb-4">{contributor.name}</h3>
                                <div className="flex justify-center space-x-4">
                                    <a 
                                        href={contributor.github} 
                                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a 
                                        href={contributor.linkedin} 
                                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;