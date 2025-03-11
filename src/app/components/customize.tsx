"use client"
import React, { useState, useEffect } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { MessageSquare, Settings, Code } from "lucide-react";

const Customize = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Auto-rotate through steps for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === totalSteps ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Describe Your Needs",
      description: "Tell us about your business requirements and what you want your AI agent to accomplish.",
      icon: <MessageSquare className="w-12 h-12 text-agentia-blue" />,
    },
    {
      title: "Choose Capabilities",
      description: "Select the specific features and capabilities you want your AI agent to have.",
      icon: <Settings className="w-12 h-12 text-agentia-purple" />,
    },
    {
      title: "Integration & Deploy",
      description: "Our experts will build and deploy your custom AI agent to your systems.",
      icon: <Code className="w-12 h-12 text-agentia-blue-light" />,
    },
  ];

  return (
    <section className="py-24 bg-grid" id="customize">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <div className="inline-block glass-card px-4 py-2 rounded-full mb-4">
              <span className="text-xs font-medium text-gradient-blue-purple">
                Custom AI Solutions
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Create Your Perfect AI Assistant
          </h2>
          <p className="text-white/70">
            Don't see exactly what you need? Our team of AI experts will build a custom AI agent tailored to your specific business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative glass-card rounded-2xl overflow-hidden p-8 h-[500px] max-h-[500px]">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-agentia-blue/10 rounded-full blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-agentia-purple/10 rounded-full blur-[50px]"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8">Create Your Custom AI Agent</h3>
              
              {/* Progress steps */}
              <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step} 
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                      step === currentStep 
                        ? "bg-gradient-to-r from-agentia-blue to-agentia-purple text-white" 
                        : step < currentStep 
                        ? "bg-agentia-blue text-white" 
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              
              {/* Current step content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center mb-6">
                  {steps[currentStep - 1].icon}
                  <h4 className="text-xl font-bold text-white ml-4">{steps[currentStep - 1].title}</h4>
                </div>
                <p className="text-white/70 mb-8">{steps[currentStep - 1].description}</p>
                
                {currentStep === 1 && (
                  <div className="flex-1 flex flex-col">
                    <textarea 
                      placeholder="Describe what you want your AI agent to do..."
                      className="flex-1 p-4 glass-card rounded-xl bg-white/5 text-white placeholder-white/40 resize-none focus:outline-none focus:ring-1 focus:ring-agentia-purple/50 mb-6"
                    ></textarea>
                    <ButtonCustom variant="primary" size="md" className="self-end">
                      Next Step
                    </ButtonCustom>
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="flex-1 flex flex-col">
                    <div className="glass-card bg-white/5 rounded-xl p-4 mb-6 flex-1 overflow-auto hide-scrollbar">
                      {["Data Analysis", "Content Generation", "Customer Service", "Sales Support", "Email Management", "Calendar Scheduling", "Research Assistant", "Social Media Management"].map((capability) => (
                        <div key={capability} className="flex items-center mb-4">
                          <input type="checkbox" id={capability} className="w-4 h-4 accent-agentia-purple mr-3" />
                          <label htmlFor={capability} className="text-white">{capability}</label>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <ButtonCustom variant="ghost" size="md">
                        Back
                      </ButtonCustom>
                      <ButtonCustom variant="primary" size="md">
                        Next Step
                      </ButtonCustom>
                    </div>
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="flex-1 flex flex-col">
                    <div className="glass-card bg-white/5 rounded-xl p-4 mb-6 flex-1">
                      <div className="text-white/70 mb-4">Select integration platforms:</div>
                      <div className="grid grid-cols-2 gap-3">
                        {["Slack", "Microsoft Teams", "Gmail", "Zapier", "Salesforce", "HubSpot"].map((platform) => (
                          <div key={platform} className="flex items-center">
                            <input type="checkbox" id={platform} className="w-4 h-4 accent-agentia-purple mr-3" />
                            <label htmlFor={platform} className="text-white">{platform}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <ButtonCustom variant="ghost" size="md">
                        Back
                      </ButtonCustom>
                      <ButtonCustom variant="primary" size="md">
                        Submit Request
                      </ButtonCustom>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-8">
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <h4 className="text-xl font-bold text-white mb-4">Expert Consultation</h4>
              <p className="text-white/70 mb-4">
                Schedule a free consultation with our AI experts to discuss your specific needs and get personalized recommendations.
              </p>
              <ButtonCustom 
                variant="secondary" 
                size="md" 
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Talk to an AI Expert
              </ButtonCustom>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h4 className="text-xl font-bold text-white mb-4">Custom Development Process</h4>
              <ul className="space-y-3 text-white/70 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-agentia-blue mr-3 flex-shrink-0 mt-0.5"></span>
                  <span>Requirements gathering and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-agentia-blue mr-3 flex-shrink-0 mt-0.5"></span>
                  <span>Solution design and architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-agentia-blue mr-3 flex-shrink-0 mt-0.5"></span>
                  <span>AI model training and fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-agentia-blue mr-3 flex-shrink-0 mt-0.5"></span>
                  <span>Integration with your existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-agentia-blue mr-3 flex-shrink-0 mt-0.5"></span>
                  <span>Testing and deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-agentia-blue mr-3 flex-shrink-0 mt-0.5"></span>
                  <span>Ongoing support and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6 bg-gradient-to-r from-agentia-blue/20 to-agentia-purple/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h4 className="text-xl font-bold text-white mb-2">Fast Turnaround Time</h4>
              <p className="text-white/70">
                Get your custom AI agent built and deployed in as little as 2 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customize;
