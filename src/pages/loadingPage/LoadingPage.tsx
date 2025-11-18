import "./loadingPage.scss";
import { Logotype } from "../../components/logotype/Logotype";

export const LoadingPage = () => {
  return (
    <main className="loadingMain">
      <Logotype>
        <h1 className="loadingMain__heading">strajk</h1>
        <h2 className="loadingMain__subtitle">bowling</h2>
      </Logotype>
    </main>
  );
};
