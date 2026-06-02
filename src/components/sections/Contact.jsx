import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'av6821246@gmail.com', href: 'mailto:av6821246@gmail.com', copyable: true },
  { icon: FiPhone, label: 'Phone', value: '+91 7052501218', href: 'tel:+917052501218', copyable: true },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/arpit-verma-687b3b332', href: 'https://linkedin.com/in/arpit-verma-687b3b332', copyable: false },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Arpit1825', href: 'https://github.com/Arpit1825', copyable: false },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [copied, setCopied] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setStatus("sending");

    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    if (response.ok) {
      setStatus("sent");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      setStatus("error");
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    setStatus("error");
  }
};

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="orb w-80 h-80 -left-20 bottom-0" style={{ background: 'rgba(79,142,255,0.06)' }} />
      <div className="orb w-64 h-64 right-0 top-1/3" style={{ background: 'rgba(168,85,247,0.06)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">Get In Touch</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Open to internships, collaborations, and interesting projects. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="card mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(79,142,255,0.08), rgba(168,85,247,0.08))', border: '1px solid rgba(79,142,255,0.15)' }}>
              <div className="text-2xl mb-3">👋</div>
              <h3 className="font-bold text-white mb-2">Arpit Verma</h3>
              <p className="text-text-secondary text-sm">
                Currently a CS (AI & ML) student at PSIT, Kanpur. Always excited to discuss new ideas and opportunities.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </div>

            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="card flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(79,142,255,0.1)', border: '1px solid rgba(79,142,255,0.15)' }}>
                  <info.icon size={15} className="text-accent-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-text-muted text-[10px] font-mono">{info.label}</div>
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-sm text-white truncate block hover:text-accent-blue transition-colors">
                    {info.value}
                  </a>
                </div>
                {info.copyable && (
                  <button
                    onClick={() => copyToClipboard(info.value, info.label)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    {copied === info.label ? <FiCheck size={12} className="text-green-400" /> : <FiCopy size={12} className="text-text-secondary" />}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card space-y-5"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="font-bold text-white text-lg">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Arpit Verma' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'arpit@example.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="text-text-secondary text-xs font-mono block mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-text-muted outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(79,142,255,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-text-secondary text-xs font-mono block mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Project Collaboration"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-text-muted outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(79,142,255,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <div>
                <label className="text-text-secondary text-xs font-mono block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Arpit, I'd love to discuss..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-text-muted outline-none transition-all resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(79,142,255,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary w-full justify-center"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <><FiCheck /> Message Sent!</>
                ) : status === 'error' ? (
                  'Error – Try Again'
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>

              {status === 'sent' && (
                <p className="text-green-400 text-sm text-center font-mono">
                  ✓ Thanks! I'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
