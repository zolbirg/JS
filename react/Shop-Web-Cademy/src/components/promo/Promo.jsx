import "./promo.css";
import promoImg from "./../../img/images/header-img.jpg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo_content">
          <div className="promo_text">
            <div className="promo_title">
              <span className="promo_title_hl">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="promo_title_hl hl--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo_description">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo_btn-wrapper">
              <a href="#!" className="promo_btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo_img">
            <img src={promoImg} alt="Promo img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
