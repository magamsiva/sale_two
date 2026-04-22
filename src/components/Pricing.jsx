import React from "react";

const PlanBox = ({ name, price, sub, featured, features, cta }) => (
  <div className="wow-reveal" style={{ 
    flex: 1, 
    minWidth: 300,
    background: featured ? "var(--carbon-gray-100)" : "white",
    color: featured ? "white" : "var(--carbon-text-primary)",
    border: "1px solid var(--carbon-border)",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: 32,
    position: "relative",
    animationDelay: featured ? "0.2s" : "0.1s"
  }}>
    {featured && (
      <div style={{ position: "absolute", top: 0, right: 0, padding: "4px 12px", background: "var(--carbon-blue-60)", color: "white", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-mono)" }}>
        MOST POPULAR
      </div>
    )}
    
    <div>
      <div className="technical-label" style={{ background: featured ? "rgba(255,255,255,0.1)" : "var(--carbon-gray-10)", color: featured ? "white" : "var(--carbon-blue-60)", marginBottom: 16, borderRadius: 0 }}>{name}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontSize: 16, fontWeight: 400 }}>₹</span>
        <span className="mono-data" style={{ fontSize: 48, fontWeight: 700, letterSpacing: -2 }}>{price}</span>
        <div style={{ fontSize: 12, opacity: 0.6, lineHeight: 1 }}>
           <div>PER EMP</div>
           <div>MONTHLY</div>
        </div>
      </div>
      <p style={{ fontSize: 13, marginTop: 8, opacity: 0.7 }}>{sub}</p>
    </div>

    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
      {features.map((f, i) => (
        <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, alignItems: "center" }}>
          <div style={{ width: 6, height: 6, background: featured ? "var(--sale-gold)" : "var(--carbon-blue-60)" }} />
          {f}
        </li>
      ))}
    </ul>

    <button className="c-btn-blockbuster" style={{ 
      background: featured ? "white" : "var(--carbon-blue-60)", 
      color: featured ? "var(--carbon-gray-100)" : "white",
      borderRadius: 0,
      padding: "16px",
      fontSize: 14,
      width: "100%",
      boxShadow: "none"
    }}>
      {cta}
    </button>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="c-section" style={{ background: "var(--carbon-gray-10)", borderTop: "1px solid var(--carbon-border)", padding: "80px 0" }}>
      <div className="c-container">
        <div className="wow-reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="technical-label" style={{ marginBottom: 16, background: "var(--carbon-gray-100)", color: "white", borderRadius: 0 }}>Pricing Infrastructure</div>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em" }}>Flexible <span style={{ color: "var(--carbon-blue-60)" }}>deployment nodes.</span></h2>
        </div>

        <div style={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center", background: "var(--carbon-border)", padding: 1 }}>
          <PlanBox 
            name="Free Tier"
            price="0"
            sub="Essential identity for up to 5 nodes."
            features={["Basic Attendance", "GPS Snap", "Mobile Interface", "Security Logs"]}
            cta="Deploy Free"
          />
          <PlanBox 
            featured
            name="Premium"
            price="30"
            sub="Per employee. Complete governance."
            features={["Biometric Anti-Proxy", "Statutory Settlement", "Direct Remittance", "Auditor Access", "Manager Portal"]}
            cta="Deploy Premium"
          />
          <PlanBox 
            name="Enterprise"
            price="Custom"
            sub="Full industrial scaling & support."
            features={["Unlimited Nodes", "SLA Guarantee", "Custom Data Sync", "Hardware Integration", "Dedicated Intel"]}
            cta="Contact Sales"
          />
        </div>

        <div className="wow-reveal" style={{ marginTop: 64, textAlign: "center" }}>
           <div className="s-card" style={{ padding: 24, background: "white", border: "1px solid var(--carbon-border)", boxShadow: "none", borderRadius: 0, display: "inline-flex", alignItems: "center", gap: 24 }}>
              <div style={{ textAlign: "left" }}>
                 <div style={{ fontWeight: 800, fontSize: 18, color: "#161616" }}>Bharat Bill Payment System</div>
                 <div style={{ fontSize: 14, color: "var(--carbon-text-secondary)" }}>Integrated utility settlement layer active.</div>
              </div>
              <div style={{ height: 40, width: 1, background: "var(--carbon-border)" }} />
              <button style={{ background: "transparent", border: "1px solid var(--carbon-gray-100)", color: "var(--carbon-gray-100)", padding: "10px 24px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Inquire</button>
           </div>
        </div>
      </div>
    </section>
  );
}
