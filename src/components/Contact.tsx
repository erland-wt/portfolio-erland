"use client";

import { motion } from "framer-motion";
import backgroundWhite from "../../public/images/background.jpg";

type IconProps = React.SVGProps<SVGSVGElement>;

const IconBase: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  />
);

const MailIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="4 6 12 12 20 6" />
  </IconBase>
);

const UserIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 19c1.2-2.4 3.5-4 7-4s5.8 1.6 7 4" />
  </IconBase>
);

const MessageIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M4 6h16v9a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2Z" />
  </IconBase>
);

const SendIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </IconBase>
);

const GithubIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.1a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.5a5.1 5.1 0 0 0-1.4-3.6 4.7 4.7 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C5.7 1.3 4.6 1.6 4.6 1.6a4.7 4.7 0 0 0-.1 3.6A5.1 5.1 0 0 0 3 8.2c0 5 3.1 6.2 6.1 6.5A3.4 3.4 0 0 0 8.2 17V20" />
  </IconBase>
);

const LinkedinIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <rect x="3" y="8" width="4" height="12" rx="1" />
    <circle cx="5" cy="4.5" r="2" />
    <path d="M11 11h3v2.2A3.2 3.2 0 0 1 19 10a3 3 0 0 1 3 3.2V20h-4v-6a1 1 0 0 0-2 0v6h-5Z" />
  </IconBase>
);

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundWhite.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-white/80" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold text-blue-900/80 tracking-wide uppercase">
            Contact
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
            Get in touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-blue-900/80 max-w-xl mx-auto">
            Let&apos;s talk about your ideas, projects, or collaboration. I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          {/* Left: Form */}
          <motion.div
            className="rounded-2xl bg-white/95 shadow-lg border border-blue-100 px-5 py-6 sm:px-7 sm:py-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-5 flex items-center gap-2">
              <MailIcon className="w-5 h-5 text-blue-900" />
              Send me a message
            </h3>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                <input
                    type="hidden"
                    name="access_key"
                    value="25a0c78f-7fe6-44a4-8229-dba17aa061fb"
                />

                <input
                    type="hidden"
                    name="subject"
                    value="New message from portfolio contact form"
                />

                <input
                    type="hidden"
                    name="to"
                    value="ewidyatamaka@gmail.com"
                />

              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.05 }}
            >
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-950"
                >
                  <UserIcon className="w-4 h-4 text-blue-800" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-blue-100 bg-white/80 px-3.5 py-2.5 text-sm text-blue-950 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-950"
                >
                  <MailIcon className="w-4 h-4 text-blue-800" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-blue-100 bg-white/80 px-3.5 py-2.5 text-sm text-blue-950 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="you@example.com"
                />
              </motion.div>

              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-950"
                >
                  <MessageIcon className="w-4 h-4 text-blue-800" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-blue-100 bg-white/80 px-3.5 py-2.5 text-sm text-blue-950 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                  placeholder="Tell me a bit about your project or question..."
                />
              </motion.div>

              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <SendIcon className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            className="rounded-2xl bg-blue-950 text-blue-50 px-5 py-6 sm:px-7 sm:py-8 shadow-lg border border-blue-900/60"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Contact information
            </h3>
            <p className="text-sm text-blue-100/90 mb-6">
              Prefer email or social media? You can also reach me through the channels below.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 mt-0.5 text-cyan-300" />
                <div>
                  <p className="font-medium text-blue-50">Email</p>
                  <a
                    href="mailto:ewidyatamaka@gmail.com"
                    className="text-blue-100 hover:text-cyan-200 transition underline underline-offset-2"
                  >
                    ewidyatamaka@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-800/60 mt-4">
                <p className="text-xs uppercase tracking-wide text-blue-200 mb-3">
                  Follow me
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/erland-widyatamaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-blue-50 border border-blue-700/70 hover:bg-white/10 transition"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/erland-wt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-blue-50 border border-blue-700/70 hover:bg-white/10 transition"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}