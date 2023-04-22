import { useState } from "react";
import styles from "./styles.module.scss";
import { Button, Image } from "antd";
import axios from "axios";
import DataAnalysis from "./DataAnalysis";

const Pic = () => {
  const [preImg, setPreImg] = useState("");
  const [haveImg, setHaveImg] = useState(true);
  const [lastImg, setLastImg] = useState("");
  const getimg1 = () => {
    setHaveImg(true);
    let fileData = document.querySelector("#uploadimg1").files[0];
    let formdata = new FormData();
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      setPreImg(event.target.result);
    });
    reader.readAsDataURL(fileData);
    formdata.append("img1", fileData);
    console.log(fileData);
    setPreImg(formdata);
  };
  const getcomparisonresult = () => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    axios
      .post("http://127.0.0.1:5000/", preImg, {
        headers: headers,
      })
      .then((res) => {
        setLastImg(res.data.image_path);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("错误");
        console.error(err);
      });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>上传检测图片</div>
      <div className={styles.imgBox}>
        <div className={styles.preImg}>
          <div className={styles.header}>请上传需要检测的图片</div>
          <div className={styles.uploadWrapper}>
            <label for="uploadimg1" class={styles.uploadLabel}>
              <div class={styles.uploadIcon}>+</div>
              <div class={styles.uploadText}>点击上传图片</div>
            </label>
            <input
              type="file"
              name="file"
              multiple="multiple"
              id="uploadimg1"
              onChange={(e) => {
                console.log(e);
                getimg1();
              }}
            />
          </div>
          <br />
          <Image
            width={400}
            src={preImg}
            style={{
              display: `${haveImg ? "block" : "none"}`,
              position: "absolute",
              top: -400,
            }}
          />

          <Button
            onClick={() => {
              getcomparisonresult();
            }}
          >
            上传图片
          </Button>
        </div>
        <div className={styles.lastImg}>
          <div className={styles.header}>检测结果如下</div>
          <Image
            width={400}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </div>
      <DataAnalysis />
    </div>
  );
};
export default Pic;
