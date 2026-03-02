import { useLoaderData } from "react-router-dom";


const User = () =>  {
  const data = useLoaderData();
  
  return (
    <div className="user">
    {data.map((d) => (
    
      <div key={d.id}>
        
        <p>{d.name}</p>
      </div>
    ))}
    </div>
  )
};
export const Userloader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
} 

export default User