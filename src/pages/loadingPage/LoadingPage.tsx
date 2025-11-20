import "./loadingPage.scss";
import { Logotype } from "../../components/logotype/Logotype";
import { useNavigate } from "react-router-dom";

export const LoadingPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/booking");
  }, 2000);

  return (
    <main className="loadingMain">
      <Logotype>
        <h1 className="loadingMain__heading">strajk</h1>
        <h2 className="loadingMain__subtitle">bowling</h2>
      </Logotype>
    </main>
  );
};
