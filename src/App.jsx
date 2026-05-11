import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <div className="card">
        <div className="header">
          <h1>Cloudflare Pages Deployment Ready</h1>
          <p className="subtitle">Hosted through Cloudflare Pages from GitHub.</p>
        </div>
        
        <div className="badges">
          <span className="badge">⚡ Vite</span>
          <span className="badge">⚛️ React 18</span>
          <span className="badge">☁️ Cloudflare Pages</span>
        </div>

        <div className="info">
          <p>This application is ready for production deployment on Cloudflare Pages.</p>
          <p>Connect your GitHub repository and start deploying instantly.</p>
        </div>
      </div>
    </div>
  )
}
