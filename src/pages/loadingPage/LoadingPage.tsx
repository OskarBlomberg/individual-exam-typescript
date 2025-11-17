import "./loadingPage.scss";
import { Logotype } from "../../components/logotype/Logotype";

export const LoadingPage = () => {
  return (
    <main className="logoMain">
      <Logotype>
        <h1 className="logoMain__heading">strajk</h1>
        <h2 className="logoMain__subtitle">bowling</h2>
      </Logotype>
    </main>
  );
};
