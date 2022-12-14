import styles from "../styles/Layout.module.css";
import {useState} from "react";
export default function LayoutAuth({children, which}) {
  const [bgImage, setBgImage] = useState("");
  const handleChangeImage = () => {
    if (which === "Administrator") {
      setBgImage("login_admin.png");
    } else {
      setBgImage("login_cc.png");
    }
  };
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className="hidden lg:inline relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-md">
          <div
            className={styles.cartoonImg}
            style={{
              backgroundImage: `url("${bgImage}")`,
            }}
          ></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="right flex flex-col justify-evenly ">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
