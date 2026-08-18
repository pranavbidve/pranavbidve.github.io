const navItems = [
  ["Experience", "experience"],
  ["Research", "research"],
  ["Capabilities", "capabilities"],
  ["Education", "education"],
];

const experience = [
  {
    company: "Qosmic AI",
    role: "Founding AI Engineer",
    period: "Jun 2026 — Present",
    summary:
      "Building an agent-powered e-commerce optimization platform that turns storefront evidence into measurable experiments.",
    highlights: [
      "Delivered 126%+ average revenue growth across 300+ stores by building a Deep Agents-powered platform using LangGraph, Playwright, and Shopify data.",
      "Owned LangSmith evaluations and improved recommendation quality by 20% through grounding, opportunity-sizing, and multi-turn evaluators.",
      "Reduced audit-to-experiment time by 30% through automated storefront analysis, variant generation, and approval-ready Shopify previews.",
    ],
    stack: ["Deep Agents", "LangGraph", "LangSmith", "Next.js", "Supabase"],
  },
  {
    company: "TD Bank",
    role: "AI Intern",
    period: "Sep 2025 — Dec 2025",
    summary:
      "Developed an agentic fraud detection and investigation system operating across high-volume transaction workflows.",
    highlights: [
      "Reduced false negatives by 10% with an agentic RAG system combining LangGraph workflows and LLM reasoning across 10K transactions per day.",
      "Cut analyst review time by 30% with natural-language explanations for flagged transactions.",
      "Improved detection F1 by 18% using contextual transaction embeddings and an XGBoost feature pipeline.",
    ],
    stack: ["LangGraph", "RAG", "OLMo", "FastAPI", "XGBoost"],
  },
  {
    company: "Kordis",
    role: "AI Intern",
    period: "Jun 2025 — Sep 2025",
    summary:
      "Built retrieval, agent, and forecasting systems for real-time financial intelligence.",
    highlights: [
      "Reduced manual review effort by 30% with a hybrid dense + BM25 retrieval pipeline over Pinecone.",
      "Cut p95 latency by 25% through an intelligent Redis query cache for a live financial analyst agent.",
      "Improved cash-flow forecasting accuracy by 12% across XGBoost, NeuralProphet, and Transformer models.",
    ],
    stack: ["Hybrid RAG", "Pinecone", "Redis", "Transformers", "XGBoost"],
  },
];

