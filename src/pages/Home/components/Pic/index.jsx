import { useState } from "react";
import styles from "./styles.module.scss";
import { Button, Image } from "antd";

const Pic = () => {
  const [preImg, setPreImg] = useState("");
  const [lastImg, setLastImg] = useState("");
  const handleClick = () => {
    setPreImg(
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    );
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBox}>
        <div className={styles.preImg}>
          <div className={styles.header}>请上传需要检测的图片</div>
          <Image width={400} src={preImg} />
          <Button onClick={handleClick}>上传图片</Button>
        </div>
        <div className={styles.lastImg}>
          <div className={styles.header}>检测结果如下</div>
          <Image
            width={400}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </div>
    </div>
  );
};
export default Pic;
