import "./loadingPage.scss";
import { Logotype } from "../../components/logotype/Logotype";
import { useNavigate, type NavigateFunction } from "react-router-dom";

export const LoadingPage = () => {
  const navigate: NavigateFunction = useNavigate();

  setTimeout(() => {
    navigate("/booking", { replace: true });
  }, 2000);

  return (
    <main className="loading-main">
      <Logotype>
        <h1 className="loading-main__heading">strajk</h1>
        <h2 className="loading-main__subtitle">bowling</h2>
      </Logotype>
      <div className="cover"></div>
    </main>
  );
};
