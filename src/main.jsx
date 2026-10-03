import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, BookOpen, Boxes, ChevronRight, Cloud, CloudCog, Code2, Container, Cpu, Database, GitBranch, GraduationCap, Menu, Moon, Network, Play, Search, ShieldCheck, Sun, TerminalSquare, Workflow, X, Zap, BriefcaseBusiness, ShoppingBag, Handshake, Mail, Sparkles } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";
import { projects, skills, journey, commandLibrary, courses } from "./data";
import { SITE, NAV_ITEMS } from "./config/site";
import { TopicIcon } from "./components/common/TopicIcon";
import { SectionHeading } from "./components/common/SectionHeading";
import { SkillDetails } from "./components/details/SkillDetails";
import { ProjectDetails } from "./components/details/ProjectDetails";
import "./styles.css";

const navItems = NAV_ITEMS;

function NetworkScene() {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.035;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
  });
  const points = [
    [-2.6, 1.15, 0], [-1.1, 1.75, -0.4], [0.55, 1.35, 0.1], [2.2, 0.75, -0.3],
    [-2.1, -0.25, 0.4], [-0.45, -0.65, -0.2], [1.3, -0.45, 0.35], [2.5, -1.1, -0.2]
  ];
  const edges = [[0,1],[1,2],[2,3],[0,4],[1,5],[2,5],[2,6],[3,6],[4,5],[5,6],[6,7]];
  return (
    <group ref={group}>
      {edges.map(([a,b], i) => <Line key={i} points={[points[a], points[b]]} color="#22d3ee" transparent opacity={0.3} lineWidth={0.8} />)}
      {points.map((p, i) => (
        <Float key={i} speed={1 + i * .08} rotationIntensity={0.2} floatIntensity={0.45}>
          <Sphere args={[i === 5 ? .16 : .11, 16, 16]} position={p}>
            <meshStandardMaterial color={i === 5 ? "#a78bfa" : "#22d3ee"} emissive={i === 5 ? "#7c3aed" : "#0891b2"} emissiveIntensity={3.4} roughness={0.25} metalness={0.8} />
          </Sphere>
        </Float>
      ))}
      <Float speed={1.2} floatIntensity={0.7}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.65, 2]} />
          <meshPhysicalMaterial color="#0b1224" emissive="#0e7490" emissiveIntensity={1.1} metalness={0.8} roughness={0.16} transparent opacity={0.88} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

