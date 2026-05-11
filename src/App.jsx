export default function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#071f24",
      color: "white",
      fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: "32px"
    }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{
          color: "#5eead4",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontWeight: 700
        }}>
          Easy Emissions Marketing Console v1
        </p>

        <h1 style={{
          fontSize: "clamp(40px, 8vw, 84px)",
          lineHeight: 1,
          margin: "18px 0"
        }}>
          Get more cars through the doors.
        </h1>

        <p style={{
          fontSize: "22px",
          color: "#cbd5e1",
          maxWidth: "760px"
        }}>
          Emissions testing breaks your day. Easy Emissions doesn’t. This console aligns weekly marketing,
          customer triggers, Candice posting, and future fleet outreach around one goal: more throughput.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "18px",
          marginTop: "32px"
        }}>
          {[
            ["Weekly Campaign", "Pick one trigger, one message, one action."],
            ["Candice Console", "Copy-ready posts for Facebook, Instagram, and Google Business."],
            ["Fleet Lane", "Business outreach for companies that need vehicles moving."],
            ["Roadmap", "Check-ins, wait times, and fleet portal come after marketing signal."]
          ].map(([title, body]) => (
            <div key={title} style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "22px",
              padding: "22px"
            }}>
              <h2 style={{ marginTop: 0 }}>{title}</h2>
              <p style={{ color: "#cbd5e1" }}>{body}</p>
            </div>
          ))}
        </div>

        <section style={{
          marginTop: "36px",
          background: "white",
          color: "#0f172a",
          borderRadius: "28px",
          padding: "28px"
        }}>
          <h2>Campaign Generator</h2>
          <p><strong>Trigger:</strong> Registration due / busy week / fleet downtime</p>
          <p><strong>Message:</strong> In and out. No interruption.</p>
          <p><strong>CTA:</strong> Stop planning your day around emissions.</p>

          <pre style={{
            whiteSpace: "pre-wrap",
            background: "#f1f5f9",
            padding: "18px",
            borderRadius: "16px"
          }}>{`Facebook Post:
Emissions testing breaks your day. We don’t.

Stay in your car. Get in and out. Get back to your life.

Easy Emissions — no interruption.`}</pre>
        </section>
      </section>
    </main>
  );
}
