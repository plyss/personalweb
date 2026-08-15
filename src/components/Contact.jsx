import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  MessageSquare,
  AlertCircle,
  X,
} from "lucide-react";

// Brand icons
const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // Controls modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Triggers when user clicks "Send Message" button
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  // Triggers when user clicks "Yes, Send" in the modal
  const confirmAndSend = async () => {
    setShowConfirm(false);
    setSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/mfaisalalam13@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Contact from ${formData.name}: ${formData.subject}`,
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Oops! There was a network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 accent-badge mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a project that needs quality assurance or want to discuss
            testing strategies? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 sm:p-8">
              <form onSubmit={handleFormSubmit} className="space-y-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="input-field"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or question..."
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center disabled:opacity-50"
                  id="contact-submit"
                >
                  {submitted ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-pass-300"
                      >
                        ✓
                      </motion.span>
                      Message Sent!
                    </>
                  ) : submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Location */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-accent-50 dark:bg-accent-900/20">
                  <MapPin className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                </div>
                <h4 className="font-semibold">Location</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 ml-12">
                Jakarta, Indonesia
              </p>
            </div>

            {/* Email */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-pass-50 dark:bg-pass-900/20">
                  <Mail className="w-5 h-5 text-pass-600 dark:text-pass-400" />
                </div>
                <h4 className="font-semibold">Email</h4>
              </div>
              <a
                href="mailto:mfaisalalam13@gmail.com"
                className="text-sm text-accent-600 dark:text-accent-400 hover:underline ml-12"
              >
                mfaisalalam13@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/mochfaisalam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                  id="social-linkedin"
                >
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-accent-50 dark:group-hover:bg-accent-900/20 transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl max-w-md w-full border border-slate-200 dark:border-slate-800 relative"
            >
              <button
                onClick={() => setShowConfirm(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Confirm Submission
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Are you sure you want to send this message? Please double-check your details before submitting.
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmAndSend}
                  className="px-4 py-2 text-sm font-medium text-white bg-accent-600 hover:bg-accent-700 rounded-lg shadow-sm transition-colors flex items-center gap-2"
                >
                  Yes, Send
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}