const heroFade = {
  hidden: { opacity: 0, y: 22, filter: 'blur(7px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: .95, ease: [0.16, 1, 0.3, 1] } }
};

function App() {
  const [active, setActive] = useState(() => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return navItems.includes(path) ? path : "home";
  });
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [terminalLine, setTerminalLine] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem("pankaj-theme") || "dark");
  const [contact, setContact] = useState({ name: "", role: "", message: "" });
  const [contactCopied, setContactCopied] = useState(false);
  const [capReset, setCapReset] = useState(0);

  const commands = [
    ["$ docker ps", "2 containers running • web • db"],
    ["$ kubectl get pods", "portfolio-api   Running   2/2"],
    ["$ terraform plan", "Plan: 5 to add • 0 to change • 0 to destroy"],
    ["$ git status", "working tree clean • ready to ship"]
  ];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("pankaj-theme", theme);
  }, [theme]);

  useEffect(() => {
    const t = setInterval(() => setTerminalLine((x) => (x + 1) % commands.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
      setActive(navItems.includes(path) ? path : "home");
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 20) setNavHidden(false);
      else if (currentY > lastScrollY.current + 8) setNavHidden(true);
      else if (currentY < lastScrollY.current - 8) setNavHidden(false);
      lastScrollY.current = currentY;
    };
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const visibleProjects = useMemo(() => projects.filter(p => {
    const matchesFilter = filter === "All" || p.category === filter;
    const hay = `${p.title} ${p.category} ${p.summary} ${p.tools.join(" ")}`.toLowerCase();
    return matchesFilter && hay.includes(query.toLowerCase());
  }), [filter, query]);

  const go = (id) => {
    setMobileNav(false);
    setSelected(null);
    setNavHidden(false);
    const path = id === "home" ? "/" : `/${id}`;
    if (window.location.pathname !== path) window.history.pushState({}, "", path);
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" /><div className="ambient ambient-b" />
      <header className={`topbar ${navHidden ? "nav-hidden" : "nav-visible"}`}>
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">PK</span>
          <span><b>PANKAJ</b><small> CLOUD / DEVOPS</small></span>
        </button>
        <nav className={mobileNav ? "nav open" : "nav"}>
          {navItems.map(item => <button key={item} className={active === item ? "active" : ""} onClick={() => go(item)}>{item}</button>)}
        </nav>
        <button className="menu" onClick={() => setMobileNav(!mobileNav)} aria-label="menu">{mobileNav ? <X/> : <Menu/>}</button>
        <div className="topbar-actions">
          <button className="theme-toggle" onClick={() => setTheme(t => t === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Sun size={15}/> : <Moon size={15}/>}<span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
          </button>
          <button className="status"><i/> OPEN TO OPPORTUNITIES</button>
        </div>
      </header>

      <main>
        {active === "home" && (
        <section id="home" className="hero-premium-image">
          <div className="hero-bg-image">
            <img src="/hero-background.png" alt="Pankaj Kumar working in a Cloud and DevOps workspace" />
            <div className="hero-image-shade" />
            <div className="hero-image-grid" />
          </div>
          <div className="hero-premium-inner">
            <div className="hero-premium-main">
              <motion.div className="hero-premium-copy" initial="hidden" animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:.11,delayChildren:.15}}}}>
                <motion.div className="hero-premium-eyebrow hero-float-a" variants={heroFade}><span/> CLOUD ENGINEERING / DEVOPS / AUTOMATION</motion.div>
                <motion.h1 variants={heroFade} className="hero-3d-title"><span>HI, I'M</span><span>PANKAJ</span><span>KUMAR.</span></motion.h1>
                <motion.div className="hero-premium-role hero-float-b" variants={heroFade}>PANKAJ KUMAR <b>•</b> CLOUD <b>•</b> DEVOPS <b>•</b> SECURITY</motion.div>
                <motion.p variants={heroFade} className="hero-float-c">I'm <strong>Pankaj Kumar</strong> — a developer moving deeper into Cloud and DevOps through hands-on infrastructure, containers, automation and security labs.</motion.p>
                <motion.div className="hero-premium-actions hero-float-d" variants={heroFade}><button className="premium-primary hero-3d-button" onClick={() => go("projects")}><Play size={15} fill="currentColor"/> EXPLORE PROJECTS</button><button className="premium-secondary hero-3d-button" onClick={() => go("command")}>ENGINEERING COMMAND CENTER <TerminalSquare size={15}/></button></motion.div>
                <motion.div className="hero-premium-metrics hero-float-e" variants={heroFade}><div><strong>{String(projects.length).padStart(2,"0")}+</strong><span>PROJECT LABS</span></div><div><strong>{String(skills.length).padStart(2,"0")}</strong><span>ENGINEERING SKILLS</span></div><div><strong>{String(courses.length).padStart(2,"0")}</strong><span>COURSES / TRACKS</span></div></motion.div>
              </motion.div>
              <motion.div className="hero-premium-visual hero-3d-space" initial={{opacity:0,x:35}} animate={{opacity:1,x:0}} transition={{duration:1.1,delay:.5,ease:[.16,1,.3,1]}}>
                <div className="hero-orbit-line orbit-h"/><div className="hero-orbit-line orbit-v"/>
                <motion.img className="hero-floating-mark" src="/watermark.png" alt="Engineering mark" animate={{y:[0,-14,0],rotate:[0,5,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}/>
                <motion.div className="hero-node-label node-cloud" animate={{x:[0,12,0],y:[0,-9,0]}} transition={{duration:4.5,repeat:Infinity,ease:"easeInOut"}}><Cloud size={13}/> CLOUD</motion.div>
                <motion.div className="hero-node-label node-container" animate={{x:[0,-10,0],y:[0,12,0]}} transition={{duration:5.2,repeat:Infinity,ease:"easeInOut"}}><Container size={13}/> CONTAINERS</motion.div>
                <motion.div className="hero-node-label node-cicd" animate={{x:[0,9,0],y:[0,10,0]}} transition={{duration:4.1,repeat:Infinity,ease:"easeInOut"}}><GitBranch size={13}/> CI / CD</motion.div>
                <motion.div className="hero-node-label node-security" animate={{x:[0,-11,0],y:[0,-8,0]}} transition={{duration:5.7,repeat:Infinity,ease:"easeInOut"}}><ShieldCheck size={13}/> SECURITY</motion.div>
                <motion.div className="hero-portrait-frame hero-float-portrait"><img src="/profile.png" alt="Pankaj Kumar"/><div className="hero-portrait-gradient"/><div className="hero-portrait-info"><b>Pankaj Kumar</b><span>Cloud | DevOps | Security</span></div><div className="hero-scan-line"/></motion.div>
                <div className="hero-topology"><span>LIVE TOPOLOGY</span><b>8 NODES</b><i/></div>
              </motion.div>
            </div>
            <div className="hero-premium-footer"><span>SCROLL TO EXPLORE</span><i><b/></i><span>01 / HOME</span></div>
          </div>
        </section>
        )}

        {active === "skills" && (
        <section id="skills" className="section skills-section">
          <SectionHeading kicker="01 / ENGINEERING MAP" title="Explore the systems I am building." copy="Drag the spheres, watch them travel through the field, or click one to inspect the practical proof behind the skill." />
          <SkillSphereField skills={skills} onSelect={(c)=>setSelected({skill:c})} onReset={()=>{setSelected(null);setCapReset(v=>v+1);}} resetKey={capReset} />
        </section>
        )}

        {active === "command" && (
        <section id="command" className="section command-section">
          <SectionHeading
            kicker="02 / COMMAND LIBRARY"
            title="Don't just see the command. Understand it."
            copy="Select a technology, choose a command and the explanation changes instantly. This section is designed as a mini learning lab for recruiters, developers and anyone exploring your engineering workflow."
          />

          <CommandExplorer />
        </section>
        )}

        {active === "projects" && (
        <section id="projects" className="section projects-section">
          <SectionHeading kicker="03 / SELECTED WORK" title="Projects with the story behind the code." copy="Click any project. The case-study panel is data-driven, so adding another project means adding one object — not rebuilding the page." />
          <div className="project-tools">
            <div className="search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects, tools, domains..."/></div>
            <div className="filters">{categories.map(c=><button key={c} className={filter===c?"selected":""} onClick={()=>setFilter(c)}>{c}</button>)}</div>
          </div>
          <ProjectCarousel projects={visibleProjects} onOpen={(p)=>setSelected({project:p})} />
        </section>
        )}

        {active === "journey" && (
        <section id="journey" className="section journey-section">
          <SectionHeading kicker="04 / LEARNING TRAJECTORY" title="The path is part of the portfolio." copy="A transparent learning journey shows progression. Future tracks include CEH v13 with AI as the security path expands." />
          <JourneyCarousel />
        </section>
        )}

        {active === "contact" && (
        <section id="contact" className="section contact-section">
          <div className="contact-premium">
            <div className="contact-collage contact-intents">
              <motion.div className="contact-tile tile-terminal" whileHover={{y:-8,rotateX:2,rotateY:-2}} transition={{type:"spring",stiffness:260,damping:18}}>
                <div className="contact-tile-bg"><span className="intent-number">01</span><div className="intent-orbit"/></div><div className="tile-full"><BriefcaseBusiness/><span className="tile-kicker">COLLABORATION</span><strong>WANT TO WORK WITH ME?</strong><p>Build a real project, infrastructure lab or automation workflow together.</p><b>START A PROJECT <ArrowUpRight size={14}/></b></div>
              </motion.div>
              <motion.div className="contact-tile tile-cloud" whileHover={{y:-8,rotateX:2,rotateY:2}} transition={{type:"spring",stiffness:260,damping:18}}>
                <div className="contact-tile-bg"><span className="intent-number">02</span><div className="intent-orbit"/></div><div className="tile-full"><GraduationCap/><span className="tile-kicker">COURSES</span><strong>WANT TO BUY A COURSE?</strong><p>Ask about future Cloud, DevOps and practical security learning tracks.</p><b>ASK ABOUT COURSES <ArrowUpRight size={14}/></b></div>
              </motion.div>
              <motion.div className="contact-tile tile-security" whileHover={{y:-8,rotateX:-2,rotateY:-2}} transition={{type:"spring",stiffness:260,damping:18}}>
                <div className="contact-tile-bg"><span className="intent-number">03</span><div className="intent-orbit"/></div><div className="tile-full"><Handshake/><span className="tile-kicker">CONTRACTUAL</span><strong>NEED INFRA / DEVOPS WORK?</strong><p>Short-term automation, containerization, deployment or infrastructure support.</p><b>DISCUSS THE WORK <ArrowUpRight size={14}/></b></div>
              </motion.div>
              <motion.div className="contact-tile tile-pipeline" whileHover={{y:-8,rotateX:-2,rotateY:2}} transition={{type:"spring",stiffness:260,damping:18}}>
                <div className="contact-tile-bg"><span className="intent-number">04</span><div className="intent-orbit"/></div><div className="tile-full"><Sparkles/><span className="tile-kicker">SOMETHING ELSE</span><strong>HAVE AN IDEA?</strong><p>Internship, mentoring, collaboration or an unusual engineering problem.</p><b>LET'S TALK <ArrowUpRight size={14}/></b></div>
              </motion.div>
              <div className="contact-collage-caption"><span>PK / 2026</span><b>CLOUD • DEVOPS • SECURITY</b></div>
            </div>
            <div className="contact-form-side">
              <div className="contact-form-kicker">05 / LET'S CONNECT</div>
              <h2>LET'S WORK <em>TOGETHER.</em></h2>
              <p>Have a project, internship, collaboration or infrastructure problem in mind? Fill this out and send it directly through Gmail or your device's email app.</p>
              <div className="contact-email-address">
                <Mail size={15} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <form
                className="contact-form-grid"
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = `Portfolio enquiry — ${contact.role}`;
                  const body = `Hello Pankaj,\n\nName: ${contact.name}\nProject / Role: ${contact.role}\n\n${contact.message}\n\nSent from your portfolio.`;
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.open(gmailUrl, "_blank", "noopener,noreferrer");
                  setContactCopied(true);
                }}
              >
                <label>
                  FULL NAME
                  <input
                    required
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  PROJECT / ROLE
                  <input
                    required
                    value={contact.role}
                    onChange={(e) => setContact({ ...contact, role: e.target.value })}
                    placeholder="Cloud, DevOps, internship, collaboration..."
                  />
                </label>
                <label className="wide">
                  MESSAGE
                  <textarea
                    required
                    value={contact.message}
                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                    placeholder="Tell me about your project, goals or opportunity..."
                  />
                </label>
                <button className="contact-send" type="submit">
                  {contactCopied ? "GMAIL COMPOSE OPENED" : "SEND VIA GMAIL"}
                  <ArrowUpRight size={16} />
                </button>
                <button
                  className="contact-send contact-send-secondary"
                  type="button"
                  onClick={() => {
                    const subject = `Portfolio enquiry — ${contact.role || "Let's connect"}`;
                    const body = `Hello Pankaj,\n\nName: ${contact.name}\nProject / Role: ${contact.role}\n\n${contact.message}`;
                    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                >
                  OPEN EMAIL APP
                  <Mail size={16} />
                </button>
              </form>
              <div className="contact-direct">
                <a href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
                <span> • </span>
                <a href={`mailto:${SITE.email}`}>Email {SITE.email}</a>
              </div>
              <div className="contact-socials">
                {SITE.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}
      </main>

        {active === "about" && (
          <section id="about" className="section page-section about-page">
            <SectionHeading kicker="01 / ABOUT PANKAJ" title="A hands-on engineer building toward Cloud, DevOps and Security." copy="This is the person behind the projects: an MCA learner with a Full Stack Web Development foundation who is building practical Cloud, DevOps and security skills through projects and labs." />
            <div className="about-profile-grid">
              <motion.article className="about-profile-card" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}>
                <div className="about-profile-portrait"><img src="/profile.png" alt="Pankaj Kumar"/><div className="portrait-badge"><span/> AVAILABLE FOR OPPORTUNITIES</div></div>
                <div className="about-profile-copy"><span className="about-kicker">PANKAJ KUMAR / CLOUD • DEVOPS • SECURITY</span><h3>I build by understanding what happens underneath.</h3><p>My focus is practical infrastructure: Linux, networking, containers, Kubernetes, automation, CI/CD and security. I prefer project labs and troubleshooting over memorising isolated commands.</p><div className="about-signature">PK <span>BUILD • DEBUG • AUTOMATE • SECURE</span></div></div>
              </motion.article>
              <div className="about-detail-stack">
                <article><div className="about-detail-icon"><GraduationCap/></div><div><small>EDUCATION</small><h4>MCA — Amity University</h4><p>Academic background supporting the transition into software, infrastructure and security engineering.</p></div></article>
                <article><div className="about-detail-icon"><Code2/></div><div><small>FOUNDATION</small><h4>Full Stack Web Development — Coding Ninjas</h4><p>Completed full-stack development training that supports application understanding before deployment and automation.</p></div></article>
                <article><div className="about-detail-icon"><CloudCog/></div><div><small>CURRENT DIRECTION</small><h4>Cloud / DevOps / Security</h4><p>Building practical projects around Docker, Kubernetes, Linux, CI/CD, Terraform, networking and secure infrastructure.</p></div></article>
                <article><div className="about-detail-icon"><ShieldCheck/></div><div><small>SECURITY LEARNING</small><h4>Security+ • CEH • CISSP training</h4><p>Security-focused training through Simplilearn, with CEH v13 + AI planned as a future learning track. These are learning/training items, not claimed earned certifications.</p></div></article>
              </div>
            </div>
            <div className="about-principles"><span>HOW I WORK</span><div><b>01</b><strong>BUILD</strong><small>Turn concepts into working labs.</small></div><div><b>02</b><strong>DEBUG</strong><small>Read logs, test assumptions and find the root cause.</small></div><div><b>03</b><strong>AUTOMATE</strong><small>Remove repetitive work with scripts and pipelines.</small></div><div><b>04</b><strong>SECURE</strong><small>Carry security thinking into infrastructure decisions.</small></div></div>
          </section>
        )}

        {active === "certifications" && (
          <section id="certifications" className="section page-section certifications-page">
            <SectionHeading kicker="05 / CERTIFICATIONS" title="Training now. Certifications next." copy="The portfolio separates completed learning from future certification goals. Simplilearn training is listed as training, not as an earned credential." />
            <div className="credential-grid">{[
              ["CompTIA Security+","Simplilearn training / Security foundation","security","TRAINING"],
              ["Certified Ethical Hacker (CEH)","Simplilearn training / Ethical hacking","security","TRAINING"],
              ["CISSP","Simplilearn training / Advanced security track","security","TRAINING"],
              ["Full Stack Web Development","Coding Ninjas / Completed course","web","COMPLETED"],
              ["CEH v13 + AI","Future study track / planned","future","PLANNED"]
            ].map(([title,status,kind,badge])=><article className={`credential-card ${kind}`} key={title}><div className="credential-icon"><TopicIcon topic={title} size={22}/></div><span>{badge}</span><h3>{title}</h3><p>{status}</p><small>{title === "CompTIA Security+" ? "For building foundational cybersecurity knowledge: threats, risk, identity, network security and security operations." : title === "Certified Ethical Hacker (CEH)" ? "For learning offensive-security methodology: reconnaissance, scanning, vulnerabilities, exploitation concepts and defensive awareness." : title === "CISSP" ? "For understanding advanced security architecture, governance, risk management and security-program concepts." : title === "Full Stack Web Development" ? "For understanding how applications are built end-to-end before containerization, deployment and infrastructure automation." : "Planned to deepen ethical-hacking skills with the newer CEH v13 curriculum and AI-related security workflows."}</small></article>)}</div>
          </section>
        )}

        {active === "courses" && (
          <section id="courses" className="section page-section courses-page">
            <SectionHeading kicker="06 / COURSES" title="A future learning space for your own courses." copy="This section is intentionally data-driven. Later you can add your own course title, curriculum, pricing, videos, resources and enrollment link from src/data.js." />
            <div className="course-grid">{courses.map((course,i)=><motion.article className={`course-card course-${course.accent}`} key={course.title} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:i*.08}}><div className="course-visual"><div className="course-orbit"/><BookOpen size={28}/><span>COURSE / {String(i+1).padStart(2,'0')}</span></div><div className="course-meta"><span>{course.level}</span><b>{course.status}</b></div><h3>{course.title}</h3><p>{course.description}</p><div className="course-topics">{course.topics.map(t=><span key={t}><TopicIcon topic={t} size={12}/>{t}</span>)}</div><button className="course-cta" onClick={()=>alert("Course content can be connected here later.")}>VIEW COURSE <ArrowUpRight size={15}/></button></motion.article>)}</div>
            <div className="course-builder-note"><GraduationCap size={20}/><div><b>Easy to expand</b><span>Add another object to <code>courses</code> in <code>src/data.js</code> and it becomes a new course card.</span></div></div>
          </section>
        )}

      <footer className={`site-footer site-footer-${active}`}>
        <div className="footer-variant-glow"/>
        <div className="footer-cta"><div><span className="footer-kicker">{active === "projects" ? "NEXT BUILD" : active === "courses" ? "LEARNING STUDIO" : active === "command" ? "KEEP EXPLORING" : active === "skills" ? "SKILLS CORE" : active === "contact" ? "DIRECT LINE" : "NEXT MOVE"}</span><h3>{active === "projects" ? "Have a system worth building?" : active === "courses" ? "Want to learn with practical labs?" : active === "command" ? "Turn one command into a real skill." : active === "skills" ? "Build the skill, then prove it." : active === "contact" ? "Let's turn the conversation into a build." : "Want to build something useful together?"}</h3><p>{active === "projects" ? "Explore a project, open its case study, or bring a new infrastructure problem." : active === "courses" ? "Future Cloud, DevOps and security courses will live here as they are created." : active === "command" ? "Keep exploring the mechanics behind the tools used in my labs." : active === "skills" ? "Each skill is a learning state that can be strengthened with another project." : active === "contact" ? "Choose the kind of collaboration that fits what you want to build." : "Projects, infrastructure work, course collaborations and practical engineering ideas are welcome."}</p></div><button onClick={()=>go(active === "courses" ? "courses" : "contact")}>{active === "courses" ? "EXPLORE COURSES" : "START A CONVERSATION"} <ArrowUpRight size={16}/></button></div>
        <div className="footer-bottom"><span>© 2026 {SITE.name}</span><nav>{["about","skills","projects","courses","contact"].map(item=><button key={item} onClick={()=>go(item)}>{item}</button>)}</nav><span>STATUS <i/></span></div>
      </footer>

      <AnimatePresence>
        {selected && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
          <motion.aside className="case-panel" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"spring",stiffness:280,damping:28}} onClick={e=>e.stopPropagation()}>
            <button className="close" onClick={()=>setSelected(null)}><X/></button>
            {selected.skill ? <SkillDetails skill={selected.skill}/> : <ProjectDetails project={selected.project}/>}
          </motion.aside>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}



