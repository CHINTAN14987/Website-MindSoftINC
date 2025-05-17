import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, Workflow, Code, Sparkles, Server, GitBranch, Zap, ChevronRight } from 'lucide-react';
import "../../Style/AiSOl.css"

const AIServicesPage = () => {
  const [activeTab, setActiveTab] = useState('fine-tuning');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideIn = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  };

  return (
    <div className="ai-services-container">
      <div className="hero-section-01">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="badge">INNOVATIVE AI SOLUTIONS</div>
          <h1>Artificial Intelligence <span className="highlight">Services</span></h1>
          <p>Transform your business with cutting-edge AI solutions built by experts who understand both technology and your business needs.</p>
          
          <motion.div className="hero-cta">
            <motion.button 
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="neural-network">
            <motion.div 
              className="center-node"
              animate={pulseAnimation}
            >
              <Brain size={40} />
            </motion.div>
            <div className="nodes">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="node"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            <div className="connections">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="connection"
                  style={{ 
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: 'center'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            className="code-snippet"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="code-header">
              <div className="code-dot red"></div>
              <div className="code-dot yellow"></div>
              <div className="code-dot green"></div>
              <span>model_training.py</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
                  <span className="purple">import</span> <span className="blue">tensorflow</span> <span className="purple">as</span> <span className="blue">tf</span>
                  <br/>
                  <span className="purple">from</span> <span className="blue">transformers</span> <span className="purple">import</span> <span className="blue">AutoModelForCausalLM</span>
                  <br/><br/>
                  <span className="green"># Initialize fine-tuning process</span>
                  <br/>
                  <span className="blue">model</span> = <span className="blue">AutoModelForCausalLM</span>.from_pretrained(<span className="orange">"acaa/ai-model"</span>)
                  <br/>
                  <span className="blue">trainer</span> = <span className="blue">Trainer</span>(
                  <br/>
                  &nbsp;&nbsp;<span className="blue">model</span>=<span className="blue">model</span>,
                  <br/>
                  &nbsp;&nbsp;<span className="blue">args</span>=<span className="blue">TrainingArguments</span>(<span className="orange">"output"</span>),
                  <br/>
                  &nbsp;&nbsp;<span className="blue">train_dataset</span>=<span className="blue">dataset</span>
                  <br/>
                  )
                  <br/><br/>
                  <span className="blue">trainer</span>.<span className="yellow">train</span>()
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn}>Our AI Development <span className="highlight">Expertise</span></motion.h2>
        <motion.p variants={fadeIn} className="section-subtitle">
          We leverage the latest AI technologies to build custom solutions that deliver real business value
        </motion.p>

        <div className="service-tabs">
          <motion.div className="tab-buttons">
            <motion.button 
              className={activeTab === 'fine-tuning' ? 'active' : ''} 
              onClick={() => setActiveTab('fine-tuning')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideIn}
            >
              <GitBranch size={20} />
              <span>Model Fine-Tuning</span>
            </motion.button>
            
            <motion.button 
              className={activeTab === 'chatbots' ? 'active' : ''} 
              onClick={() => setActiveTab('chatbots')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideIn}
            >
              <MessageSquare size={20} />
              <span>Intelligent Chatbots</span>
            </motion.button>
            
            <motion.button 
              className={activeTab === 'workflows' ? 'active' : ''} 
              onClick={() => setActiveTab('workflows')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideIn}
            >
              <Workflow size={20} />
              <span>AI Workflows</span>
            </motion.button>
          </motion.div>

          <div className="tab-content">
            {activeTab === 'fine-tuning' && (
              <motion.div 
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="content">
                  <h3>Custom AI Model Fine-Tuning</h3>
                  <p>We specialize in adapting state-of-the-art language models to your specific business domain, ensuring you get AI that speaks your industry's language.</p>
                  
                  <ul className="feature-list">
                    <motion.li variants={slideIn}>
                      <Sparkles size={18} />
                      <span>Domain-specific model customization</span>
                    </motion.li>
                    <motion.li variants={slideIn}>
                      <Server size={18} />
                      <span>Efficient training with minimal data requirements</span>
                    </motion.li>
                    <motion.li variants={slideIn}>
                      <Zap size={18} />
                      <span>Performance optimization for production environments</span>
                    </motion.li>
                  </ul>
                  
                  <motion.div 
                    className="info-box"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4>Our Fine-Tuning Process</h4>
                    <ol>
                      <li>Initial model selection based on your requirements</li>
                      <li>Data preparation and cleaning for optimal results</li>
                      <li>Hyperparameter optimization for your specific use case</li>
                      <li>Comprehensive evaluation and iterative improvement</li>
                      <li>Deployment and integration support</li>
                    </ol>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="visual"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="model-training-visual">
                    <div className="model-base">
                      <div className="model-label">Base Model</div>
                      <div className="model-icon"><Code size={24} /></div>
                    </div>
                    <motion.div 
                      className="model-arrow"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronRight size={30} />
                    </motion.div>
                    <div className="model-custom">
                      <div className="model-label">Your Custom AI</div>
                      <div className="model-icon"><Brain size={24} /></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'chatbots' && (
              <motion.div 
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="content">
                  <h3>Intelligent Conversational Agents</h3>
                  <p>We develop sophisticated AI chatbots that go beyond basic Q&A to deliver personalized, context-aware conversations that enhance customer experience and drive business outcomes.</p>
                  
                  <ul className="feature-list">
                    <motion.li variants={slideIn}>
                      <MessageSquare size={18} />
                      <span>Natural language understanding and generation</span>
                    </motion.li>
                    <motion.li variants={slideIn}>
                      <Server size={18} />
                      <span>Multi-channel deployment (web, mobile, messaging platforms)</span>
                    </motion.li>
                    <motion.li variants={slideIn}>
                      <Zap size={18} />
                      <span>Integration with existing business systems</span>
                    </motion.li>
                  </ul>
                  
                  <motion.div 
                    className="info-box"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4>Chatbot Capabilities</h4>
                    <ul>
                      <li>24/7 customer support automation</li>
                      <li>Product recommendations and personalized assistance</li>
                      <li>Complex workflow handling with human handoff</li>
                      <li>Multilingual support</li>
                      <li>Voice interface compatibility</li>
                    </ul>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="visual"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="chatbot-visual">
                    <div className="chat-window">
                      <div className="chat-header">
                        <div className="chat-title">Your AI Assistant</div>
                      </div>
                      <div className="chat-messages">
                        <div className="message bot">
                          <div className="message-bubble">How can I help you today?</div>
                        </div>
                        <div className="message user">
                          <div className="message-bubble">I need information about your AI services</div>
                        </div>
                        <motion.div 
                          className="message bot"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="message-bubble">
                            We offer custom AI solutions including model fine-tuning, chatbot development, and AI workflow automation. Would you like more details on any specific service?
                          </div>
                        </motion.div>
                      </div>
                      <div className="chat-input">
                        <input type="text" placeholder="Type your message..." />
                        <button><MessageSquare size={18} /></button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'workflows' && (
              <motion.div 
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="content">
                  <h3>AI-Powered Workflow Automation</h3>
                  <p>We build intelligent workflows that combine multiple AI capabilities to automate complex business processes, freeing your team to focus on high-value tasks.</p>
                  
                  <ul className="feature-list">
                    <motion.li variants={slideIn}>
                      <Workflow size={18} />
                      <span>End-to-end process automation</span>
                    </motion.li>
                    <motion.li variants={slideIn}>
                      <Server size={18} />
                      <span>Intelligent decision-making at each step</span>
                    </motion.li>
                    <motion.li variants={slideIn}>
                      <Zap size={18} />
                      <span>Continuous learning and improvement</span>
                    </motion.li>
                  </ul>
                  
                  <motion.div 
                    className="info-box"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4>Common Workflow Applications</h4>
                    <ul>
                      <li>Document processing and data extraction</li>
                      <li>Content generation and moderation</li>
                      <li>Predictive maintenance and anomaly detection</li>
                      <li>Customer journey orchestration</li>
                      <li>Intelligent resource allocation</li>
                    </ul>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="visual"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="workflow-visual">
                    <div className="workflow-nodes">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="workflow-node"
                          animate={{ 
                            boxShadow: [
                              '0 0 0px rgba(80, 130, 255, 0.5)',
                              '0 0 15px rgba(80, 130, 255, 0.8)',
                              '0 0 0px rgba(80, 130, 255, 0.5)'
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                        >
                          {i === 0 && <div className="node-icon"><Server size={20} /></div>}
                          {i === 1 && <div className="node-icon"><Brain size={20} /></div>}
                          {i === 2 && <div className="node-icon"><Code size={20} /></div>}
                          {i === 3 && <div className="node-icon"><MessageSquare size={20} /></div>}
                          {i === 4 && <div className="node-icon"><Sparkles size={20} /></div>}
                          <div className="node-connector"></div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div 
                      className="workflow-data"
                      animate={{ 
                        x: [0, 280, 280], 
                        y: [0, 0, 0],
                        scale: [1, 1, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        times: [0, 0.8, 1]
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="tech-stack-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn}>Our AI <span className="highlight">Technology Stack</span></motion.h2>
        <motion.p variants={fadeIn} className="section-subtitle">
          We leverage cutting-edge frameworks and tools to build robust AI solutions
        </motion.p>

        <motion.div 
          className="tech-grid"
          variants={staggerContainer}
        >
          {[
            { name: 'TensorFlow', icon: '🧠' },
            { name: 'PyTorch', icon: '🔥' },
            { name: 'Hugging Face', icon: '🤗' },
            { name: 'OpenAI API', icon: '🤖' },
            { name: 'LangChain', icon: '⛓️' },
            { name: 'NVIDIA CUDA', icon: '⚡' },
            { name: 'MLflow', icon: '📊' },
            { name: 'Kubernetes', icon: '☸️' }
          ].map((tech, index) => (
            <motion.div 
              key={index} 
              className="tech-item"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="process-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn}>Our Development <span className="highlight">Process</span></motion.h2>
        <motion.p variants={fadeIn} className="section-subtitle">
          We follow a structured approach to deliver AI solutions that exceed expectations
        </motion.p>

        <motion.div 
          className="process-steps"
          variants={staggerContainer}
        >
          {[
            { 
              step: 1, 
              title: 'Discovery', 
              desc: 'We understand your business needs and define clear objectives for your AI solution.' 
            },
            { 
              step: 2, 
              title: 'Design', 
              desc: 'We architect the right solution leveraging the most appropriate AI technologies.' 
            },
            { 
              step: 3, 
              title: 'Development', 
              desc: 'Our expert developers build your custom AI solution with clean, maintainable code.' 
            },
            { 
              step: 4, 
              title: 'Training', 
              desc: 'We train and fine-tune models on your data to ensure optimal performance.' 
            },
            { 
              step: 5, 
              title: 'Deployment', 
              desc: 'We deploy your solution to production with proper monitoring and scalability.' 
            },
            { 
              step: 6, 
              title: 'Continuous Improvement', 
              desc: 'We monitor performance and continuously refine your AI solutions over time.' 
            }
          ].map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step"
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
            >
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>Ready to Transform Your Business with AI?</h2>
        <p>Let's discuss how our AI expertise can drive innovation and growth for your organization</p>
        <motion.button 
          className="primary-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Consultation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AIServicesPage;