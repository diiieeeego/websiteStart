
import H1 from "../components/H1";
import H2 from "../components/H2";
import {Sun} from "lucide-react"

const Home = () => {
  return (
    <div className="space-y-8">
      <H1>Home <Sun size={32} /></H1>
      <H2>Lorem ipsum dolor sit amet consectetur adipisicing elit</H2>
      <p>
        Odio iusto obcaecati libero maiores quos maxime dolorem esse culpa
        architecto, exercitationem voluptas odit provident voluptatibus enim
        quaerat mollitia, recusandae illo labore?
      </p>
    </div>
  );
};

export default Home;
