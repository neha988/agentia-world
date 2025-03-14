import ButtonCustom from './ui/button-custsection';
import { MessageCircle, Sparkles, Cpu, Zap, Bot, Code } from 'lucide-react';

const CustomizeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-agentia-dark to-black" id="customize">
      <div className="absolute inset-0 dots-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-agentia-dark to-black p-1 rounded-xl">
              <div className="bg-gradient-to-br from-agentia-dark to-gray-900 p-6 rounded-lg">
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agentia-teal-light to-agentia-green-light flex items-center justify-center mr-4">
                      <Bot size={20} className="text-black" />
                    </div>
                    <div className="text-lg font-medium text-white">AI Assistant</div>
                  </div>
                  <div className="mt-4 ml-14 p-3 bg-agentia-card rounded-lg">
                    <p className="text-white/80 text-sm">
                      Hello! I&apos;m here to help you customize your perfect AI agent. What type of business problem are you trying to solve?
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-end">
                    <div className="text-lg font-medium mr-4 text-white ">You</div>
                    <div className="w-10 h-10 rounded-full bg-agentia-teal flex items-center justify-center">
                      <MessageCircle size={20} className="text-agentia-dark" />
                    </div>
                  </div>
                  <div className="mt-4 mr-14 p-3 bg-agentia-card rounded-lg">
                    <p className="text-white/80 text-sm">
                      I need an AI that can help analyze customer feedback data and generate insights for product improvements.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agentia-teal-light to-agentia-green-light flex items-center justify-center mr-4">
                      <Bot size={20} className="text-black" />
                    </div>
                    <div className="text-lg font-medium text-white">AI Assistant</div>
                  </div>
                  <div className="mt-4 ml-14 p-3 bg-agentia-card rounded-lg">
                    <p className="text-white/80 text-sm">
                      I recommend a Data Analysis AI with natural language processing capabilities to extract sentiment and key themes from customer feedback. Would you like to see some options?
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <ButtonCustom variant="primary" size="sm" icon={<Sparkles size={16} />}>
                    See Recommendations
                  </ButtonCustom>
                  <ButtonCustom variant="glass" size="sm" icon={<MessageCircle size={16} />}>
                    Continue Chatting
                  </ButtonCustom>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-agentia-teal-light/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-agentia-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
          <div className="inline-block glass-card px-4 py-2 rounded-full animate-fade-in mb-4">
          <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-agentia-teal-light to-agentia-green-light">
          AI Agent Customization
          </span>
        </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white text-shadow">
              Design Your <span className="text-gradient-teal-green">Perfect AI Agent</span>
            </h2>
            <p className="text-white/70 mb-8">
              Don&apos;t see exactly what you need in our marketplace? Create a custom AI agent tailored to your specific business requirements through our interactive process.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex p-4 glass-panel rounded-lg">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agentia-teal-light to-agentia-green-light flex items-center justify-center">
                    <Cpu size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-white">AI Consultation</h3>
                  <p className="text-sm text-white/70">Get expert advice on the best AI solution for your needs</p>
                </div>
              </div>
              
              <div className="flex p-4 glass-panel rounded-lg">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agentia-teal-light to-agentia-green-light flex items-center justify-center">
                    <Code size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-white">Custom Development</h3>
                  <p className="text-sm text-white/70">Tailored AI solutions built to your specifications</p>
                </div>
              </div>
              
              <div className="flex p-4 glass-panel rounded-lg">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agentia-teal-light to-agentia-green-light flex items-center justify-center">
                    <Zap size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-white">Quick Deployment</h3>
                  <p className="text-sm text-white/70">Get your custom AI up and running in days, not months</p>
                </div>
              </div>
              
              <div className="flex p-4 glass-panel rounded-lg">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agentia-teal-light to-agentia-green-light flex items-center justify-center">
                    <Bot size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-white">Continuous Learning</h3>
                  <p className="text-sm text-white/70">AI that improves with your business data over time</p>
                </div>
              </div>
            </div>
            
            <ButtonCustom  variant="primary" size="lg" glowEffect icon={<MessageCircle size={18}  />}>
              Talk to an AI Expert
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
