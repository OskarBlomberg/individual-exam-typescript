import "./logotype.scss";
import logotype from "../../assets/logo.svg";
import type { JSX } from "react";

interface logotypeProps {
  children: JSX.Element[];
}

export const Logotype = ({ children }: logotypeProps) => {
  return (
    <div className="logo">
      <img
        className="logo__img"
        src={logotype}
        alt="Strajk's logo, a bowling ball on fire"
      />
      {children}
    </div>
  );
};
