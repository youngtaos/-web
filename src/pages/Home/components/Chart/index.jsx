import styles from "./styles.module.scss";
import { Image } from "antd";
import s1 from "../../../../assets/s1.png";
import s2 from "../../../../assets/s2.png";
import s3 from "../../../../assets/s3.png";
import s4 from "../../../../assets/s4.png";
import s5 from "../../../../assets/s5.png";
import s6 from "../../../../assets/s6.png";
const ChartCom = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBox}>
        <Image width={500} src={s3} />
        <Image width={500} src={s4} />
        <Image width={500} src={s5} />
        <Image width={500} src={s2} />
      </div>
      <div className={styles.imgBox}>
        <Image width={500} src={s1} />
        <Image width={800} src={s6} />
      </div>
    </div>
  );
};

export default ChartCom;
