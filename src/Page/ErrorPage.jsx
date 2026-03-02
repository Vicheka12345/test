import ErrorImg from "../assets/ErrorNotfound.jpg"

function ErrorPage() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
        <img src={ErrorImg} alt="Error Not Found" style={{ maxWidth: '80%', height: '400px' }} />
        <h1 style={{ marginTop: '1rem' }}>Oops! Page Not Found</h1>
        <p>The page you are looking for doesn't exist.</p>
        <a href="/" style={{ 
          display: 'inline-block', 
          marginTop: '1.5rem', 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#646cff', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '4px' 
        }}>Go Home</a>
    </div>
  )
}

export default ErrorPage
