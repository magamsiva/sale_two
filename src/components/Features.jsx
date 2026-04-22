import React from "react";

const BentoCard = ({ title, desc, tag, children, className = "", delay = "0.1s", gridArea = "" }) => (
  <div className={`wow-reveal bento-card ${className}`} style={{ 
    animationDelay: delay, 
    gridArea: gridArea,
    borderRadius: 0,
    border: "1px solid var(--carbon-border)",
    background: className.includes("bento-card-dark") ? "var(--carbon-gray-100)" : "white"
  }}>
    <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column" }}>
       <div style={{ marginBottom: 24 }}>
          {tag && <div className="technical-label" style={{ marginBottom: 12, fontSize: 9, background: className.includes("bento-card-dark") ? "rgba(255,255,255,0.1)" : "var(--carbon-gray-10)", color: className.includes("bento-card-dark") ? "white" : "var(--carbon-blue-60)", borderRadius: 0 }}>{tag}</div>}
          <h3 style={{ fontSize: 24, fontWeight: 400, marginBottom: 8, letterSpacing: "-0.01em" }}>{title}</h3>
          <p style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.5, fontWeight: 400 }}>{desc}</p>
       </div>
       <div style={{ flex: 1, position: "relative" }}>
          {children}
       </div>
    </div>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="c-section" style={{ background: "white", overflow: "hidden", borderTop: "1px solid var(--carbon-border)", padding: "80px 0" }}>
       <div className="c-container">
          <div className="wow-reveal" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 80px" }}>
             <div className="technical-label" style={{ marginBottom: 20, background: "var(--carbon-gray-100)", color: "white", borderRadius: 0 }}>Capability nodes</div>
             <h2 style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em" }}>Engineered for <br/> <span style={{ color: "var(--carbon-blue-60)" }}>Operational Precision.</span></h2>
          </div>

          <div className="bento-grid" style={{ 
            gridTemplateAreas: `
              "identity identity identity identity payroll payroll payroll payroll manager manager manager manager"
              "identity identity identity identity compliance compliance compliance compliance stats stats stats stats"
            `,
            gridAutoRows: "minmax(250px, auto)",
            gap: 1
          }}>
             
             {/* 1. IDENTITY PROTOCOL (LARGE) */}
             <BentoCard 
               gridArea="identity"
               tag="Identity"
               title="Secure Biometric Scan"
               desc="3D facial depth verify with non-spoof encryption."
               delay="0.1s"
             >
                <div style={{ position: "absolute", bottom: -20, right: -20, width: "120%" }}>
                   <img src="/assets/3d_biometric_face_scan_1776323084791.png" alt="Identity" style={{ width: "100%", height: "auto", filter: "brightness(0.9) contrast(1.1)" }} />
                </div>
             </BentoCard>

             {/* 2. PAYROLL ENGINE */}
             <BentoCard 
               gridArea="payroll"
               tag="Financials"
               title="Statutory Settlement"
               desc="Indian statutory settlement logic for PF, ESIC, Tax."
               delay="0.2s"
               className="bento-card-dark"
             >
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                   {["PF COMPLIANT", "ESIC READY", "TDS VERIFIED"].map((item, i) => (
                      <div key={i} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 11, fontWeight: 700, fontFamily: "var(--font-mono)", display: "flex", justifyContent: "space-between" }}>
                         <span>{item}</span>
                         <span style={{ color: "var(--sale-emerald)" }}>OK</span>
                      </div>
                   ))}
                </div>
             </BentoCard>

             {/* 3. MANAGER HUB */}
             <BentoCard 
               gridArea="manager"
               tag="Governance"
               title="Command Console"
               desc="Unified oversight for distributed personnel nodes."
               delay="0.3s"
             >
                <div style={{ marginTop: 20, border: "1px solid var(--carbon-border)", padding: 16, background: "var(--carbon-gray-10)" }}>
                   <div style={{ width: "80%", height: 1, background: "var(--carbon-gray-20)", marginBottom: 8 }} />
                   <div style={{ width: "60%", height: 1, background: "var(--carbon-gray-20)", marginBottom: 8 }} />
                   <div style={{ width: "40%", height: 1, background: "var(--carbon-blue-60)" }} />
                </div>
             </BentoCard>

             {/* 4. COMPLIANCE STACK */}
             <BentoCard 
               gridArea="compliance"
               tag="Legal"
               title="Audit Evidence"
               desc="Digital logging of every statutory action."
               delay="0.4s"
             >
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 20 }}>
                   {["F16", "BB-12", "ECR", "CHALLAN"].map(badge => (
                      <span key={badge} style={{ padding: "4px 8px", background: "var(--carbon-gray-10)", border: "1px solid var(--carbon-border)", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-mono)" }}>{badge}</span>
                   ))}
                </div>
             </BentoCard>

             {/* 5. SUCCESS DATA */}
             <BentoCard 
               gridArea="stats"
               tag="Performance"
               title="Zero Leakage"
               desc="High-precision workforce management."
               delay="0.5s"
               className="bento-card-dark"
             >
                <div style={{ marginTop: 20 }}>
                   <div className="mono-data" style={{ fontSize: 36, fontWeight: 700, color: "var(--sale-gold)", letterSpacing: -1 }}>99.98%</div>
                   <div style={{ fontSize: 9, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1.5 }}>Identity Reliability</div>
                </div>
             </BentoCard>

          </div>
       </div>

       <style>{`
         @media (max-width: 960px) {
           .bento-grid {
             display: flex !important;
             flex-direction: column !important;
             gap: 24px !important;
           }
           .bento-card {
             min-height: 280px !important;
           }
         }
       `}</style>
    </section>
  );
}
