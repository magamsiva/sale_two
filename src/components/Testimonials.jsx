import React from "react";

const evidence = [
  { 
    name: "K. Rameshwaran", 
    role: "Ops Director", 
    co: "Matrix Logistics", 
    quote: "The manager-led review system transformed our floor discipline. I can now verify every shift check-in and review performance audit logs globally from my mobile hub.", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" 
  },
  { 
    name: "Sneha Kapur", 
    role: "HR Controller", 
    co: "Beacon Tech ERP", 
    quote: "EL-FRS integrated our multi-branch managers into a single review-mesh. Performance appraisal and employee salary settlements are now executed with 100% precision.", 
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop" 
  },
  { 
    name: "Vikram Malhotra", 
    role: "Managing Director", 
    co: "SteelCraft India", 
    quote: "The transparency between managers and employees is our biggest ROI. Reviewing work logs and approving deployments across our infrastructure takes seconds, not hours.", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop" 
  }
];

const CaseStudyCard = ({ item, delay }) => (
  <div className="wow-reveal" style={{ 
    flex: "1 1 320px", display: "flex", flexDirection: "column", 
    animationDelay: delay 
  }}>
    <div className="s-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: 32, padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ 
          width: 64, height: 64, borderRadius: 0, overflow: "hidden", 
          border: "1px solid var(--carbon-border)", background: "var(--carbon-gray-10)"
        }}>
           <img src={item.avatar} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }} />
        </div>
        <div style={{ fontSize: 40, color: "var(--carbon-blue-60)", opacity: 0.2 }}>"</div>
      </div>

      <p style={{ fontSize: 14, color: "var(--carbon-text-primary)", fontWeight: 400, lineHeight: 1.6, flex: 1 }}>
         {item.quote}
      </p>

      <div style={{ borderTop: "1px solid var(--carbon-border)", paddingTop: 24 }}>
         <div style={{ fontWeight: 700, fontSize: 15, color: "var(--carbon-gray-100)", marginBottom: 8 }}>{item.name}</div>
         <div className="technical-label" style={{ borderRadius: 0 }}>
            {item.role.toUpperCase()} // {item.co.toUpperCase()}
         </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="reviews" className="c-section" style={{ background: "white", borderTop: "1px solid var(--carbon-border)", padding: "100px 0" }}>
      <div className="c-container">
        <div className="wow-reveal" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 80px" }}>
           <div className="technical-label" style={{ marginBottom: 20 }}>Validation nodes</div>
           <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em" }}>Trusted by <span style={{ color: "var(--carbon-blue-60)" }}>Industrial Leaders.</span></h2>
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
           {evidence.map((t, i) => <CaseStudyCard key={i} item={t} delay={`${0.1 + (i * 0.1)}s`} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .reviews-section { padding: 80px 0 !important; }
          .testimonial-card { padding: 32px !important; }
        }
      `}</style>
    </section>
  );
}
