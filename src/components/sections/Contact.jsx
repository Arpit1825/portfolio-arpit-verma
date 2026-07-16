import { useState, useRef } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import { personalInfo } from '../../data';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, copyable: true },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`, copyable: true },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Linkedin.com/in/arpit-verma-dev', href: personalInfo.linkedin, copyable: false },
  { icon: FiGithub, label: 'GitHub', value: 'Github.com/Arpit1825', href: personalInfo.github, copyable: false },
];

export default function Contact() {
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
        "https://portfolio-arpit-verma.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
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
        console.error(data);
      }
    } catch (error) {
      console.error(error);
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
    <section id="contact" className="py-24 relative border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs font-semibold tracking-wider text-accent uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-primary">
            Connect With Me
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto mt-2">
            Always open to discussing software builds, ML opportunities, or project collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-card bg-surface">
              <span className="text-xl mb-3 block">👋</span>
              <h3 className="text-base font-bold font-heading text-text-primary mb-1">
                Arpit Verma
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Let's discuss standard web integrations, YOLO deployments, or algorithmic optimizations.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for internships
              </div>
            </div>

            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="border-card bg-surface flex items-center justify-between p-4"
                style={{ padding: '16px' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border border-border flex items-center justify-center text-accent">
                    <info.icon size={14} />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-text-secondary uppercase tracking-wider">
                      {info.label}
                    </div>
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-xs text-text-primary hover:text-accent font-medium transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>

                {info.copyable && (
                  <button
                    onClick={() => copyToClipboard(info.value, info.label)}
                    className="p-1.5 rounded border border-border hover:border-accent text-text-secondary hover:text-accent transition-colors"
                    aria-label={`Copy ${info.label}`}
                  >
                    {copied === info.label ? (
                      <FiCheck size={12} className="text-emerald-500" />
                    ) : (
                      <FiCopy size={12} />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="border-card bg-surface space-y-5">
              <h3 className="text-lg font-bold font-heading text-text-primary border-b border-border pb-3 mb-2">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-text-secondary text-[10px] font-mono uppercase tracking-wider block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Arpit Verma"
                    required
                    className="w-full px-3 py-2.5 rounded border border-border bg-bg text-text-primary text-xs outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-text-secondary text-[10px] font-mono uppercase tracking-wider block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="arpit@example.com"
                    required
                    className="w-full px-3 py-2.5 rounded border border-border bg-bg text-text-primary text-xs outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-text-secondary text-[10px] font-mono uppercase tracking-wider block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship / Core Project Discussion"
                  required
                  className="w-full px-3 py-2.5 rounded border border-border bg-bg text-text-primary text-xs outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="text-text-secondary text-[10px] font-mono uppercase tracking-wider block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello Arpit, I'd like to collaborate..."
                  rows={5}
                  required
                  className="w-full px-3 py-2.5 rounded border border-border bg-bg text-text-primary text-xs outline-none resize-none focus:border-accent transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary w-full justify-center text-xs"
                style={{ padding: '10px 16px' }}
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Telemetry...
                  </span>
                ) : status === 'sent' ? (
                  <span className="flex items-center gap-1.5">
                    <FiCheck /> Telemetry Sent Successfully!
                  </span>
                ) : status === 'error' ? (
                  'System Error. Retrying...'
                ) : (
                  <span className="flex items-center gap-1.5">
                    <FiSend /> Send Message
                  </span>
                )}
              </button>

              {status === 'sent' && (
                <p className="text-emerald-500 text-[10px] font-mono text-center mt-2">
                  ✓ Dispatch complete. I will respond to your message shortly.
                </p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
