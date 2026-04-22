import React from "react";

const ModuleCard = ({ icon, name }) => (
  <div className="premium-card" style={{ padding: '24px 16px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <span style={{ fontSize: 32 }}>{icon}</span>
    <span style={{ fontSize: 13, fontWeight: 700, color: '#1E293B', fontFamily: "'Outfit', sans-serif" }}>{name}</span>
  </div>
);

export default function Modules() {
  const modules = [
    { icon:"👤", name:"Employee Master" },
    { icon:"🕐", name:"Attendance & FRS" },
    { icon:"💵", name:"Payroll Engine" },
    { icon:"🏖", name:"Leave Manager" },
    { icon:"🎯", name:"Performance & KRA" },
    { icon:"🛡", name:"Statutory Compliance" },
    { icon:"📄", name:"Document Vault" },
    { icon:"🎓", name:"Learning & Training" },
    { icon:"🏥", name:"Insurance & Benefits" },
    { icon:"💬", name:"Helpdesk & Tickets" },
    { icon:"📱", name:"Mobile App" },
    { icon:"🔌", name:"API & Webhooks" },
  ];

  return (
    <section id="modules" className="section-spacing" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 56px' }}>
          <div className="badge">Platform Modules</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1.5px', marginBottom: 16 }}>
            The Full Enterprise Suite
          </h2>
          <p style={{ fontSize: 16, color: '#64748B' }}>
            A modular approach that grows with your business needs. Connect everything or use what you need.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20 }}>
          {modules.map((m, i) => <ModuleCard key={i} {...m} />)}
        </div>
      </div>
    </section>
  );
}
