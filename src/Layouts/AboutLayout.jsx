import { Link, Outlet } from "react-router-dom";

function AboutLayout() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>About Us</h1>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="Vision" className="nav-link-sub">Vision</Link>
          <Link to="Mision" className="nav-link-sub">Mission</Link>
          <Link to="Goal" className="nav-link-sub">Goal</Link>
        </nav>
      </div>
      <div className="about-content">
        <Outlet />
      </div>
    </div>
  )
}

export default AboutLayout;