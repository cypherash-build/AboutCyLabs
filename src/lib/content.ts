import { KeyRound, Target, Shield, BookOpen, Building, HeartHandshake, Lightbulb, TrendingUp, BrainCircuit, Cpu } from "lucide-react";

export const content = {
  hero: {
    default: {
      headline: "Shaping a Safer, Smarter Future",
      subheadline: "Cypherash Labs is a deep tech company building permanent, impactful solutions to solve critical global challenges. We don't follow trends; we define the future.",
    },
    government: {
      headline: "Fortifying National Resilience & Sovereignty",
      subheadline: "We partner with governments to build sovereign technological capabilities, enhancing national security, public safety, and strategic autonomy with future-proof solutions.",
    },
    investor: {
      headline: "Investing in Foundational Deep Tech",
      subheadline: "Cypherash Labs targets technological vacuums with high-impact, scalable solutions, creating sustainable, diversified revenue streams in high-growth global markets.",
    },
    technologist: {
      headline: "Solving Impossible Problems with First Principles",
      subheadline: "We are a full-stack engineering company tackling the hardest challenges in AI, quantum, and hardware. If you are driven by building what's next, you're in the right place.",
    },
  },
  about: {
    default: {
      mission: "To solve critical global challenges by identifying technological vacuums and filling them with permanent, impactful deep tech solutions, shaping a safer, smarter, and more interconnected future.",
    },
    government: {
      mission: "Our mission is to empower nations by developing sovereign technologies that ensure digital security, enhance public safety, and build a resilient, future-ready infrastructure for citizens and government.",
    },
    investor: {
      mission: "We identify and dominate uncontested market spaces ('technological vacuums') by developing proprietary, deep tech ecosystems. Our mission is to generate significant, long-term value by building foundational technology with clear, defensible moats.",
    },
    technologist: {
      mission: "Our core drive is to solve foundational engineering challenges that others deem too complex. We build permanent, elegant solutions from the ground up, pushing the boundaries of what's possible in physics, computer science, and AI.",
    },
  },
  products: [
    {
      id: "cypherkey",
      name: "Cypherkey",
      icon: KeyRound,
      target: ["Governments", "Finance", "Critical Infrastructure"],
      description: {
        default: "An impenetrable, future-proof communication channel using quantum-resistant cryptography to secure digital assets against the threat of quantum computing.",
        government: "Secures sensitive state communications and critical infrastructure against emerging quantum threats, ensuring long-term digital sovereignty and national security.",
        investor: "A PQC solution targeting the multi-billion dollar post-quantum cryptography market, offering a subscription-based model for securing high-value government and enterprise clients.",
        technologist: "A novel key distribution system implementing and advancing NIST-selected PQC algorithms to provide verifiable, quantum-resistant security for data in transit and at rest.",
      },
    },
    {
      id: "cypheri",
      name: "Cypher-i",
      icon: Target,
      target: ["Municipalities", "Law Enforcement", "Smart Cities"],
      description: {
        default: "An intelligent urban surveillance system using AI-powered drone networks for real-time threat detection, anomaly flagging, and rapid response.",
        government: "A proactive security force multiplier for urban environments, enhancing law enforcement capabilities, reducing response times, and improving public safety outcomes.",
        investor: "A Drone-as-a-Service (DaaS) model for the rapidly growing smart city security market, providing recurring revenue through managed services for municipalities.",
        technologist: "A distributed system of autonomous agents featuring real-time, on-device AI for navigation and threat analysis, optimized for low-latency urban operations.",
      },
    },
     {
      id: "cypherb",
      name: "Cypher-b",
      icon: Shield,
      target: ["Defense Forces", "Border Security"],
      description: {
        default: "Advanced military reconnaissance drones providing superior tactical awareness while minimizing risk to personnel in high-stakes defense operations.",
        government: "Delivers a strategic advantage to defense forces through superior intelligence, reconnaissance, and surveillance (ISR), enhancing mission success rates and protecting personnel.",
        investor: "Addresses the high-value military drone market with direct hardware sales and long-term service contracts, securing a position in the national defense supply chain.",
        technologist: "Carbon fiber airframes with custom-built, fail-safe avionics and real-time AI navigation, engineered for rapid mission customization and operational resilience.",
      },
    },
    {
      id: "kitab",
      name: "Ki-Tab",
      icon: BookOpen,
      target: ["K-12 Students", "Educators", "Governments"],
      description: {
        default: "An AI-powered, distraction-free EdTech tablet that provides personalized tutoring and fosters deep comprehension over rote learning.",
        government: "A tool for national education reform, scaling personalized learning to build a competitive future workforce and promote equitable access to quality education.",
        investor: "A vertically integrated product (hardware + SaaS) for the massive global EdTech market, with proven 15% improvement in comprehension scores during pilots.",
        technologist: "A dual-screen e-ink device with a custom, lightweight OS and on-device AI tutor that adapts learning pathways based on real-time student interaction.",
      },
    },
  ],
  investorDetails: {
    cypherkey: {
      name: "Cypherkey",
      icon: KeyRound,
      q1: "We are solving the existential threat of quantum computers to our most critical digital secrets. Today, virtually all digital communication and stored data security relies on classical encryption that is fundamentally vulnerable to future quantum computers. For sensitive government, military, and critical infrastructure data, this poses an unacceptable risk.\n\nOur primary customers are government and military agencies, along with operators of critical national infrastructure (like energy grids, financial networks, and essential public services) who demand the highest level of future-proof security.",
      q2: "The threat of quantum computing is no longer theoretical; it's a rapidly approaching reality. Governments are mandating quantum-resistant solutions. We're at an inflection point where the market need is urgent, and the core QKD technologies have matured enough for practical deployment.\n\nCypherash Labs is the right team because we combine deep expertise in quantum optics and cryptography with a pragmatic roadmap. Our agility as a specialized startup allows us to innovate faster than legacy players. We are passionate about securing the future of communication.",
      q3: "Our core differentiation is our focus on terrestrial free-space (tower-based) QKD, delivered as a service.\n\nBeyond Fiber: We address the critical need for secure links where fiber is impractical, costly, or vulnerable.\n\nBeyond PQC: Unlike Post-Quantum Cryptography (PQC), which relies on mathematical assumptions, CypherKey offers provable, physics-based security—a non-negotiable for our target clients.\n\nFrom Hardware to Service: Our long-term strategy is providing \"quantum channels as a managed service,\" creating recurring revenue and lowering the barrier to entry for clients.",
    },
    cypheri: {
      name: "Cypher-i",
      icon: Target,
      q1: "We're solving the critical challenge of reactive and inefficient urban security. For municipal governments, smart city developers, and law enforcement agencies, we provide a proactive, intelligent, and real-time aerial surveillance system using AI-powered drone networks. This shifts urban security from merely responding to incidents to actively preventing them and optimizing emergency response, ultimately creating safer, smarter urban environments for everyone.",
      q2: "Global urbanization is accelerating, leading to denser cities with more complex security needs. Simultaneously, advancements in AI, autonomous drone technology, and 5G connectivity have reached a maturity point, making a solution like Cypher-i technically feasible and scalable. My background spans deep hardware, intricate software, advanced AI, and systems integration – all crucial for a complex, multidisciplinary project like Cypher-i. I don't just understand the components; I understand how to weave them into a seamless, impactful system.",
      q3: "Our differentiation goes beyond simply deploying drones; we offer a holistic, intelligent, and truly proactive security ecosystem.\n\nAI-Powered Anomaly Detection: Unlike competitors who provide raw video feeds, Cypher-i's proprietary AI actively analyzes vast amounts of data in real-time to identify subtle anomalies and predict potential threats.\n\nNetworked Autonomous Intelligence: Our drones operate as an interconnected, coordinated network, providing comprehensive, dynamic coverage that isolated drone deployments cannot match.\n\nFull-Stack Integration & Customization: We're building a truly integrated hardware-software solution designed for seamless integration with existing smart city infrastructure.",
    },
    cypherb: {
        name: "Cypher-b",
        icon: Shield,
        q1: "Military and border reconnaissance missions are dangerous, costly, and often limited by human endurance and conventional aircraft capabilities.",
        q2: "Stealth-capable, long-endurance reconnaissance drones with advanced ISR payloads, offering superior tactical awareness while minimizing risk to personnel.",
        q3: "Global military drone market, valued at over $17 billion. Targeting defense contracts for surveillance and reconnaissance operations. Direct hardware sales combined with long-term service, support, and data analysis contracts with government defense and security agencies."
    },
    kitab: {
        name: "Ki-Tab",
        icon: BookOpen,
        q1: "Traditional education struggles with a one-size-fits-all approach, and existing EdTech solutions are often distracting and fail to deliver personalized learning effectively.",
        q2: "A purpose-built, dual-screen e-ink tablet with an on-device AI tutor that provides personalized learning paths, interactive content, and real-time feedback, free from digital distractions.",
        q3: "Global EdTech market, projected to exceed $400 billion. Targeting K-12 public and private education systems on a national scale. Vertically integrated model: Direct sales of the hardware (Ki-Tab) bundled with a recurring subscription for the AI-powered curriculum and platform access (SaaS)."
    }
  },
  vision: {
    sunshot: {
        name: "Project: SunShot",
        concept: "A non-invasive Brain-Computer Interface (BCI) that decodes intended text from hybrid EEG/EMG signals, refined by an LLM.",
        vision: "To enable highly intuitive, accurate communication for individuals with motor impairments, and eventually, for everyone."
    },
    moonshot: {
        name: "Project: MoonShot",
        concept: "A photonic AI accelerator using optical computing to overcome the Von Neumann bottleneck in LLM scaling.",
        vision: "To create a new paradigm in AI hardware, delivering orders-of-magnitude improvements in performance and energy efficiency over current GPUs."
    }
  },
  impact: {
      default: [
        { icon: Shield, title: "Digital Security", metric: "0% Quantum Breaches", description: "Aiming for zero quantum-related data breaches for our clients, protecting critical data." },
        { icon: Building, title: "Public Safety", metric: "15% Crime Reduction", description: "Targeting a 10-15% crime reduction and 20% faster emergency response in urban areas." },
        { icon: TrendingUp, title: "Learning Outcomes", metric: "20% Improvement", description: "Achieved 15% improvement in pilot studies, aiming for 15-20% overall boost in learning." },
      ],
      government: [
        { icon: Shield, title: "National Resilience", metric: "Digital Sovereignty", description: "Preventing trillions in economic losses by securing national digital infrastructure." },
        { icon: Building, title: "Smarter Cities", metric: "Optimized Management", description: "Enhancing urban safety and resource management for better public services." },
        { icon: HeartHandshake, title: "Human Capital", metric: "Future Workforce", description: "Developing a skilled, competitive workforce through personalized, effective education." },
      ],
      investor: [
        { icon: TrendingUp, title: "Market Leadership", metric: "High-Growth Verticals", description: "Capturing value in PQC, Military Drones, Smart Cities, and EdTech markets." },
        { icon: Lightbulb, title: "Intellectual Property", metric: "2+ Patents Filed", description: "Building a defensible IP portfolio with two provisional patents filed and more in the pipeline." },
        { icon: HeartHandshake, title: "Recurring Revenue", metric: "Diversified Streams", description: "Sustainable growth through a mix of SaaS, DaaS, hardware sales, and licensing models." },
      ],
      technologist: [
         { icon: Shield, title: "PQC Implementation", metric: "TRL 7-8 Goal", description: "Advancing Post-Quantum Cryptography to high technology readiness levels for real-world deployment." },
         { icon: Cpu, title: "AI/ML at the Edge", metric: "Real-Time Processing", description: "Deploying autonomous AI on drones and tablets for low-latency, high-accuracy results." },
         { icon: BrainCircuit, title: "Next-Gen Hardware", metric: "Photonic Computing", description: "Developing novel BCI and optical accelerators to redefine the limits of AI and communication." },
      ]
  }
};
