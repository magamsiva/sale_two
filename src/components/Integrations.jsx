import React from "react";

const IntCard = ({ icon, name, type, pill, pillColor }) => (
  <div className="premium-card" style={{ padding: 24, textAlign: 'center' }}>
    <span style={{ fontSize: 32, marginBottom: 12, display: 'block' }}>{icon}</span>
    <div style={{ fontSize: 14, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>{name}</div>
    <div style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>{type}</div>
    <div style={{
      display: 'inline-block', fontSize: 10, fontWeight: 800, padding: '4px 10px',
      borderRadius: 100, background: `${pillColor}15`, color: pillColor, textTransform: 'uppercase', letterSpacing: 0.5
    }}>{pill}</div>
  </div>
);

export default function Integrations() {
  const integrations = [
    { icon:"💬", name:"WhatsApp", type:"Business API", pill:"Premium", pillColor:"#4F46E5" },
    { icon:"📱", name:"SMS Gateway", type:"Notifications", pill:"Premium", pillColor:"#4F46E5" },
    { icon:"🔌", name:"REST API", type:"Full Access", pill:"Premium", pillColor:"#4F46E5" },
    { icon:"📈", name:"Tally ERP", type:"Accounting", pill:"Enterprise", pillColor:"#7C3AED" },
    { icon:"🏛", name:"EPFO Portal", type:"Compliance", pill:"All Plans", pillColor:"#10B981" },
    { icon:"💳", name:"Razorpay", type:"Payroll Payouts", pill:"Premium", pillColor:"#4F46E5" },
  ];

  return (
    <section id="integrations" className="section-spacing" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
          <div className="badge">Integrations</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1.5px' }}>
            Works with your Favorite Tools
          </h2>
          <p style={{ fontSize: 16, color: '#64748B', marginTop: 12 }}>
            Seamlessly connect your payroll with accounting, messaging, and government compliance portals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {integrations.map((item, i) => <IntCard key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
}
