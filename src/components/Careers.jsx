import React from "react";

const CareersSpotlight = ({ title, sal, criteria, age, goals, delay }) => (
  <div className="wow-reveal" style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", animationDelay: delay }}>
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 32, padding: "40px", background: "white", border: "1px solid var(--carbon-border)", borderRadius: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
            <div className="technical-label" style={{ marginBottom: 16, fontSize: 9, background: "var(--carbon-gray-10)", color: "var(--carbon-blue-60)", borderRadius: 0 }}>NODE ACCESS</div>
            <h3 style={{ fontSize: 32, fontWeight: 400, letterSpacing: "-0.01em" }}>{title}</h3>
        </div>
        <div style={{ padding: "4px 12px", background: "var(--carbon-blue-60)", color: "white", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, fontFamily: "var(--font-mono)" }}>URGENT</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, borderTop: "1px solid var(--carbon-border)", borderBottom: "1px solid var(--carbon-border)", padding: "24px 0" }}>
         <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Compensation</div>
            <div className="mono-data" style={{ fontSize: 15, fontWeight: 600, color: "var(--carbon-gray-100)" }}>{sal}</div>
         </div>
         <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Profile Verify</div>
            <div className="mono-data" style={{ fontSize: 15, fontWeight: 600, color: "var(--carbon-gray-100)" }}>{criteria} • {age}YRS</div>
         </div>
      </div>

      <div style={{ flex: 1 }}>
         <div style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Mission Directives</div>
         <p style={{ fontSize: 14, color: "var(--carbon-text-secondary)", lineHeight: 1.6 }}>{goals}</p>
      </div>

      <button className="c-btn-blockbuster" style={{ 
        width: "100%", height: 50, fontSize: 14, borderRadius: 0, 
        background: "var(--carbon-gray-100)", color: "white",
        boxShadow: "none"
      }}>
        INITIATE APPLICATION →
      </button>
    </div>
  </div>
);

export default function Careers() {
  return (
    <section id="careers" className="c-section" style={{ background: "var(--carbon-gray-10)", borderTop: "1px solid var(--carbon-border)", padding: "80px 0" }}>
       <div className="c-container">
          <div style={{ marginBottom: 64, textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
             <div className="technical-label" style={{ marginBottom: 20, background: "var(--carbon-gray-100)", color: "white", borderRadius: 0 }}>Sourcing Protocol v2.5</div>
             <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em" }}>Sourcing <span style={{ color: "var(--carbon-blue-60)" }}>Elite Intelligence.</span></h2>
          </div>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
             <CareersSpotlight 
                title="Sales Architect"
                sal="Fixed ₹15,000/mo"
                criteria="Tier 1 Degree"
                age="22–28"
                delay="0.1s"
                goals="Execute high-authority enterprise negotiations, manage industrial-tier lead verification, and orchestrate precision demonstrations."
             />
             <CareersSpotlight 
                title="GIS Engineer"
                sal="Engineering Scale"
                criteria="B.Tech CS/GIS"
                age="22–30"
                delay="0.2s"
                goals="Develop high-precision spatial tracking algorithms, manage Geo-Fence grid reliability, and architect intelligence dashboards."
             />
          </div>
       </div>
    </section>
  );
}

