import BedroomHome from "./Home/BedroomHome";
import ContactUsBanner from "./Home/ContactUsBanner";
import DrawingHome from "./Home/DrawingHome";
import HomeBanner from "./Home/HomeBanner";
import KitchenHome from "./Home/KitchenHome";
import Services from "./Home/Services";
import TVRoomHome from "./Home/TVRoomHome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div><HomeBanner /></div>
      <div className="m-1 m-md-5">
        <div><Services /> </div>
        <div><BedroomHome /> </div>
        <div><KitchenHome /> </div>
        <div><DrawingHome /></div>
        <div><TVRoomHome /></div>
        <div><ContactUsBanner /></div>
      </div>
    </div>
  );
}
