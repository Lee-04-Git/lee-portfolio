
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const contactInfo = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@leemaalgraaff',
      link: 'https://github.com/Lee-04-Git'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Lee Maalgraaff',
      link: 'https://www.linkedin.com/in/lee-maalgraaff-72432b2a8/'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'maalgraafflee25@gmail.com',
      link: 'mailto:maalgraafflee25@gmail.com'
    }
  ];

  const handleFormSuccess = () => {
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-3xl font-bold mb-4 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities, especially ambitious or large scale projects. 
                But if you have other requests or questions, don't hesitate to use the form.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass glass-hover rounded-lg group transition-all duration-300"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="p-6 glass rounded-lg border border-green-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-400">Available for Work</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <ContactForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass rounded-2xl p-8 max-w-md mx-4 animate-bounce-in">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Contact;
