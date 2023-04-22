import video from "../../../../assets/v1.mp4";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import styles from "./styles.module.scss";

const Video = () => {
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }) {
      setTimeout(() => {
        file.status == "done";
      }, 200);
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },

    // defaultFileList: [
    //   {
    //     uid: "1",
    //     name: "xxx.png",
    //     status: "uploading",
    //     url: "http://www.baidu.com/xxx.png",
    //     percent: 33,
    //   },
    //   {
    //     uid: "2",
    //     name: "yyy.png",
    //     status: "done",
    //     url: "http://www.baidu.com/yyy.png",
    //   },
    //   {
    //     uid: "3",
    //     name: "zzz.png",
    //     status: "error",
    //     response: "Server Error 500",
    //     // custom error message to show
    //     url: "http://www.baidu.com/zzz.png",
    //   },
    //],
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>上传检测视频</div>
      <div className={styles.content}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <div className={styles.video}>
          <video src={video} controls></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
