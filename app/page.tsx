const projects = [
  {
    id: "shopify", number: "01", title: "Shopify Competitive Intelligence", short: "Brand analysis and competitor research for Shopify stores.",
    category: "AI RESEARCH · E-COMMERCE", date: "July 2026", theme: "blue",
    description: "Analyzes a store’s website and competitor information to report on its brand, marketing, and customer reviews.",
    tags: ["LangGraph", "FastAPI", "React", "Tavily", "Qwen"],
    href: "https://github.com/pranavbidve/shopify-competitive-intelligence",
    stats: [["5", "brand pillars"], ["5", "concurrent searches"], ["2", "specialized models"]],
    details: ["Collected first-party website evidence and external market research with Tavily Map, Extract, and Search.", "Built a LangGraph workflow with structured extraction, source deduplication, and validated citations.", "Streamed intermediate reports through FastAPI to a React interface while deeper competitor research continued."],
  },
  {
    id: "partselect", number: "02", title: "PartSelect Agent", short: "An AI assistant for finding compatible appliance parts.",
    category: "MULTI-AGENT AI · COMMERCE", date: "May 2026", theme: "lime",
    description: "Helps users find appliance parts, check model compatibility, troubleshoot problems, and manage a cart.",
    tags: ["LangGraph", "FastAPI", "React", "ChromaDB", "LangSmith"],
    href: "https://github.com/pranavbidve/partselect-agent",
    stats: [["5", "specialist agents"], ["8", "tools"], ["44", "catalog parts"]],
    details: ["Routed customer intent to specialized agents for product search, compatibility, troubleshooting, ordering, and inventory recommendations.", "Connected semantic catalog retrieval to session-based conversation memory and cart APIs.", "Added streaming responses and LangSmith traces to inspect agent decisions and tool calls. Customer and inventory workflows use seeded demonstration data."],
  },
  {
    id: "hexanote", number: "03", title: "HexaNote", short: "Search and ask questions about notes using local AI.",
    category: "LOCAL AI · PERSONAL KNOWLEDGE", date: "2026", theme: "orange",
    description: "A note-taking app with semantic search and a local language model that answers questions using your notes.",
    tags: ["Local AI", "RAG", "Ollama", "Weaviate", "FastAPI"],
    href: "https://github.com/pranavbidve/HexaNote",
    stats: [["Local", "LLM inference"], ["RAG", "contextual answers"], ["Private", "personal notes"]],
    details: ["Combined semantic retrieval and local LLM inference so notes can become context for useful answers.", "Built a privacy first note taking system with real time device synchronization.", "Designed around keeping personal notes on the user’s machine."],
  },
];
const experience = [
  { company: "Qosmic", role: "Founding AI Intern", period: "Jun 2026 to Present", text: "Building AI tools that analyze Shopify stores and generate recommendations and previews for store improvements.", tags: ["Deep Agents", "LangGraph", "LangSmith", "Next.js", "Supabase"] },
  { company: "TD Bank", role: "AI Intern", period: "Sep 2025 to Dec 2025", text: "Built AI workflows to detect suspicious transactions and explain flagged activity to fraud analysts.", tags: ["LangGraph", "RAG", "FastAPI", "XGBoost"] },
  { company: "Kordis", role: "AI Intern", period: "Jun 2025 to Sep 2025", text: "Built transaction search and categorization tools, a financial analyst agent, and cash-flow forecasting models.", tags: ["Hybrid RAG", "Pinecone", "Redis", "Transformers"] },
];
const capabilities = [
  ["01", "Agentic systems", "Building agents with tool use, conversation memory, and task routing.", "LangGraph · Deep Agents · LangSmith"],
  ["02", "Retrieval & RAG", "Combining keyword and semantic search to answer questions from retrieved documents.", "Pinecone · ChromaDB · FAISS · BM25"],
  ["03", "LLM evaluation", "Testing model accuracy, grounding, latency, and behavior across conversations.", "LangSmith · MLflow · PyTorch"],
  ["04", "ML engineering", "Building data pipelines, serving models through APIs, and deploying applications.", "Python · FastAPI · AWS · GCP · CI/CD"],
];
function Arrow({ down = false }: { down?: boolean }) { return <span aria-hidden="true">{down ? "↓" : "↗"}</span>; }
function ProjectVisual({ id, large = false }: { id: string; large?: boolean }) {
  if (id === "shopify") return <div className={`project-visual visual-shopify ${large ? "large" : ""}`}><span className="visual-label">SHOPIFY STORE ANALYSIS</span><img src="/images/shopify-report.png" alt="Shopify Competitive Intelligence interface showing a store profile and brand pillar report" width="847" height="956" loading="lazy" /><span className="visual-stamp">5 BRAND<br />PILLARS</span></div>;
  if (id === "partselect") return <div className={`project-visual visual-partselect ${large ? "large" : ""}`}><span className="visual-label">APPLIANCE PARTS ASSISTANT</span><div className="agent-diagram" aria-label="Supervisor routes questions to product, compatibility, troubleshooting, and order agents"><div className="supervisor-label">Your question <span>↘</span></div><div className="agent-center">Supervisor <span>✳</span></div><div className="agent-branches"><span>Find a part</span><span>Check fit</span><span>Troubleshoot</span><span>Order</span></div></div><span className="visual-foot">5 AGENTS / 8 TOOLS / 44 PARTS</span></div>;
  return <div className={`project-visual visual-hexa ${large ? "large" : ""}`}><span className="visual-label">LOCAL AI NOTE-TAKING</span><img className="hexa-icon" src="/images/hexanote-icon.svg" alt="HexaNote application icon" width="256" height="256" /><div className="hexa-word">HexaNote<br /><span>Local AI.</span></div><div className="hexa-flow"><span>Notes</span><i>↔</i><span>Local AI</span></div><span className="visual-foot">SEMANTIC SEARCH / LOCAL LLMS</span></div>;
}
export default function Home() {
  return <main>
    <div className="reading-progress" aria-hidden="true" />
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Pranav Bidve home">pb<span>✳</span></a>
      <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#research">Research</a><a href="#about">About</a></nav>
      <a className="contact-link" href="mailto:pranavbidve12@gmail.com">Let’s talk <Arrow /></a>
      <button className="menu-toggle" aria-expanded="false" aria-controls="mobile-nav">Menu <span>＋</span></button>
    </header>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden><a href="#work">Selected work ↗</a><a href="#experience">Experience ↗</a><a href="#research">Research ↗</a><a href="#about">About ↗</a><a href="mailto:pranavbidve12@gmail.com">Let’s talk ↗</a></nav>
    <section className="hero" id="top">
      <div className="hero-composition">
        <div className="hero-copy"><h1><span className="headline-line">Pranav <span className="lime-word">Bidve</span></span></h1><p className="hero-title">Founding Engineer <span>at Qosmic</span></p><p className="intro">I build AI tools for e-commerce and finance, from store analysis and product search to transaction review.</p><a className="primary-button" href="#work">View my projects <Arrow /></a></div>
        <div className="portrait-stack" data-tilt><div className="portrait-card"><span className="photo-index">PORTRAIT</span><img className="portrait-photo" src="/images/pranav-portrait-canoe.png" alt="Pranav smiling while canoeing on a lake" width="1299" height="2294" fetchPriority="high" /><div className="portrait-caption"><span>Pranav Bidve</span><Arrow /></div></div></div>
      </div>
    </section>
    <section className="section work-section" id="work">
      <div className="section-heading" data-reveal><div><p className="section-label">01 / SELECTED WORK</p><h2>Selected <em>projects.</em></h2></div><p className="section-note">Open a project for details and code. <Arrow down /></p></div>
      <div className="project-grid">{projects.map(project => <article className={`project-card project-${project.theme}`} key={project.id} data-reveal>
        <a className="project-open" href={`#project-${project.id}`} data-project={project.id} aria-label={`Explore ${project.title}`}><div className="visual-wrap" data-tilt><ProjectVisual id={project.id} /><span className="project-peek">Explore project <Arrow /></span></div><div className="project-caption"><span className="project-number">{project.number}</span><div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.short}</p></div><span className="round-arrow"><Arrow /></span></div></a><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </article>)}</div>
    </section>
    <section className="experience-section" id="experience"><div className="section-inner"><div className="section-heading" data-reveal><div><p className="section-label">02 / EXPERIENCE</p><h2>Work <em>experience.</em></h2></div><p className="section-note">E-commerce, banking, and financial software.</p></div><div className="experience-list">{experience.map((item, i) => <article className="experience-item" data-reveal key={item.company}><span className="experience-number">0{i + 1}</span><div className="experience-identity"><h3>{item.company}</h3><p>{item.role}</p><span className="date">{item.period}</span></div><div className="experience-description"><p>{item.text}</p><div className="tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div></div></section>
    <section className="section research-section" id="research"><div className="section-heading" data-reveal><div><p className="section-label">03 / RESEARCH & PUBLICATIONS</p><h2>Research &<br /><em>publications.</em></h2></div><a className="text-link" href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=pScw42QAAAAJ" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a></div><div className="publication-list">
      <article className="publication" data-reveal><div className="publication-meta"><span>2026</span><span className="status-pill">ACL ARR · UNDER REVIEW</span></div><h3>SLiM-Eval: Task-Sensitive Analysis of Quantization Trade-offs in Small Language Models</h3><p>A systematic study across five instruction-tuned small language models, three quantization methods, and two hardware platforms. Reasoning tasks degraded 3 to 10 times more than factual tasks under INT4 quantization.</p><div className="publication-actions"><a href="https://openreview.net/forum?id=WaqIk3VaiZ" target="_blank" rel="noreferrer">OpenReview <Arrow /></a><a href="https://openreview.net/pdf?id=WaqIk3VaiZ" target="_blank" rel="noreferrer">Read the paper <Arrow /></a></div></article>
      <article className="publication" data-reveal><div className="publication-meta"><span>2024</span><span className="status-pill">SPRINGER · ISDA 2023</span></div><h3>An Ensemble Multinomial Naïve Bayes Classifier for Overlapping Prakriti Detection</h3><p>An ensemble machine-learning approach combining k-modes clustering and Multinomial Naïve Bayes to identify overlapping Prakriti types.</p><div className="publication-actions"><a href="https://link.springer.com/chapter/10.1007/978-3-031-64850-2_45" target="_blank" rel="noreferrer">Read on Springer <Arrow /></a></div></article></div></section>
    <section className="about-section" id="about"><div className="section-inner about-content"><div className="about-heading" data-reveal><p className="section-label">04 / ABOUT</p><h2>About <em>me.</em></h2><p>I’m an AI/ML Engineer. I enjoy building AI agents, experimenting with language models, and making software that helps people solve everyday problems.</p><p>I’m a Columbia University graduate with a master’s degree in Data Science.</p><a className="text-link" href="/Pranav-Bidve-Resume.pdf" download="Bidve Resume.pdf">Download résumé <Arrow down /></a></div></div></section>
    <section className="section capabilities-section" id="capabilities"><div className="section-heading" data-reveal><div><p className="section-label">05 / SKILLS</p><h2>Technical <em>skills.</em></h2></div></div><div className="capability-grid">{capabilities.map(([n, title, text, tools]) => <article className="capability" key={n} data-reveal><span>{n}</span><h3>{title}</h3><p>{text}</p><small>{tools}</small></article>)}</div></section>
    <section className="contact-section" id="contact"><div className="section-inner"><p className="section-label">06 / CONTACT</p><a className="contact-headline" href="mailto:pranavbidve12@gmail.com">Get in<br /><span>touch.</span><Arrow /></a><div className="contact-bottom"><a className="email-button" href="mailto:pranavbidve12@gmail.com">Email me <Arrow /></a><div className="social-links"><a href="https://linkedin.com/in/pranavbidve" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/pranavbidve" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=pScw42QAAAAJ" target="_blank" rel="noreferrer">Scholar <Arrow /></a></div></div></div></section>
    <footer><p>© 2026 PRANAV BIDVE</p><a href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a><button className="motion-toggle" aria-pressed="false">Pause motion</button></footer>
    {projects.map((project, i) => <dialog className={`project-dialog dialog-${project.theme}`} id={`dialog-${project.id}`} data-project-id={project.id} aria-labelledby={`title-${project.id}`} key={project.id}><div className="dialog-shell"><header className="dialog-header"><span>SELECTED WORK / {project.number}</span><button className="dialog-close" aria-label="Close project">Close <span aria-hidden="true">×</span></button></header><div className="dialog-content"><p className="section-label">{project.category} · {project.date}</p><h2 id={`title-${project.id}`}>{project.title}</h2><p className="dialog-intro">{project.description}</p><div className="dialog-stats">{project.stats.map(([n, label]) => <div key={label}><strong>{n}</strong><span>{label}</span></div>)}</div><ProjectVisual id={project.id} large /><div className="project-details"><h3>Implementation</h3><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>{project.id === "shopify" && <figure className="detail-screenshot"><img src="/images/shopify-analysis.png" width="860" height="1350" alt="Detailed competitive analysis with source-linked findings for each brand pillar" loading="lazy" /><figcaption>Competitive findings, with their sources alongside.</figcaption></figure>}<div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div><a className="primary-button" href={project.href} target="_blank" rel="noreferrer">Explore the code on GitHub <Arrow /></a><a className="next-project" href={`#project-${projects[(i + 1) % projects.length].id}`} data-project={projects[(i + 1) % projects.length].id}><span>NEXT PROJECT</span><strong>{projects[(i + 1) % projects.length].title}</strong><Arrow /></a></div></div></dialog>)}
  </main>;
}
