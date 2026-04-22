import React from "react";

const steps = [
  { num:1, title:"Setup & Onboarding", desc:"Import employee data via CSV or connect with your existing system. Configure departments, roles, and policies." },
  { num:2, title:"Enroll Faces", desc:"Each employee registers their face via mobile or kiosk. Our AI model learns and is ready in minutes." },
  { num:3, title:"Automate Everything", desc:"Attendance flows into payroll automatically. Approve payroll and transfer salaries with a single click." },
  { num:4, title:"Grow & Scale", desc:"Add branches, departments, and integrate with accounting tools. Scale from 5 to 5000 employees seamlessly." },
];

export default function Process() {
  return (
    <section id="how-it-works" style={{ background:"white", padding:"100px 5%" }}>
      <div className="section-header">
        <span className="section-tag">Process</span>
        <h2 className="section-title">Up & Running in 3 Steps</h2>
        <p className="section-subtitle">Deploy EL-FRS HMIS across your organization in under 48 hours.</p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:0, position:"relative" }}>
        <div style={{
          position:"absolute", top:32, left:"10%", right:"10%", height:2,
          background:"linear-gradient(90deg,#2563EB,#06B6D4)", opacity:0.3, zIndex:0,
        }} className="process-line" />
        {steps.map(s => (
          <div key={s.num} style={{ textAlign:"center", padding:"0 20px", position:"relative", zIndex:1 }}>
            <div style={{
              width:64, height:64, borderRadius:"50%",
              background:"linear-gradient(135deg,#0B1437 0%,#142057 40%,#1A3A8F 100%)",
              display:"flex", alignItems:"center", justifyContent:"center",
              margin:"0 auto 20px",
              fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:22, color:"white",
              boxShadow:"0 4px 20px rgba(37,99,235,0.3)",
            }}>{s.num}</div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:700, color:"#0B1437", marginBottom:10 }}>{s.title}</div>
            <p style={{ fontSize:14, color:"#6677BB", lineHeight:1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:768px){ .process-line{ display:none; } }
      `}</style>
    </section>
  );
}