function SkillSphereField({skills: items, onSelect, onReset, resetKey}) {
  const [paused, setPaused] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const physicsRef = useRef([]);
  const rafRef = useRef(null);
  const lastTime = useRef(0);
  const dragRef = useRef({ index: -1, active: false, lastX: 0, lastY: 0, lastT: 0, moved: false });

  const seedPhysics = () => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const h = el.clientHeight;
    const radius = Math.min(56, Math.max(40, Math.min(w, h) * 0.052));
    const top = 76;
    const bottom = h - 76;
    const areaW = Math.max(320, w - radius * 2 - 40);
    const areaH = Math.max(260, bottom - top - radius * 2);
    const cols = Math.min(5, Math.max(3, Math.floor(areaW / (radius * 2 + 22))));
    const rows = Math.max(2, Math.ceil(items.length / cols));
    const gapX = Math.max(radius * 2 + 18, areaW / cols);
    const gapY = Math.max(radius * 2 + 18, areaH / rows);
    const startX = (w - gapX * (cols - 1)) / 2;
    const startY = top + radius + Math.max(0, (areaH - gapY * (rows - 1)) / 2);

    physicsRef.current = items.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const jitterX = ((i * 37) % 15) - 7;
      const jitterY = ((i * 53) % 13) - 6;
      const x = Math.max(radius + 8, Math.min(w - radius - 8, startX + col * gapX + jitterX));
      const y = Math.max(top + radius, Math.min(bottom - radius, startY + row * gapY + jitterY));
      const angle = (i * 2.399963) % (Math.PI * 2);
      const speed = 0.045 + (i % 4) * 0.012;
      return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, r: radius };
    });
    physicsRef.current.forEach((p, i) => {
      const node = nodeRefs.current[i];
      if (node) node.style.transform = `translate3d(${p.x - p.r}px, ${p.y - p.r}px, 0)`;
    });
  };

  const pointerPosition = (event) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const beginDrag = (index, event) => {
    const pos = pointerPosition(event);
    if (!pos || !physicsRef.current[index]) return;
    event.preventDefault();
    event.stopPropagation();
    const body = physicsRef.current[index];
    dragRef.current = { index, active: true, lastX: pos.x, lastY: pos.y, lastT: performance.now(), moved: false };
    body.vx = 0;
    body.vy = 0;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  };

  const moveDrag = (index, event) => {
    const drag = dragRef.current;
    if (!drag.active || drag.index !== index) return;
    const pos = pointerPosition(event);
    const body = physicsRef.current[index];
    const el = containerRef.current;
    if (!pos || !body || !el) return;
    const now = performance.now();
    const dt = Math.max(8, now - drag.lastT);
    const minX = body.r + 6, maxX = el.clientWidth - body.r - 6;
    const minY = 76 + body.r, maxY = el.clientHeight - body.r - 76;
    body.x = Math.max(minX, Math.min(maxX, pos.x));
    body.y = Math.max(minY, Math.min(maxY, pos.y));
    body.vx = Math.max(-0.7, Math.min(0.7, (body.x - drag.lastX) / dt));
    body.vy = Math.max(-0.7, Math.min(0.7, (body.y - drag.lastY) / dt));
    drag.lastX = body.x; drag.lastY = body.y; drag.lastT = now; drag.moved = true;
    const node = nodeRefs.current[index];
    if (node) node.style.transform = `translate3d(${body.x - body.r}px, ${body.y - body.r}px, 0) scale(1.06)`;
  };

  const endDrag = (index) => {
    if (dragRef.current.index !== index) return;
    nodeRefs.current[index]?.classList.remove("is-dragging");
    dragRef.current.active = false;
    dragRef.current.index = -1;
  };

  useEffect(() => {
    setSelectedName(null);
    setPaused(false);
    const timer = setTimeout(seedPhysics, 40);
    const onResize = () => seedPhysics();
    window.addEventListener("resize", onResize);
    return () => { clearTimeout(timer); window.removeEventListener("resize", onResize); };
  }, [resetKey, items.length]);

  useEffect(() => {
    const tick = (time) => {
      if (!lastTime.current) lastTime.current = time;
      const dt = Math.min(32, time - lastTime.current);
      lastTime.current = time;
      const el = containerRef.current;
      const bodies = physicsRef.current;
      if (!el || paused || !bodies.length) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const w = el.clientWidth;
      const h = el.clientHeight;
      bodies.forEach((p, idx) => {
        if (dragRef.current.active && dragRef.current.index === idx) return;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        const minX = p.r + 6, maxX = w - p.r - 6;
        const minY = 76 + p.r, maxY = h - p.r - 76;
        if (p.x <= minX || p.x >= maxX) { p.x = Math.max(minX, Math.min(maxX, p.x)); p.vx *= -1; }
        if (p.y <= minY || p.y >= maxY) { p.y = Math.max(minY, Math.min(maxY, p.y)); p.vy *= -1; }
      });
      for (let i=0;i<bodies.length;i++) for (let j=i+1;j<bodies.length;j++) {
        if ((dragRef.current.active && dragRef.current.index === i) || (dragRef.current.active && dragRef.current.index === j)) continue;
        const a=bodies[i], b=bodies[j], dx=b.x-a.x, dy=b.y-a.y, dist=Math.hypot(dx,dy)||1, minDist=a.r+b.r;
        if (dist < minDist) {
          const nx=dx/dist, ny=dy/dist, overlap=(minDist-dist)/2;
          a.x-=nx*overlap; a.y-=ny*overlap; b.x+=nx*overlap; b.y+=ny*overlap;
          const rel=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny;
          if (rel > 0) { a.vx-=rel*nx; a.vy-=rel*ny; b.vx+=rel*nx; b.vy+=rel*ny; }
        }
      }
      bodies.forEach((p,i)=>{ const node=nodeRefs.current[i]; if(node) node.style.transform=`translate3d(${p.x-p.r}px,${p.y-p.r}px,0)`; });
      rafRef.current=requestAnimationFrame(tick);
    };
    rafRef.current=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(rafRef.current);
  }, [paused, items.length]);

  return <div className="sphere-lab">
    <div className="sphere-lab-toolbar"><span><i/> PLAYABLE SKILLS FIELD</span><button onClick={()=>setPaused(v=>!v)}>{paused ? "RESUME MOTION" : "PAUSE MOTION"}</button><button onClick={onReset}>RESET FIELD</button></div>
    <div className="sphere-stage" ref={containerRef} onDoubleClick={()=>setPaused(v=>!v)}>
      <div className="sphere-grid"/>
      <div className="sphere-wall-label top">SKILL SPACE / COLLISION ACTIVE</div>
      {items.map((c,i)=><button
        ref={el=>nodeRefs.current[i]=el}
        key={`${c.name}-${resetKey}`}
        className={`skill-sphere sphere-${i} ${selectedName===c.name?'selected':''}`}
        onClick={()=>{ if (!dragRef.current.moved) { setSelectedName(c.name); onSelect(c); } dragRef.current.moved=false; }}
        onPointerDown={(e)=>beginDrag(i,e)}
        onPointerMove={(e)=>moveDrag(i,e)}
        onPointerUp={()=>endDrag(i)}
        onPointerCancel={()=>endDrag(i)}
        onLostPointerCapture={()=>endDrag(i)}
        title={`${c.name} — ${c.level}`}
      ><span className="sphere-icon"><TopicIcon topic={c.name} size={17}/></span><b>{c.name}</b><small>{c.level}</small></button>)}
      <div className="sphere-hud"><span>{items.length} SKILLS</span><span>{selectedName ? `SELECTED / ${selectedName}` : "SELECT A SPHERE TO INSPECT"}</span></div>
    </div>
    <div className="sphere-note"><Sparkles size={15}/><span>Each sphere has velocity, wall bounce and sphere-to-sphere collision. Drag a skill anywhere inside the field, release it, or click it to inspect the skill.</span></div>
  </div>;
}

