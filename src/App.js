import "./App.css";
import Modeled from "./model";

function FooterButton({ onClick, iconSrc, altText, label }) {
  return (
    <button className="footer-button" onClick={onClick}>
      <img className="image-button" src={iconSrc} alt={altText} />
    </button>
  );
}

function Header() {
  const name = "CoolName";
  const number = 16;
  const bulbs = 120;
  const coins = 9300;
  return (
    <div className="content-header">
      <section className="name-header">
        <h1>{name}</h1>
        <h1>#{number}</h1>
      </section>
      <section className="money-header">
        <div className="coins">
          <img
            className="icon"
            alt=""
            src="/pics/wad-of-money-svgrepo-com.svg"
          ></img>
          <h1>{coins}</h1>
        </div>
        <div className="coins">
          <img
            className="icon"
            alt=""
            src="/pics/lightbulb-bolt-svgrepo-com.svg"
          ></img>
          <h1>{bulbs}</h1>
        </div>
      </section>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <FooterButton
        onClick={() => alert("You are gonna change clothes")}
        iconSrc="/pics/home-1-svgrepo-com.svg"
        altText="Clothes"
        label="Clothes"
      />
      <div className="vertical-divider"></div>

      <FooterButton
        onClick={() => alert("You are going shopping")}
        iconSrc="/pics/cart-large-4-svgrepo-com.svg"
        altText="Shopping Cart"
        label="Shopping"
      />
      <div className="vertical-divider"></div>
      <FooterButton
        onClick={() => alert("You are gonna do tests")}
        iconSrc="/pics/dumbbells-svgrepo-com.svg"
        altText="Test"
        label="Test"
      />
      <div className="vertical-divider"></div>
      <FooterButton
        onClick={() => alert("You are gonna watch prizes")}
        iconSrc="/pics/settings-minimalistic-svgrepo-com.svg"
        altText="Achievements"
        label="Achievements"
      />
    </div>
  );
}
export default function Profile() {
  return (
    <div className="container">
      <Header />
      <div className="horizontal-separator" />
      <div className="main-content">
        <Modeled className="model" />
      </div>
      <Footer />
    </div>
  );
}
