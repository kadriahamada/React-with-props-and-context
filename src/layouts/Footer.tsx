import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          padding: "10px",
          margin: "10px",
          justifyContent: "flex-start",
          flexDirection: "column",
          textDecoration: "none",
          gap: "20px",
        }}
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/Login"}>LoginPage</Link>
        </li>
        <li>
          <Link to={"/signin"}>SigninPage</Link>
        </li>
        <li>
          <Link to={"/comores"}>ComorosPage</Link>
        </li>
        <li>
          <Link to={"/uganda"}>UgandaPage</Link>
        </li>
        <li>
          <Link to={"*"}>NoPageFound</Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
