import { Logotype } from "../../components/logotype/Logotype";
import "./errorPage.scss";

export const ErrorPage = () => {
  return (
    <main className="error-page">
      <Logotype>
        <h1 className="loading-main__heading">strajk</h1>
        <h2 className="loading-main__subtitle">bowling</h2>
      </Logotype>
      <h2 className="error-page__msg">Error. Route not found.</h2>
    </main>
  );
};
