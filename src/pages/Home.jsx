import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={login}>Login with Discord</button>
    </div>
  );
};

export default Home;