function ProjectCarousel({ projects: items, onOpen }) {
  const [active, setActive] = useState(0);
  useEffect(() => { setActive(0); }, [items.length]);
  useEffect(() => {
    if (items.length < 2) return;
    const timer = setInterval(() => setActive(i => (i + 1) % items.length), 5200);
    return () => clearInterval(timer);
  }, [items.length]);
  if (!items.length) return <div className="empty-state">No project matches the current filter.</div>;
  const rotate = (direction) => setActive(i => (i + direction + items.length) % items.length);
  const position = (index) => {
    let d = index - active;
    if (d > items.length / 2) d -= items.length;
    if (d < -items.length / 2) d += items.length;
    return d;
  };
  const radius = 350;
  return <div className="project-carousel-ring">
    <div className="ring-header"><span>PROJECT CAROUSEL</span><b>DRAG / CLICK / ROTATE</b></div>
    <div className="ring-viewport">
      <div className="ring-stage">
        <div className="ring-core-glow"/>
        <div className="ring-track ring-track-a"/><div className="ring-track ring-track-b"/>
        {items.map((p,index)=>{
          const d=position(index);
          const angle=d*(360/Math.max(items.length,3));
          const abs=Math.abs(d);
          const visible=abs<=Math.ceil(items.length/2);
          return <motion.button key={p.id} className={`ring-card ${d===0?'active':''}`}
            animate={{
              transform:`rotateY(${angle}deg) translateZ(${radius}px) rotateY(${-angle}deg) translateY(${abs*22}px)`,
              opacity:visible?(d===0?1:abs===1?.72:.26):0,
              scale:d===0?1:abs===1?.82:.66,
              filter:d===0?'blur(0px)':`blur(${Math.min(abs*1.1,3)}px)`
            }}
            transition={{type:'spring',stiffness:95,damping:18,mass:.8}}
            style={{zIndex:40-abs}}
            onClick={()=>d===0?onOpen(p):setActive(index)}>
              <div className="ring-card-shine"/>
              <div className="ring-card-top"><span>{p.category}</span><b>{p.status}</b></div>
              <div className="ring-card-architecture">{p.architecture?.map((a,j)=><React.Fragment key={a}><span>{a}</span>{j<(p.architecture?.length||0)-1&&<i>→</i>}</React.Fragment>) || <><span>CODE</span><i>→</i><span>DEPLOY</span></>}</div>
              <div className="ring-card-number">{String(index+1).padStart(2,'0')}</div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="ring-card-tools">{p.tools.slice(0,4).map(t=><span key={t}><TopicIcon topic={t} size={12}/>{t}</span>)}</div>
              <div className="ring-card-open">{d===0?'OPEN CASE STUDY':'SELECT PROJECT'} <ArrowUpRight size={14}/></div>
          </motion.button>
        })}
      </div>
    </div>
    <button className="ring-nav ring-nav-left" onClick={()=>rotate(-1)} aria-label="previous project">←</button>
    <button className="ring-nav ring-nav-right" onClick={()=>rotate(1)} aria-label="next project">→</button>
    <div className="ring-footer"><span>{String(active+1).padStart(2,'0')}</span><i><b style={{width:`${((active+1)/items.length)*100}%`}}/></i><span>{String(items.length).padStart(2,'0')}</span><small>CLICK A CARD TO EXPLORE</small></div>
  </div>;
}

