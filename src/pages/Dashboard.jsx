import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom"; // If using React Router

const Dashboard = () => {
  const { user, loading, logout } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/" />;

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <img src={user.avatar} alt="Avatar" />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;