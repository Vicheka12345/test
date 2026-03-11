import { Link } from "react-router-dom";
import { Data } from "./Data";

const User = () =>  {
  const data = Data;
  
  return (
    <div className="user">
    {data.map((d) => (
    
      <div key={d.id}> 
        <p>{d.name}</p>
        <Link to={`/user/${d.id}`} className="nav-link-sub">View Detail</Link>
      </div>
    ))}
    </div>
  )
};

export default User