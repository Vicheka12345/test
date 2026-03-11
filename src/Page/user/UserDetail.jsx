import { useParams, Link } from 'react-router-dom';
import { Data } from './Data';

function UserDetail() {
    const { id } = useParams();
    const data = Data.find((user) => user.id === Number(id));

    if (!data) {
        return <div>User not found</div>;
    }

  return (
    <div className="user-detail-container">
        <article className="user-detail-card">
            <h2>{data.name}</h2>
            <div className="user-info">
              <p><strong>id:</strong> {data.id}</p>
              <p><strong>username:</strong> {data.username}</p>
              <p><strong>email:</strong> {data.email}</p>
              <p><strong>phone:</strong> {data.phone}</p>
              <p><strong>website:</strong> {data.website}</p>
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link to="/user" className="nav-link-sub">Back to Users</Link>
            </div>
        </article>
    </div>
  )
}
export default UserDetail
