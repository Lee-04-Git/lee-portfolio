
import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      onSuccess();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Send a Message
        </h3>
      </div>

      {/* Name Field */}
      <div className="space-y-2">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-secondary/50 border rounded-lg px-4 py-3 text-foreground placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
              errors.name ? 'border-red-500' : 'border-border focus:border-primary'
            }`}
            placeholder="Your Name"
            required
          />
          <label
            htmlFor="name"
            className="absolute left-4 -top-2.5 bg-background px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
          >
            Your Name
          </label>
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm animate-fade-in-up">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-secondary/50 border rounded-lg px-4 py-3 text-foreground placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
              errors.email ? 'border-red-500' : 'border-border focus:border-primary'
            }`}
            placeholder="your.email@example.com"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 -top-2.5 bg-background px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
          >
            Email Address
          </label>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm animate-fade-in-up">{errors.email}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full bg-secondary/50 border rounded-lg px-4 py-3 text-foreground placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 ${
              errors.message ? 'border-red-500' : 'border-border focus:border-primary'
            }`}
            placeholder="Tell me about your project..."
            required
          />
          <label
            htmlFor="message"
            className="absolute left-4 -top-2.5 bg-background px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
          >
            Your Message
          </label>
        </div>
        {errors.message && (
          <p className="text-red-500 text-sm animate-fade-in-up">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full btn-primary flex items-center justify-center space-x-2 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
        } transition-all duration-300`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-sm text-muted-foreground text-center">
        I'll get back to you within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;
