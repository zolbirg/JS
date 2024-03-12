import styles from "./card.module.css";
import arrowImg from "./../../img/icons/arrow.svg";

export default function Card(props) {

    //const {title, img} = props; деструкторизация 

  return (
    <div className={styles.card}>
        <a href="#!" className={styles.card_link}></a>
      <img className={styles.card_img} src={props.img} alt="Category" />
      <div className={styles.card_body}>
        <div className={styles.card_text}>
            <div className={styles.card_title}>{props.title}</div>
            <div className={styles.card_muted}>Explore Now!</div>

        </div>
        <div className={styles.card_icon}>
            <img src={arrowImg} alt="img" />
        </div>
      </div>
    </div>
  );
}
