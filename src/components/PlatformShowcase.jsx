import React from "react";

const Hotspot = ({ label, desc, position, align, delay, data }) => (
  <div className="wow-reveal hotspot-item" style={{ 
    position: "absolute", 
    ...position, 
    zIndex: 20, 
    animationDelay: delay,
    display: "flex",
    flexDirection: "column",
    alignItems: align === "right" ? "flex-start" : "flex-end",
    gap: 4
  }}>
     {/* DATA BADGE (Carbon Tech Style) */}
     {data && (
       <div style={{ 
         fontSize: 10, fontWeight: 700, background: "var(--carbon-gray-100)", 
         color: "white", padding: "2px 8px", borderRadius: 0,
         fontFamily: "var(--font-mono)", letterSpacing: 1
       }}>
         {data}
       </div>
     )}
     
     {/* CARBON GLASS LABEL */}
     <div style={{ 
       padding: "12px 16px", 
       background: "var(--carbon-white)", 
       border: "1px solid var(--carbon-border)", 
       borderRadius: 0,
       boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
       maxWidth: 240,
       textAlign: align === "right" ? "left" : "right"
     }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--carbon-blue-60)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 13, color: "var(--carbon-text-secondary)", fontWeight: 400, lineHeight: 1.4 }}>{desc}</div>
     </div>
  </div>
);

export default function PlatformShowcase() {
  const images = {
    mobile: "/assets/employee_mobile_app_interface_v7_1776323406268.png",
    web: "/assets/manager_web_portal_analytics_v7_1776323426784.png"
  };

  return (
    <section id="platform" style={{ background: "white", overflow: "hidden" }}>
       
       {/* 1. PERSONNEL DEPLOYMENT HUB (CARBON OVERHAUL) */}
       <div className="platform-section" style={{ 
         padding: "80px 0", borderBottom: "1px solid var(--carbon-border)", position: "relative",
         backgroundImage: "linear-gradient(var(--carbon-gray-10) 1px, transparent 1px), linear-gradient(90deg, var(--carbon-gray-10) 1px, transparent 1px)",
         backgroundSize: "32px 32px"
       }}>
          <div className="c-container" style={{ textAlign: "center", position: "relative" }}>
             <div className="technical-label" style={{ marginBottom: 16, background: "var(--carbon-gray-100)", color: "white", borderRadius: 0 }}>Protocol v11.4</div>
             <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 16, color: "var(--carbon-text-primary)" }}>
                Personnel Deployment <span style={{ color: "var(--carbon-blue-60)" }}>Hub</span>.
             </h2>
             <p style={{ fontSize: 16, color: "var(--carbon-text-secondary)", maxWidth: 600, margin: "0 auto 64px", fontWeight: 400 }}>
                High-authority infrastructure engineered for India's operational scale. <br/>
                Verified liveness and real-time governance nodes.
             </p>

             <div style={{ position: "relative", width: "100%", maxWidth: 1000, margin: "0 auto", height: 500, display: "flex", justifyContent: "center", alignItems: "center" }}>
                
                <div className="wow-reveal" style={{ position: "absolute", top: "0", left: "0", zIndex: 15, animationDelay: "0.1s" }}>
                   <div style={{ padding: "12px 20px", background: "white", border: "1px solid var(--carbon-border)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", textAlign: "left" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", marginBottom: 4 }}>System Status</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                         <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sale-emerald)" }} />
                         <span style={{ fontSize: 14, fontWeight: 700, color: "var(--carbon-gray-100)" }}>NODES ACTIVE</span>
                      </div>
                   </div>
                </div>

                <Hotspot 
                  label="Identity Protocol" 
                  desc="Anti-proxy face extraction with GPS verify." 
                  position={{ top: "10%", left: "5%" }} 
                  align="right"
                  delay="0.3s"
                  data="99.9% ACCURACY"
                />
                
                <div className="wow-reveal" style={{ 
                  width: 280, padding: 0, 
                  background: "white", border: "4px solid var(--carbon-gray-100)",
                  position: "relative", zIndex: 10, animationDelay: "0.2s",
                  boxShadow: "0 60px 120px -30px rgba(0,0,0,0.2)"
                }}>
                   <img src={images.mobile} alt="Hub App" style={{ width: "100%", display: "block" }} />
                </div>

                <Hotspot 
                  label="Direct Settle" 
                  desc="Instant reimbursement of field expenses." 
                  position={{ top: "10%", right: "5%" }} 
                  align="left"
                  delay="0.7s"
                  data="ZERO LEAKAGE"
                />
             </div>
          </div>
       </div>

       {/* 2. MANAGER WEB SHOWCASE (CARBON OVERHAUL) */}
       <div className="platform-section" style={{ padding: "80px 0", background: "var(--carbon-gray-10)", position: "relative" }}>
          <div className="c-container" style={{ textAlign: "center", position: "relative" }}>
             <div className="technical-label" style={{ marginBottom: 16, background: "var(--carbon-blue-60)", color: "white", borderRadius: 0 }}>Governance Suite</div>
             <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 64 }}>
                Enterprise <span style={{ color: "var(--carbon-blue-60)" }}>Command Center.</span>
             </h2>

             <div className="wow-reveal" style={{ 
               width: "100%", maxWidth: 900, margin: "0 auto", padding: 0, 
               background: "white", border: "1px solid var(--carbon-border)",
               position: "relative", zIndex: 10, animationDelay: "0.1s",
               boxShadow: "0 40px 80px rgba(0,0,0,0.05)"
             }}>
                <img src={images.web} alt="Manager Portal" style={{ width: "100%", display: "block" }} />
             </div>
          </div>
       </div>

       <style>{`
         @media (max-width: 1100px) {
           .hotspot-item { display: none !important; }
         }
       `}</style>
    </section>
  );
}