function JourneyCarousel() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  useEffect(() => {
    const timer = setInterval(() => setActive(i => (i + 1) % journey.length), 4200);
    return () => clearInterval(timer);
  }, []);
  const rotate = (direction) => setActive(i => (i + direction + journey.length) % journey.length);
  const iconFor = (index) => [TerminalSquare, Network, Container, Boxes, CloudCog, Workflow, ShieldCheck, ShieldCheck][index % 8];
  return <div className="journey-carousel premium-journey">
    <div className="journey-orbit-label"><span>LEARNING TRAJECTORY</span><b>CLICK ANY CARD</b></div>
    <button className="journey-arrow left" onClick={() => rotate(-1)} aria-label="previous learning step">←</button>
    <div className="journey-stage journey-stage-wide">
      {journey.map(([key,title,copy], index) => {
        let d = index - active;
        if (d > journey.length / 2) d -= journey.length;
        if (d < -journey.length / 2) d += journey.length;
        const abs = Math.abs(d);
        const Icon = iconFor(index);
        const hidden = abs > 3;
        return <motion.button key={title} className={`journey-card ${d===0?'is-active':''} ${hovered===index?'is-hovered':''}`}
          initial={false}
          animate={{x:d*205, y:abs*22, scale:d===0?1.04:Math.max(.66,1-abs*.105), rotateY:d*-11, rotateZ:d*1.4, opacity:hidden?.0:(d===0?1:abs===1?.92:abs===2?.68:.4), filter:d===0?'blur(0px)':`blur(${Math.min(abs*.7,2.4)}px)`}}
          transition={{type:'spring',stiffness:115,damping:18,mass:.8}}
          style={{zIndex:hovered===index?60:50-abs}}
          onMouseEnter={()=>setHovered(index)} onMouseLeave={()=>setHovered(null)}
          onClick={()=>setActive(index)}
          aria-label={`Show ${title} learning step`}>
            <div className="journey-card-glow"/>
            <div className="journey-card-visual"><Icon size={32}/><span>{index < 4 ? "FOUNDATION" : "ADVANCING"}</span></div>
            <div className="journey-card-top"><span>{d===0?'CURRENT FOCUS':'LEARNING STEP'}</span><b>STEP {String(index+1).padStart(2,'0')} / {String(journey.length).padStart(2,'0')}</b></div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <div className="journey-card-bottom"><span>FOUNDATION → PRACTICE → DEPLOY</span><ArrowUpRight size={15}/></div>
          </motion.button>;
      })}
    </div>
    <button className="journey-arrow right" onClick={() => rotate(1)} aria-label="next learning step">→</button>
    <div className="journey-hint"><span>←</span> SIDE CARDS ARE CLICKABLE <span>→</span></div>
  </div>;
}

