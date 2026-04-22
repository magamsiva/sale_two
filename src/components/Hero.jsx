import React from "react";

export default function Hero() {
  const mockupImg = "/assets/ibm_carbon_hr_dashboard_mockup_1776322205232.png";

  return (
    <section className="hero-section" style={{ 
      paddingTop: 160, paddingBottom: 80, 
      backgroundColor: "var(--carbon-gray-100)",
      background: "radial-gradient(circle at 100% 0%, rgba(15, 98, 254, 0.15) 0%, transparent 40%), var(--carbon-gray-100)",
      overflow: "hidden", position: "relative",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
      {/* STRUCTURAL GRID */}
      <div style={{ 
        position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="c-container" style={{ 
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 60, flexWrap: "wrap", position: "relative", zIndex: 10 
      }}>
        
        {/* LEFT COLUMN: CONTENT */}
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <div className="wow-reveal" style={{ 
            display: "inline-flex", gap: 12, alignItems: "center", padding: "6px 16px", 
            background: "rgba(15, 98, 254, 0.1)", borderRadius: 0, marginBottom: 32,
            border: "1px solid rgba(15, 98, 254, 0.3)", animationDelay: "0.1s"
          }}>
             <span className="technical-label" style={{ color: "var(--carbon-blue-60)", letterSpacing: "0.2em", fontSize: 9, fontWeight: 700, background: "transparent", padding: 0 }}>
               ⚡ LIMITED TIME PRICE REVOLUTION ⚡
             </span>
          </div>

          <h1 className="wow-reveal" style={{ 
            fontSize: "clamp(40px, 6vw, 64px)", 
            fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em",
            color: "white", marginBottom: 24,
            animationDelay: "0.2s"
          }}>
             The Best Value <br/>
             <span style={{ color: "var(--carbon-blue-60)" }}>HR Suite in India</span>.
          </h1>

          <div className="wow-reveal" style={{ marginBottom: 40, animationDelay: "0.3s" }}>
             <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "line-through", marginBottom: 4, fontFamily: "var(--font-mono)" }}>Was ₹99/employee</div>
             <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>Starting At</span>
                <span className="mono-data" style={{ fontSize: 64, fontWeight: 700, color: "var(--sale-gold)", lineHeight: 1 }}>₹30</span>
                <div style={{ textAlign: "left" }}>
                   <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>PER EMP</div>
                   <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>MONTHLY</div>
                </div>
             </div>
          </div>

          <div className="wow-reveal" style={{ 
            display: "flex", gap: 24, alignItems: "center", marginBottom: 48,
            animationDelay: "0.4s"
          }}>
             <button className="c-btn-blockbuster" style={{ 
                padding: "16px 32px", fontSize: 14, borderRadius: 0, 
                background: "var(--carbon-blue-60)", color: "white", boxShadow: "none"
              }}>
               Get The Deal Now →
             </button>
             
             <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5 }}>Authorized by</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "white" }}>300+ Entities</div>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL */}
        <div className="wow-reveal" style={{ 
          flex: "1 1 500px", position: "relative",
          animationDelay: "0.5s"
        }}>
           <div style={{ 
             padding: "1px", background: "rgba(255,255,255,0.1)", 
             boxShadow: "0 40px 120px rgba(0,0,0,0.5)", position: "relative"
           }}>
              <img 
                src={mockupImg} 
                alt="Dashboard" 
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* IBM STYLE OVERLAY LABEL */}
              <div style={{ 
                position: "absolute", top: -20, right: 20, padding: "8px 16px",
                background: "var(--carbon-blue-60)", color: "white", fontSize: 10,
                fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: 1
              }}>
                PROTO_V11.VIEW
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-section { padding: 120px 0 60px !important; }
          .hero-section .c-container { flex-direction: column !important; text-align: center !important; }
          .hero-section .c-container > div { text-align: center !important; width: 100% !important; flex: none !important; }
          .hero-section h1 { font-size: 36px !important; }
          .hero-section .mono-data { fontSize: 48px !important; }
          .hero-section .c-btn-blockbuster { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
