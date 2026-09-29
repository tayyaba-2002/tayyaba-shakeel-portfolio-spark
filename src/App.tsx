import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import resumeAsset from "./assets/resume.pdf.asset.json";

const EMAIL = "Tayyabashakeel2002@gmail.com";
const PHOTO = "https://i.imgur.com/2bVpLsq.jpeg";
const LINKEDIN = "https://www.linkedin.com/in/tayyaba-shakeel-bb8a00253";
const GITHUB = "https://github.com/tayyaba-2002";

const navigation = [
  ["Work", "work"],
  ["Capabilities", "capabilities"],
  ["About", "about"],
  ["Contact", "contact"],
];

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
  download?: boolean;
};

function ActionLink({ href, children, variant = "primary", external, download }: ActionLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      className={`action action-${variant}`}
    >
      {children}
    </a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/90 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-bold text-ink" aria-label="Tayyaba Shakeel, home">
          <span className="grid size-8 place-items-center rounded-md bg-ink text-xs text-ink-inverse">TS</span>
          <span className="hidden sm:inline">Tayyaba Shakeel</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="nav-link">{label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <ActionLink href="#contact" variant="primary">Start a project <ArrowRight size={15} /></ActionLink>
        </div>
        <button className="icon-button md:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <nav className="shell flex flex-col gap-1 border-t border-line py-3 md:hidden" aria-label="Mobile navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-ink">{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="shell relative grid min-h-[calc(100vh-4rem)] content-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-20">
        <div>
          <div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase text-success">
            <span className="size-2 rounded-full bg-success" />
            Founder, Next Level AI Automation &amp; Services
          </div>
          <p className="kicker">Automation Specialist · Software Engineer</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            I turn manual work into <span className="text-primary">systems that run.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I design AI-powered workflows, WhatsApp automations, and practical business tools—from the first bottleneck to a working launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="#work">Explore selected work <ArrowDown size={15} /></ActionLink>
            <ActionLink href="#contact" variant="secondary">Discuss your workflow</ActionLink>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={resumeAsset.url} target="_blank" rel="noreferrer" download className="text-link"><Download size={15} /> Résumé</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-link"><Linkedin size={15} /> LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-link"><Github size={15} /> GitHub</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mr-0">
          <div className="portrait-frame">
            <img src={PHOTO} alt="Tayyaba Shakeel" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-x-4 bottom-4 rounded-md bg-ink/90 p-4 text-ink-inverse backdrop-blur">
              <p className="text-sm font-semibold">Based in Ras Al Khaimah, UAE</p>
              <p className="mt-1 text-xs text-ink-inverse/70">Building for small businesses and ambitious teams.</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-5 hidden w-56 rounded-md border border-line bg-bg p-4 shadow-lift sm:block">
            <p className="kicker">Current focus</p>
            <p className="mt-2 text-sm font-semibold text-ink">WhatsApp · AI agents · operational workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  const items = [
    ["01", "Founder-led", "From discovery to delivery"],
    ["02", "Business-first", "Built around the real process"],
    ["03", "Full-stack", "Automation, data, and interface"],
    ["04", "Client-ready", "Systems designed to be used"],
  ];
  return (
    <section aria-label="Working principles" className="border-b border-line bg-ink text-ink-inverse">
      <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([number, title, detail]) => (
          <div key={number} className="border-b border-ink-inverse/10 py-6 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0">
            <p className="font-mono text-xs text-primary-soft">{number}</p>
            <p className="mt-2 font-display font-semibold">{title}</p>
            <p className="mt-1 text-sm text-ink-inverse/60">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Project = {
  title: string;
  type: string;
  challenge: string;
  build: string;
  outcome: string;
  tools: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Zahra WhatsApp AI Booking Chatbot",
    type: "Conversational automation",
    challenge: "Turn a customer conversation into a complete booking without losing context between tools.",
    build: "An end-to-end flow connecting a webhook, Google Sheets lookup, AI agent, WhatsApp replies, and booking confirmation.",
    outcome: "A practical booking journey built around the channel customers already use.",
    tools: ["n8n", "WhatsApp API", "Google Sheets", "AI agent"],
  },
  {
    title: "Camaro Taxi Dispatch System",
    type: "Operations system",
    challenge: "Give a taxi business a clearer way to coordinate dispatch, notifications, and performance tracking.",
    build: "A tested AppSheet dispatch dashboard and automation plan spanning WhatsApp, SMS, Viber, and email.",
    outcome: "One operational view for dispatch activity, large datasets, and KPI visibility.",
    tools: ["AppSheet", "Google Sheets", "n8n", "KPI tracking"],
  },
  {
    title: "WhatsApp-to-Sheets Expense Tracker",
    type: "Field workflow",
    challenge: "Field expense messages arrive as unstructured text and are difficult to report consistently.",
    build: "A WhatsApp flow that parses free-text worker messages into structured Google Sheets records.",
    outcome: "Cleaner expense capture without asking field teams to adopt a complex new tool.",
    tools: ["Manychat", "WhatsApp API", "Google Sheets", "REGEXEXTRACT"],
  },
  {
    title: "MAAC Consultancy Website",
    type: "Client web project",
    challenge: "An Abu Dhabi auditing firm needed a credible, responsive digital presence.",
    build: "A Vite and React single-page website designed, developed, and deployed for the client.",
    outcome: "A clear online home that presents the firm professionally across screen sizes.",
    tools: ["React", "Vite", "Web design", "Netlify"],
    link: "https://maac-consultancy.netlify.app/",
  },
  {
    title: "Tap-to-Generate Daily Log",
    type: "AI product prototype",
    challenge: "Daily activity notes are useful, but writing them repeatedly adds friction.",
    build: "A focused one-tap application that uses Gemini to turn simple inputs into a structured daily log.",
    outcome: "A small AI tool that makes consistent documentation easier.",
    tools: ["React", "Gemini API", "Prompt design", "Lovable"],
    link: "https://log-companion-ai.lovable.app",
  },
  {
    title: "WordsWorth E-commerce Platform",
    type: "Software engineering",
    challenge: "Book supply was fragmented across regions and needed a more unified purchasing experience.",
    build: "A university team project where I led requirements analysis, system architecture, and stakeholder presentation.",
    outcome: "A complete platform concept grounded in research, architecture, and user needs.",
    tools: ["Requirements", "System architecture", "E-commerce", "Team leadership"],
  },
];

function Work() {
  return (
    <section id="work" className="section bg-bg">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Real processes. Practical systems.</h2>
          </div>
          <p>Each project starts with a workflow that is slow, fragmented, or difficult to scale—and turns it into something clearer.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="group bg-bg p-6 transition-colors hover:bg-surface sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-primary">0{index + 1} / {project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-ink">{project.title}</h3>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="icon-button shrink-0" aria-label={`Open ${project.title}`}>
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
              <dl className="mt-7 space-y-5 text-sm leading-6">
                <div><dt>Challenge</dt><dd>{project.challenge}</dd></div>
                <div><dt>What I built</dt><dd>{project.build}</dd></div>
                <div className="result"><dt><Check size={14} /> Outcome</dt><dd>{project.outcome}</dd></div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tools.map((tool) => <span key={tool} className="tag">{tool}</span>)}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-ink">
                  View live project <ArrowRight size={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    icon: Workflow,
    title: "Automation architecture",
    copy: "Map the process, connect the tools, and build workflows with clear handoffs and safeguards.",
    tools: "n8n · Make · webhooks · Google OAuth",
  },
  {
    icon: MessageCircle,
    title: "Conversational systems",
    copy: "Build WhatsApp journeys for bookings, lead capture, updates, and structured data collection.",
    tools: "WhatsApp API · Manychat · AI agents",
  },
  {
    icon: Bot,
    title: "Applied AI",
    copy: "Use language models where they genuinely improve classification, generation, retrieval, or decisions.",
    tools: "Claude API · Gemini API · prompt engineering",
  },
  {
    icon: Layers3,
    title: "Low-code business tools",
    copy: "Create dashboards, CRMs, and operational views that teams can adopt without unnecessary complexity.",
    tools: "AppSheet · Google Sheets · Lovable",
  },
  {
    icon: Code2,
    title: "Web development",
    copy: "Design and develop responsive interfaces backed by sound software engineering fundamentals.",
    tools: "React · Vite · JavaScript · PHP · Tailwind",
  },
  {
    icon: Database,
    title: "Data foundations",
    copy: "Structure information for reliable workflows, reporting, and future system growth.",
    tools: "MySQL · Python · Pandas · Google Sheets",
  },
];

function Capabilities() {
  return (
    <section id="capabilities" className="section border-y border-line bg-surface">
      <div className="shell">
        <div className="section-heading">
          <div><p className="kicker">Capabilities</p><h2>One partner across the workflow.</h2></div>
          <p>I work across automation logic, AI, data, and the interface people actually use—so the complete system makes sense.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, copy, tools }) => (
            <article key={title} className="capability-card">
              <span className="capability-icon"><Icon size={20} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <p className="mt-auto border-t border-line pt-4 font-mono text-xs text-muted">{tools}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const credentials = [
    "Prompt Engineering — Vanderbilt University",
    "RPA Fundamentals — TDRA Virtual Academy",
    "Transforming Tasks with AI — TDRA Virtual Academy",
    "Critical Thinking & Problem Solving — Skyline University",
  ];
  return (
    <section id="about" className="section bg-bg">
      <div className="shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="kicker">About</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink">Engineering discipline, founder mindset.</h2>
          <p className="mt-6 leading-7 text-muted">
            I run Next Level AI Automation &amp; Services while completing my final year of Software Engineering. That combination shapes how I work: I care about sound systems, but I also know the solution has to be useful, understandable, and worth implementing.
          </p>
          <p className="mt-4 leading-7 text-muted">
            I enjoy finding the point where a process breaks down—repetitive messages, scattered records, manual dispatch—and building the practical tool that fixes it.
          </p>
          <div className="mt-8 flex gap-3">
            <ActionLink href="#contact">Work with me <ArrowRight size={15} /></ActionLink>
          </div>
        </div>
        <div className="border-l border-line pl-6 sm:pl-10">
          <div className="timeline-item">
            <span className="timeline-icon"><BriefcaseBusiness size={17} /></span>
            <p className="kicker">Now</p>
            <h3>Founder &amp; Automation Developer</h3>
            <p className="meta">Next Level AI Automation &amp; Services · Ras Al Khaimah</p>
            <p>Designing automation systems, chatbots, websites, and low-code business tools for real operating needs.</p>
          </div>
          <div className="timeline-item mt-10">
            <span className="timeline-icon"><GraduationCap size={17} /></span>
            <p className="kicker">2022 — Present</p>
            <h3>Bachelor in Software Engineering</h3>
            <p className="meta">University of Bolton (University of Greater Manchester), Ras Al Khaimah campus</p>
            <p>Building a full-stack foundation across software design, databases, web development, mobile applications, and applied machine learning.</p>
          </div>
          <div className="mt-10 border-t border-line pt-8">
            <p className="kicker">Continued learning</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2 text-sm text-muted"><ChevronRight size={15} className="mt-0.5 shrink-0 text-primary" />{credential}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: "New portfolio project inquiry" }),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-ink text-ink-inverse">
      <div className="shell grid gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-28">
        <div>
          <p className="kicker text-primary-soft">Start a conversation</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">Where is manual work slowing you down?</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ink-inverse/65">
            Tell me what your team repeats, copies, chases, or manages by hand. I’ll help you think through what a practical system could look like.
          </p>
          <div className="mt-9 space-y-4 text-sm">
            <a className="contact-link" href={`mailto:${EMAIL}`}><Mail size={17} />{EMAIL}</a>
            <a className="contact-link" href="tel:+971567339277"><Phone size={17} />+971 56 733 9277</a>
            <p className="contact-link"><MapPin size={17} />Ras Al Khaimah, UAE</p>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-md border border-ink-inverse/15 bg-ink-elevated p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">Name<input name="name" required className="field" placeholder="Your name" /></label>
            <label className="field-label">Work email<input name="email" type="email" required className="field" placeholder="you@company.com" /></label>
          </div>
          <label className="field-label mt-5">What would you like to improve?<textarea name="message" rows={5} required className="field resize-none" placeholder="Tell me about the workflow or problem…" /></label>
          <button type="submit" disabled={status === "sending"} className="action action-primary mt-6 w-full justify-center disabled:cursor-wait disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send project inquiry"} <ArrowRight size={15} />
          </button>
          <div aria-live="polite" className="mt-4 min-h-5 text-sm">
            {status === "sent" && <p className="text-primary-soft">Thank you—your message has been sent.</p>}
            {status === "error" && <p className="text-warning">The form could not send. Please email me directly.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-inverse/10 bg-ink text-ink-inverse">
      <div className="shell flex flex-col gap-5 py-7 text-sm text-ink-inverse/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Tayyaba Shakeel</p>
        <div className="flex items-center gap-5">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-ink-inverse">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-ink-inverse">GitHub</a>
          <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="hover:text-ink-inverse">Résumé</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProofStrip />
        <Work />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}