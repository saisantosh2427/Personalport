'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronDown, Download, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { experiences, interests, links, profile, projects, roles, skillGroups } from '@/lib/content';
import { trackEvent } from '@/lib/analytics';

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>;
}

function Pill({ children }: { children: React.ReactNode }) { return <span className="pill">{children}</span>; }

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === 'submitting') return;

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      website: formData.website.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setStatusMessage('Please complete all fields.');
      return;
    }

    if (payload.website) {
      setStatus('error');
      setStatusMessage('Unable to send your message. Please try again.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
          website: payload.website,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus('error');
        setStatusMessage(result.error || 'Unable to send your message. Please try again or email me directly.');
        return;
      }

      setFormData({ name: '', email: '', message: '', website: '' });
      setStatus('success');
      setStatusMessage('Message sent successfully.');
    } catch {
      setStatus('error');
      setStatusMessage('Unable to send your message. Please try again or email me directly.');
    }
  };
  const nav = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

  return <main>
    <header className="nav-wrap"><nav className="nav container" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Sai Santosh home"><strong>Sai</strong><span className="wordmark-last">Santosh</span></a>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>{nav.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</div>
      <div className="nav-actions"><a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's LinkedIn profile" onClick={() => trackEvent('linkedin_click')}><Linkedin size={17} /></a><a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's GitHub profile" onClick={() => trackEvent('github_click')}><Github size={17} /></a><a className="resume-link" href={links.resume} download={profile.resumeFileName} aria-label="Download Sai Santosh's resume" onClick={() => trackEvent('resume_download')}>Resume <Download size={15} /></a></div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </nav></header>

    <section id="top" className="hero container">
      <div className="hero-grid"><div className="hero-copy">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="eyebrow"><span className="status-dot" /> Open to opportunities</motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>Systems that<br /><em>learn</em> and last.</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="hero-title">AI/ML Engineer <span>|</span> Machine Learning Engineer <span>|</span> Generative AI</motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="hero-description">Building scalable, production-ready Machine Learning and Generative AI solutions that turn complex data into intelligent business applications.</motion.p>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-cta"><a className="button button-dark" href="#projects">View my projects <ArrowUpRight size={16} /></a><a className="button button-outline" href={links.resume} download={profile.resumeFileName} aria-label="Download Sai Santosh's resume" onClick={() => trackEvent('resume_download')}>Download resume <Download size={16} /></a></motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-social">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's LinkedIn profile" onClick={() => trackEvent('linkedin_click')}><Linkedin size={16} /></a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's GitHub profile" onClick={() => trackEvent('github_click')}><Github size={16} /></a>
          <a href={links.email} aria-label="Email Sai Santosh" onClick={() => trackEvent('email_click')}><Mail size={16} /></a>
        </motion.div>
        <p className="hero-meta">5+ years in <strong>Machine Learning</strong> / Generative AI / LLMs / MLOps / AWS / Python</p>
      </div><div className="hero-art" aria-label="Abstract network diagram representing machine learning systems" role="img"><div className="art-label">APPLIED AI<br /><span>01 / 04</span></div><div className="network"><i /><i /><i /><i /><i /><i /><b /><b /><b /><b /></div><div className="art-caption">from signal<br />to system</div></div></div>
      <div className="hero-bottom"><span>Currently pursuing</span><strong>Doctor of Business Administration</strong><span className="slash">/</span><span>Applied Artificial Intelligence</span><a href="#about" aria-label="Scroll to about"><ChevronDown size={18} /></a></div>
    </section>

    <section id="about" className="section container about-section"><SectionLabel index="01">About</SectionLabel><div className="about-grid"><h2>Technical depth.<br /><em>Business context.</em></h2><div className="about-copy"><p>Sai Santosh is an AI/ML Engineer with more than 5 years of experience designing, developing, deploying, and monitoring machine learning solutions across healthcare, financial services, and retail environments.</p><p>His work spans predictive modeling, anomaly and fraud detection, demand forecasting, customer segmentation, feature engineering, ML pipelines, model deployment, monitoring, and MLOps. He works primarily with Python, modern ML frameworks, and cloud-based AI platforms.</p><p>Currently pursuing a DBA specializing in Applied Artificial Intelligence, he brings technical AI knowledge together with business strategy and practical AI adoption.</p><div className="interest-row">{['Generative AI', 'LLMs', 'RAG', 'AI Agents', 'MLOps'].map((item) => <Pill key={item}>{item}</Pill>)}</div></div></div></section>

    <section id="experience" className="section container"><SectionLabel index="02">Experience</SectionLabel><div className="section-intro"><h2>Production is<br /><em>the standard.</em></h2><p>Five years moving models from notebooks into the hands of the people and products that need them.</p></div><div className="experience-list">{experiences.map((experience, i) => <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} className="experience-item" key={experience.company}><div className="experience-index">0{i + 1}</div><div className="experience-main"><div className="experience-heading"><div><h3>{experience.company}</h3><p>{experience.role}</p></div><time>{experience.date}</time></div><p className="focus"><span>Focus</span>{experience.focus}</p><ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tech-row">{experience.technologies.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div></div></motion.article>)}</div></section>

    <section id="projects" className="section projects-section"><div className="container"><SectionLabel index="03">Selected projects</SectionLabel><div className="section-intro project-intro"><h2>Ideas into<br /><em>infrastructure.</em></h2><p>Selected systems across Generative AI, MLOps, agentic workflows, and intelligent decisioning.</p></div><div className="project-grid">{projects.map((project) => <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp} className={`project-card accent-${project.accent}`} key={project.name}><div className="project-top"><span>{project.number}</span><span>{project.type}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="architecture"><span>Architecture</span><div>{project.architecture.map((step, i) => <span key={step}><b>{String(i + 1).padStart(2, '0')}</b>{step}</span>)}</div></div><div className="tech-row">{project.technologies.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div></motion.article>)}</div></div></section>

    <section id="skills" className="section container"><SectionLabel index="04">Technical toolkit</SectionLabel><div className="skills-grid">{skillGroups.map(([title, ...items]) => <div className="skill-group" key={title}><h3>{title}</h3>{items.map((item) => <span key={item}>{item}</span>)}</div>)}</div></section>

    <section id="education" className="section container education-section"><SectionLabel index="05">Education & perspective</SectionLabel><div className="education-grid"><div><div className="education-card current"><span className="card-kicker">Currently pursuing</span><h3>Doctor of Business Administration</h3><p>Applied Artificial Intelligence</p><span className="ongoing"><span className="status-dot" /> Ongoing</span></div><div className="education-card"><span className="card-kicker">Graduate degree</span><h3>Master of Science</h3><p>Computer and Information Sciences</p><span className="school">University of Alabama at Birmingham</span></div></div><div className="perspective"><h2>Curious about<br /><em>what comes next.</em></h2><p>Industry engineering experience, paired with doctoral-level study, creates a practical lens for turning emerging AI capabilities into responsible, useful systems.</p><div className="interest-cloud">{interests.map((interest) => <Pill key={interest}>{interest}</Pill>)}</div></div></div></section>

    <section className="roles-band"><div className="container roles-inner"><div><span className="card-kicker">Recruiter snapshot</span><h2>Open to opportunities</h2></div><div className="role-list">{roles.map((role) => <span key={role}>{role}</span>)}</div></div></section>

    <section id="contact" className="section container contact-section"><SectionLabel index="06">Contact</SectionLabel><div className="contact-grid"><div><h2>Let&apos;s build<br /><em>intelligent systems.</em></h2><p>I&apos;m interested in opportunities involving Machine Learning, Generative AI, Applied AI, LLM applications, and production AI platforms.</p><div className="contact-links"><a href={links.email} aria-label="Email Sai Santosh" onClick={() => trackEvent('email_click')}><Mail size={17} /> {links.emailAddress} <ArrowUpRight size={15} /></a><a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's LinkedIn profile" onClick={() => trackEvent('linkedin_click')}><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a><a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's GitHub profile" onClick={() => trackEvent('github_click')}><Github size={17} /> GitHub <ArrowUpRight size={15} /></a><a href={links.resume} download={profile.resumeFileName} aria-label="Download Sai Santosh's resume" onClick={() => trackEvent('resume_download')}><Download size={17} /> Download resume <ArrowUpRight size={15} /></a><span><MapPin size={17} strokeWidth={1.9} aria-hidden="true" /> {links.location}</span></div></div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" placeholder="Your name" value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))} /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))} /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about the opportunity..." value={formData.message} onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))} /></label><input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} value={formData.website} onChange={(event) => setFormData((current) => ({ ...current, website: event.target.value }))} /> <button className="button button-dark" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'SENDING...' : <>Send message <ArrowUpRight size={16} /></>}</button>{status !== 'idle' && <small className={`form-note form-status ${status === 'success' ? 'success' : 'error'}`} aria-live="polite">{statusMessage}</small>}</form></div></section>

    <footer className="footer container">
      <a className="wordmark" href="#top"><strong>Sai</strong><span className="wordmark-last">Santosh</span></a>
      <p>AI/ML Engineer · Generative AI · Applied AI</p>
      <div className="footer-social">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's LinkedIn profile" onClick={() => trackEvent('linkedin_click')}><Linkedin size={16} /></a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Sai Santosh's GitHub profile" onClick={() => trackEvent('github_click')}><Github size={16} /></a>
        <a href={links.email} aria-label="Email Sai Santosh" onClick={() => trackEvent('email_click')}><Mail size={16} /></a>
        <a className="resume-link" href={links.resume} download={profile.resumeFileName} aria-label="Download Sai Santosh's resume" onClick={() => trackEvent('resume_download')}>Resume <Download size={14} /></a>
      </div>
      <span>© {new Date().getFullYear()} Sai Santosh</span>
    </footer>
  </main>;
}