function CommandExplorer() {
  const techs = Object.keys(commandLibrary);
  const [tech, setTech] = useState("Docker");
  const [selectedCommand, setSelectedCommand] = useState(commandLibrary.Docker.groups[0].commands[0]);
  const current = commandLibrary[tech];

  useEffect(() => {
    setSelectedCommand(commandLibrary[tech].groups[0].commands[0]);
  }, [tech]);

  const chooseTech = (name) => setTech(name);
  const chooseCommand = (command) => setSelectedCommand(command);

  return (
    <div className="command-explorer">
      <div className="command-techbar">
        {techs.map((name, i) => (
          <button
            key={name}
            className={tech === name ? "tech-chip active" : "tech-chip"}
            onClick={() => chooseTech(name)}
          >
            <span className="command-tech-icon">{name === "Docker" ? <TopicIcon topic="Docker" size={18}/> : name === "Kubernetes" ? <TopicIcon topic="Kubernetes" size={18}/> : name === "Git / GitHub" ? <GitBranch size={18}/> : name === "CI/CD" ? <Workflow size={18}/> : name === "Terraform" ? <TopicIcon topic="Infrastructure as Code" size={18}/> : <TopicIcon topic="Nginx" size={18}/>}</span>
            {name}
          </button>
        ))}
      </div>

      <div className="command-workspace">
        <aside className="command-sidebar">
          <div className="command-sidebar-head">
            <span>{current.eyebrow}</span>
            <b>{tech}</b>
          </div>
          <p>{current.description}</p>

          <div className="command-groups">
            {current.groups.map((group) => (
              <div className="command-group" key={group.title}>
                <h4>{group.title}</h4>
                {group.commands.map((cmd) => (
                  <button
                    key={cmd.code}
                    className={selectedCommand.code === cmd.code ? "command-item active" : "command-item"}
                    onClick={() => chooseCommand(cmd)}
                  >
                    <span className="command-prompt">$</span>
                    <code>{cmd.code}</code>
                    <ChevronRight size={13}/>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </aside>

        <div className="command-detail">
          <div className="command-detail-head">
            <div>
              <span>SELECTED COMMAND</span>
              <b>{tech} / {selectedCommand.code.split(" ")[0]}</b>
            </div>
            <span className="command-live"><i/> INTERACTIVE</span>
          </div>

          <motion.div
            key={selectedCommand.code}
            className="command-code-card"
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            transition={{duration:.3}}
          >
            <div className="code-window-top">
              <span><i/><i/><i/></span>
              <small>terminal.sh</small>
              <button onClick={() => navigator.clipboard?.writeText(selectedCommand.code)} title="Copy command">COPY</button>
            </div>
            <pre><span className="code-dollar">$ </span>{selectedCommand.code}</pre>
          </motion.div>

          <div className="command-explanation command-explanation-expanded">
            <div className="explanation-card main-explanation">
              <span>WHAT IT DOES</span>
              <p>{selectedCommand.what}</p>
            </div>
            <div className="explanation-card">
              <span>HOW IT WORKS</span>
              <p>{selectedCommand.how}</p>
            </div>
            <div className="explanation-card">
              <span>WHEN TO USE IT</span>
              <p>{selectedCommand.why}</p>
            </div>
          </div>

          <div className="command-learning-footer command-learning-lab">
            <div className="learning-lab-head"><span><Zap size={14}/> LEARN BY EXPLORING</span><b>UNDERSTAND • CONNECT • EXPERIMENT</b></div>
            <div className="learning-lab-grid">
              <article><small>01 / COMMAND PATTERN</small><div className="lab-content"><code>$ {selectedCommand.example}</code><p>This is the concrete pattern represented by the selected command. Read the flags and arguments as the inputs that control its behavior.</p></div></article>
              <article><small>02 / HOW TO THINK ABOUT IT</small><div className="lab-content"><p>{selectedCommand.how}</p><p className="lab-observe">Ask: what state does this command read or change, and which component is responsible for that state?</p></div></article>
              <article><small>03 / EXPERIMENT</small><div className="lab-content"><p>Change one flag, argument or input at a time and observe how the system state changes.</p><p>Compare the result with your original command before moving on.</p><p className="lab-observe">The goal is to understand cause → effect, not memorise syntax.</p></div></article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
