import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LayoutAuth from "../../layout/layoutAuth";
import styles from "../../styles/Form.module.css";
import {HiAtSymbol, HiFingerPrint} from "react-icons/hi";
import {useState} from "react";
import {useRouter} from "next/router";
export default function Login({which, session, setSession}) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <LayoutAuth which={which}>
      <Head>
        <title>Login {which}</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold py-4">
            Autentificare
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">{which}</p>
        </div>
        <form className="flex flex-col gap-5">
          <div className={`${styles.input_group}`}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={`${styles.input_group}`}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className="input-button">
            <button
              type="submit"
              className={styles.button_enable}
              onClick={() => setSession(!session)}
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          Don&apos;t have an account yet?
          <Link href={"/contact"} className="text-blue-700">
            Ask admin for it
          </Link>
        </p>
      </section>
    </LayoutAuth>
  );
}
