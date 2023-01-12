import LayoutEditAdmin from "../../../layout/layoutEditAdmin";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {useEffect, useState} from "react";
import styles from "../../../styles/Form.module.css";
import form_validate from "../../../lib/validate";
import Content from "../../../components/AdminComponents/Content";
import {useFormik} from "formik";
function Team() {
  const [title, setTitle] = useState("Nedefinit");
  const handleChangeTitle = () => {
    if (!formik.name) {
      setTitle("Nedefinit");
    } else setTitle(formik.values.name);
  };
  useEffect(() => {
    handleChangeTitle();
  });
  const team = {
    teamName: "",
    teamLogo: "",
    teamLocation: "",
  };
  const formik = useFormik({
    initialValues: team,
    validate: form_validate,
    onSubmit,
  });
  async function onSubmit(values) {}
  //DELETE
  const [toDelete, setToDelete] = useState(false);
  //TODO func remove
  return (
    <LayoutEditAdmin title="Administrator">
      <form className="flex flex-col h-screen border-r" onSubmit={formik.handleSubmit}>
        <Content
          title={title}
          styled={"italic"}
          iconRight={true}
          link="admin/teams"
          setToDelete={setToDelete}
        />
        <div className="flex-1 overflow-y-auto mb-5">
          {/* Team Name */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="teamName" className={styles.input_label}>
                Nume Echipa
              </label>
              <div
                className={`${
                  formik.errors.teamName && formik.touched.teamName ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.teamName}
                </p>
              </div>
            </div>
            <input
              id="teamName"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.teamName && formik.touched.teamName ? "border-rose-600" : ""
              }`}
              value={formik.getFieldProps("teamName")}
              {...formik.getFieldProps("teamName")}
            />
          </div>
          {/* Logo Team */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label className={styles.input_label}>Logo Echipa</label>
              <div
                className={`${
                  formik.errors.teamLogo && formik.touched.teamLogo ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.teamLogo}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <label className="flex flex-col justify-center items-center w-full h-12 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="p-3 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          {/* Location */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="teamLocation" className={styles.input_label}>
                Locatie Echipa
              </label>
              <div
                className={`${
                  formik.errors.teamLocation && formik.touched.teamLocation ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.teamLocation}
                </p>
              </div>
            </div>
            <input
              id="teamLocation"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.teamLocation && formik.touched.teamLocation ? "border-rose-600" : ""
              }`}
              value={formik.getFieldProps("teamLocation")}
              {...formik.getFieldProps("teamLocation")}
            />
          </div>
        </div>
        <div className="border-t px-2 py-3">
          <button
            disabled={Object.keys(formik.errors).length !== 0}
            type="submit"
            className={
              Object.keys(formik.errors).length !== 0
                ? `${styles.button_disable}`
                : `${styles.button_enable}`
            }
          >
            Modifica Echipa
          </button>
        </div>
      </form>
    </LayoutEditAdmin>
  );
}

export default Team;
// export async function getServerSideProps(context) {
//   const { params } = context;
//   const responsePlayer = await fetch(
//     `http://localhost:8080/api/player/${params.idPlayer}`
//   );
//   const player = await responsePlayer.json();
//   // const responsePlayers = await fetch("");
//   // const players = await responsePlayers.json();
//   return {
//     props: {
//       player,
//       // players,
//     },
//   };
// }
