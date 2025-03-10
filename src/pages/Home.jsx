
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { login } = useAuth();
  

  

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={login}>Login with Discord</button>
    </div>
  );
};

export default Home;