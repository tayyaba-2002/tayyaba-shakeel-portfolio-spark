import { useState } from "react";
import {
  Menu, X, ArrowRight, Download, Bot, MessageCircle, Workflow, LayoutGrid, FileSearch, Mail, ArrowDown, Check, Linkedin, Github,
} from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const EMAIL = "Tayyabashakeel2002@gmail.com";
const PHOTO = "https://i.imgur.com/2bVpLsq.jpeg";
const nav = ["Home", "About", "Services", "Projects", "Skills", "Contact"];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-lg font-semibold">TS<span className="text-accent">.</span></a>
        <nav className="hidden gap-7 md:flex">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-muted hover:text-fg">{n}</a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden md:inline-flex">Let's Work Together</a>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-line px-5 py-5 md:hidden">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="text-muted hover:text-fg">{n}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center">Let's Work Together</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const flow = ["Inquiry", "AI parse", "n8n workflow", "Database", "Dashboard"];
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="section relative grid items-center gap-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="eyebrow">AI Automation • Software Engineering • Business Systems</p>
          <p className="mt-6 text-lg text-muted">Tayyaba Shakeel</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">
            AI Automation Specialist <span className="text-muted">|</span> Software Engineer
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I build AI-powered automations and software solutions that help businesses reduce repetitive work,
            streamline operations, and turn manual processes into scalable systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">View My Work <ArrowRight size={16} /></a>
            <a href="#contact" className="btn-ghost">Let's Work Together</a>
            <a href={resumeAsset.url} target="_blank" rel="noreferrer" download className="inline-flex items-center gap-2 px-2 text-sm text-muted hover:text-accent">
              <Download size={14} /> Resume
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <img src={PHOTO} alt="Tayyaba Shakeel" className="aspect-square w-full max-w-sm rounded-xl border border-line object-cover" />
          <div className="card max-w-sm p-4">
            <p className="font-mono text-[11px] text-muted">workflow.run()</p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {flow.map((f, i) => (
                <span key={f} className="flex items-center gap-1.5">
                  <span className="chip text-fg">{f}</span>
                  {i < flow.length - 1 && <ArrowRight size={12} className="text-accent" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const bring = ["Business-focused problem solving", "AI automation", "API & system integrations", "Full-stack development", "Workflow design", "Database-driven applications"];
  return (
    <section id="about" className="section grid gap-12 md:grid-cols-2">
      <div>
        <p className="eyebrow">About</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Software engineering meets practical automation.</h2>
      </div>
      <div>
        <p className="text-muted">
          I'm a Software Engineering student and AI automation specialist focused on building practical digital systems
          that solve real business problems. I work across automation, APIs, databases, AI integrations, web applications,
          and workflow systems. Rather than building technology for its own sake, I start by understanding the process —
          then design the system around it.
        </p>
        <h3 className="mt-8 text-sm font-semibold">What I bring</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {bring.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-muted"><Check size={14} className="text-accent" />{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Manual() {
  const items = ["Copying customer information between platforms", "Manually processing receipts and invoices", "Responding to repetitive WhatsApp inquiries", "Updating spreadsheets by hand", "Sending repetitive follow-up messages", "Searching through documents for information", "Moving information between different systems"];
  return (
    <section className="border-y border-line bg-surface">
      <div className="section">
        <h2 className="text-3xl font-semibold md:text-4xl">Is your business still doing this manually?</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i} className="rounded-lg border border-line bg-bg px-4 py-3 text-sm text-muted">{i}</div>
          ))}
        </div>
        <p className="mt-10 text-lg">These are the kinds of processes I build systems to automate.</p>
      </div>
    </section>
  );
}

function Services() {
  const s = [
    { icon: Bot, t: "AI Business Automation", d: "Automate repetitive business processes using AI, workflows, APIs, and connected business tools." },
    { icon: MessageCircle, t: "WhatsApp & Conversational Automation", d: "Build intelligent WhatsApp and web-based workflows for lead qualification, customer support, data collection, and internal processes." },
    { icon: Workflow, t: "Workflow & API Integrations", d: "Connect the tools your business already uses and automate the movement of information between them." },
    { icon: LayoutGrid, t: "Custom Web Applications", d: "Build responsive, database-powered web applications and internal tools designed around specific business needs." },
    { icon: FileSearch, t: "AI-Powered Internal Tools", d: "Turn documents, messages, forms, and business data into useful automated systems, dashboards, and decision-support tools." },
  ];
  return (
    <section id="services" className="section">
      <p className="eyebrow">Services</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">What I can build for you</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {s.map(({ icon: I, t, d }) => (
          <div key={t} className="card">
            <I className="text-accent" size={22} />
            <h3 className="mt-4 font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Project = { t: string; cat: string; filter: string; label: string; problem: string; solution: string; tech: string[]; flow: string[]; highlight: string };
const projects: Project[] = [
  { t: "AI Lead Qualification & WhatsApp Automation", cat: "AI Automation", filter: "AI Automation", label: "Automation Demo", problem: "Businesses lose time manually responding to inquiries, collecting details, and qualifying leads.", solution: "A workflow that captures inquiries, uses AI to categorise the conversation, collects details, qualifies the lead and routes it into the right system.", tech: ["n8n", "WhatsApp Business API", "AI APIs", "Webhooks", "CRM / Database"], flow: ["WhatsApp", "AI classify", "n8n", "CRM"], highlight: "Automated lead intake and qualification" },
  { t: "AI Construction Expense Automation", cat: "Business Automation", filter: "Business Systems", label: "Case Study", problem: "Construction expenses are hard to track when receipts and messages are handled manually.", solution: "Receives expenses via WhatsApp, extracts structured data with AI, stores it in a database and makes it available for reporting.", tech: ["WhatsApp", "n8n", "AI", "Database", "Google Sheets"], flow: ["WhatsApp", "AI extraction", "Database", "Reporting"], highlight: "WhatsApp → AI extraction → database → reporting" },
  { t: "AI Knowledge Assistant", cat: "AI + RAG", filter: "AI Projects", label: "Prototype", problem: "Useful information is scattered across documents, making it slow to find.", solution: "An AI assistant that retrieves relevant information from a structured knowledge base and gives contextual answers.", tech: ["LLM", "RAG", "Embeddings", "Vector DB", "APIs"], flow: ["Documents", "Embeddings", "Vector DB", "LLM answer"], highlight: "Turn business knowledge into an accessible AI assistant" },
  { t: "AI Appointment & Customer Workflow", cat: "AI Automation", filter: "AI Automation", label: "Automation Demo", problem: "Appointment handling involves repetitive messages, scheduling, confirmations and follow-ups.", solution: "An automated workflow that handles inquiries, collects details, manages booking steps and triggers follow-ups.", tech: ["AI", "n8n", "APIs", "Webhooks", "Database"], flow: ["Inquiry", "AI", "Booking", "Follow-up"], highlight: "Automated customer communication and follow-up" },
  { t: "AI Document & Receipt Processing", cat: "AI + Automation", filter: "AI Projects", label: "Prototype", problem: "Manually entering data from invoices and receipts is repetitive and error-prone.", solution: "Receives a document, extracts structured data with AI/OCR, validates it and sends it into the right workflow or database.", tech: ["AI/OCR", "n8n", "APIs", "Database"], flow: ["Document", "AI/OCR", "Validate", "Database"], highlight: "Document → structured data → automated workflow" },
  { t: "Business Operations Dashboard", cat: "Web Application", filter: "Web Applications", label: "Concept", problem: "Data spread across spreadsheets and tools makes operations hard to read at a glance.", solution: "A centralised dashboard presenting business data through clear visualisations and summaries.", tech: ["React", "Database", "APIs", "Charts"], flow: ["Sources", "API", "Database", "Dashboard"], highlight: "Centralised business visibility" },
];

function Projects() {
  const filters = ["All", "AI Automation", "Business Systems", "Web Applications", "AI Projects"];
  const [f, setF] = useState("All");
  const list = projects.filter((p) => f === "All" || p.filter === f);
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Featured Work</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Problems, systems, results</h2>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((x) => (
          <button key={x} aria-pressed={f === x} onClick={() => setF(x)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${f === x ? "border-accent bg-accent text-accent-fg" : "border-line text-muted hover:text-fg"}`}>
            {x}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {list.map((p) => (
          <article key={p.t} className="card flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <span className="eyebrow">{p.cat}</span>
              <span className="chip">{p.label}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold">{p.t}</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="font-medium">The problem</dt><dd className="text-muted">{p.problem}</dd></div>
              <div><dt className="font-medium">The system</dt><dd className="text-muted">{p.solution}</dd></div>
            </dl>
            <div className="mt-5 rounded-lg border border-line bg-bg p-3">
              <p className="font-mono text-[11px] text-muted">The automation</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                {p.flow.map((s, i) => (
                  <span key={s} className="flex items-center gap-1.5">
                    <span className="chip text-fg">{s}</span>
                    {i < p.flow.length - 1 && <ArrowRight size={12} className="text-accent" />}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm"><span className="font-medium">The result: </span><span className="text-accent">{p.highlight}</span></p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const g: Record<string, string[]> = {
    "AI & Automation": ["AI APIs", "LLM workflows", "Prompt engineering", "RAG", "AI agents", "n8n", "Workflow automation"],
    "Backend & APIs": ["REST APIs", "Webhooks", "JSON", "API integrations", "Authentication", "OAuth"],
    Databases: ["PostgreSQL", "Supabase", "SQL", "Database design"],
    "Web Development": ["React", "JavaScript", "HTML", "CSS", "Responsive design"],
    "Tools & Platforms": ["Git", "GitHub", "Vercel", "Postman", "Google Sheets", "WhatsApp Business Platform"],
  };
  return (
    <section id="skills" className="section">
      <p className="eyebrow">Skills</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Technical toolkit</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(g).map(([k, v]) => (
          <div key={k} className="card">
            <h3 className="font-semibold">{k}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{v.map((s) => <span key={s} className="chip text-fg">{s}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Understand", "Understand the existing business process and identify repetitive or inefficient steps."],
    ["Design", "Map the workflow, data flow, integrations, and automation logic."],
    ["Build", "Connect APIs, AI, databases, business tools, and user interfaces into a working system."],
    ["Improve", "Test the workflow, handle edge cases, monitor failures, and refine the system."],
  ];
  return (
    <section className="border-y border-line bg-surface">
      <div className="section">
        <p className="eyebrow">Process</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">How I Approach Automation</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="border-t border-accent pt-4">
              <p className="font-mono text-sm text-accent">0{i + 1}</p>
              <h3 className="mt-2 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: "New portfolio inquiry" }),
      });
      if (!r.ok) throw new Error();
      setStatus("sent");
      e.currentTarget?.reset();
    } catch {
      setStatus("error");
    }
  }
  const input = "w-full rounded-md border border-line bg-bg px-3 py-2.5 text-sm outline-none focus:border-accent";
  return (
    <section id="contact" className="section grid gap-12 md:grid-cols-2">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Let's build a smarter workflow.</h2>
        <p className="mt-5 text-muted">Have a repetitive process, manual task, or business workflow that could be automated? Let's turn it into a practical system.</p>
        <a href={`mailto:${EMAIL}`} className="mt-8 inline-flex items-center gap-2 text-sm hover:text-accent"><Mail size={16} />{EMAIL}</a>
        <div className="mt-5 flex items-center gap-4">
          <a href="https://www.linkedin.com/in/tayyaba-shakeel-bb8a00253" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://github.com/tayyaba-2002" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
      <form onSubmit={submit} className="card space-y-4 hover:border-line">
        <label className="block text-sm">Name<input name="name" required className={`${input} mt-1`} /></label>
        <label className="block text-sm">Email<input name="email" type="email" required className={`${input} mt-1`} /></label>
        <label className="block text-sm">What would you like to automate?<textarea name="message" rows={5} required className={`${input} mt-1`} /></label>
        <button disabled={status === "sending"} className="btn-primary w-full justify-center disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Start a Conversation"} <ArrowDown size={14} className="-rotate-90" />
        </button>
        {status === "sent" && <p className="text-sm text-accent">Thanks — your message was sent.</p>}
        {status === "error" && <p className="text-sm text-muted">Something went wrong. Please email me directly.</p>}
      </form>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero /><About /><Manual /><Services /><Projects /><Process /><Skills /><Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-xs text-muted">© {new Date().getFullYear()} Tayyaba Shakeel</footer>
    </>
  );
}