const projects = [
  {
    index: "01",
    title: "Shopify Competitive Intelligence",
    description:
      "An evidence-grounded LangGraph research workflow that turns a Shopify URL into a five-pillar brand profile, streams owner-facing insights, and runs cited competitor analysis in parallel.",
    tags: ["LangGraph", "FastAPI", "React", "Tavily", "Qwen"],
    href: "https://github.com/pranavbidve/shopify-competitive-intelligence",
  },
  {
    index: "02",
    title: "Agentic Commerce Assistant",
    description:
      "A modular multi-agent commerce system with supervisor routing, specialist agents, semantic catalog retrieval, compatibility checks, authenticated ordering, and full LangSmith observability.",
    tags: ["Multi-agent", "LangGraph", "ChromaDB", "SSE", "LangSmith"],
    href: "https://github.com/pranavbidve/case-study-instalily",
  },
  {
    index: "03",
    title: "HexaNote",
    description:
      "A privacy-first note-taking system with local LLM inference, semantic search, RAG chat, and real-time device synchronization—built to keep every note on the user's machine.",
    tags: ["Local AI", "RAG", "Ollama", "Weaviate", "FastAPI"],
    href: "https://github.com/pranavbidve/HexaNote",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Agentic Systems",
    description:
      "Production-grade agents, deterministic orchestration, tool use, memory, human approval, and observable multi-step workflows.",
    tools: "LangGraph · LangChain · Deep Agents · LangSmith",
  },
  {
    number: "02",
    title: "Retrieval & RAG",
    description:
      "Hybrid retrieval, embedding pipelines, reranking, grounded generation, and evaluation across structured and unstructured data.",
    tools: "FAISS · Pinecone · ChromaDB · BM25 · Reranking",
  },
  {
    number: "03",
    title: "LLM Evaluation",
    description:
      "Task-specific evaluators for grounding, correctness, opportunity sizing, multi-turn behavior, latency, and deployment trade-offs.",
    tools: "LangSmith · MLflow · Hugging Face · PyTorch",
  },
  {
    number: "04",
    title: "ML Engineering",
    description:
      "From data and feature pipelines to model serving, experimentation, monitoring, and reliable cloud deployment.",
    tools: "Python · FastAPI · AWS · GCP · Spark · CI/CD",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Pranav Bidve, home">
          PB<span className="accent">.</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="contact-link" href="mailto:pranavbidve12@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Founding AI Engineer at Qosmic AI</div>
        <h1>
          Pranav Milind
          <br />
          <span>Bidve</span>
        </h1>
        <div className="hero-bottom">
          <p className="role">AI/ML ENGINEER</p>
          <p className="intro">
            I build production-grade agentic systems, RAG pipelines, and LLM
            evaluation frameworks that turn complex AI capabilities into
            reliable products.
          </p>
          <a className="scroll-cue" href="#experience">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">AI</span>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="section-label">01 / EXPERIENCE</p>
          <h2>Building intelligent systems that ship.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-meta">
                <p>{item.period}</p>
                <div className="node" aria-hidden="true" />
              </div>
              <div className="experience-body">
                <div className="experience-title">
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                </div>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tags">
                  {item.stack.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="subheading">
          <p className="section-label">SELECTED BUILDS</p>
          <p>Systems designed around evidence, reliability, and real-world use.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="card-top">
                <span>{project.index}</span>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
                  Repository ↗
                </a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="research">
        <div className="section-heading">
          <p className="section-label">02 / RESEARCH & PUBLICATIONS</p>
          <h2>Studying what makes machine intelligence work.</h2>
        </div>
        <div className="publication-list">
          <article className="publication featured-publication">
            <div className="publication-meta">
              <span>2026</span>
              <span>ACL ARR · UNDER REVIEW</span>
            </div>
            <div>
              <h3>SLiM-Eval: Task-Sensitive Analysis of Quantization Trade-offs in Small Language Models</h3>
              <p>
                A systematic study across five instruction-tuned SLMs, three
                quantization methods, and two hardware platforms. The work finds
                that reasoning tasks degrade 3–10× more than factual tasks under
                INT4 quantization.
              </p>
              <div className="publication-actions">
                <a href="https://openreview.net/forum?id=WaqIk3VaiZ" target="_blank" rel="noreferrer">OpenReview ↗</a>
                <a href="https://openreview.net/pdf?id=WaqIk3VaiZ" target="_blank" rel="noreferrer">View paper ↗</a>
              </div>
            </div>
          </article>
          <article className="publication">
            <div className="publication-meta">
              <span>2024</span>
              <span>SPRINGER · ISDA 2023</span>
            </div>
            <div>
              <h3>An Ensemble Multinomial Naïve Bayes Classifier for Overlapping Prakriti Detection</h3>
              <p>
                An ensemble machine-learning approach combining k-modes
                clustering and Multinomial Naïve Bayes to identify overlapping
                Prakriti types.
              </p>
              <p className="authors">Pranav Bidve · Shalini Mishra · Annapurna Jonnalagadda</p>
              <div className="publication-actions">
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-64850-2_45" target="_blank" rel="noreferrer">Springer ↗</a>
              </div>
            </div>
          </article>
        </div>
        <a className="scholar-link" href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=pScw42QAAAAJ" target="_blank" rel="noreferrer">
          <span>Explore the complete research profile</span>
          <strong>Google Scholar ↗</strong>
        </a>
      </section>

      <section className="section" id="capabilities">
        <div className="section-heading">
          <p className="section-label">03 / TECHNICAL CAPABILITIES</p>
          <h2>Across the full AI product lifecycle.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>{item.tools}</small>
            </article>
          ))}
        </div>
        <div className="skill-strip" aria-label="Additional technical skills">
          <span>PyTorch</span><span>TensorFlow</span><span>Scikit-Learn</span>
          <span>TypeScript</span><span>Postgres</span><span>Snowflake</span>
          <span>Airflow</span><span>ONNX</span><span>Docker</span>
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-heading">
          <p className="section-label">04 / EDUCATION</p>
          <h2>A foundation in data, systems, and learning.</h2>
        </div>
        <div className="education-list">
          <article>
            <div>
              <p>2024 — 2025</p>
              <h3>Columbia University</h3>
              <h4>Master of Science, Data Science</h4>
            </div>
            <p>
              Coursework in deep learning for NLP, LLM-based generative AI,
              scaling LLMs, machine learning, and statistical inference.
              Teaching Assistant for Neural Networks & Deep Learning, Computer
              Graphics, and Business Analytics.
            </p>
          </article>
          <article>
            <div>
              <p>2020 — 2024</p>
              <h3>Vellore Institute of Technology</h3>
              <h4>Bachelor of Technology, Computer Science and Engineering</h4>
            </div>
            <p>
              Built a broad computer-science foundation and began applied
              machine-learning research spanning classification and ensemble
              methods.
            </p>
          </article>
        </div>
      </section>

      <section className="section resume-section" id="resume">
        <div className="section-heading compact-heading">
          <div>
            <p className="section-label">05 / RÉSUMÉ</p>
            <h2>The complete picture.</h2>
          </div>
          <a className="primary-button" href="/Pranav-Milind-Bidve-Resume.pdf" download>
            Download résumé ↓
          </a>
        </div>
        <div className="resume-frame">
          <object data="/Pranav-Milind-Bidve-Resume.pdf" type="application/pdf" aria-label="Pranav Milind Bidve résumé">
            <p>
              Your browser cannot display the PDF.{" "}
              <a href="/Pranav-Milind-Bidve-Resume.pdf" download>Download the résumé.</a>
            </p>
          </object>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">06 / CONTACT</p>
        <p className="contact-kicker">Let&apos;s build what&apos;s next.</p>
        <a className="email-link" href="mailto:pranavbidve12@gmail.com">
          pranavbidve12@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-bottom">
          <div className="social-links">
            <a href="https://linkedin.com/in/pranavbidve" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/pranavbidve" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=pScw42QAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Pranav Milind Bidve</p>
        <p>AI/ML Engineer · Building reliable intelligence</p>
      </footer>
    </main>
  );
}
