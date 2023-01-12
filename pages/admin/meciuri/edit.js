import LayoutEditAdmin from "../../../layout/layoutEditAdmin";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {useEffect, useState} from "react";
import styles from "../../../styles/Form.module.css";
import form_validate from "../../../lib/validate";
import Content from "../../../components/AdminComponents/Content";
import {useFormik} from "formik";
function Edit() {
  const [title, setTitle] = useState("Nedefinit");
  const handleChangeTitle = () => {
    if (!formik.values.team_1 && !formik.values.team_2) {
      setTitle("Nedefinit");
    } else
      setTitle(
        formik.values.team_1 +
          " VS " +
          formik.values.team_2 +
          " - " +
          formik.values.scorTeam_1 +
          " : " +
          formik.values.scorTeam_2
      );
  };
  useEffect(() => {
    handleChangeTitle();
  });
  const formik = useFormik({
    initialValues: {
      team_1: "",
      team_2: "",
      data: "",
      hour: "",
      location: "",
      scorTeam_1: "",
      scorTeam_2: "",
    },
    validate: form_validate,
    onSubmit,
  });

  async function onSubmit(values) {}
  return (
    <LayoutEditAdmin title="Administrator">
      <form className="flex flex-col h-screen border-r" onSubmit={formik.handleSubmit}>
        <Content title={title} styled={"italic"} iconRight={true} link="admin/meciuri" />
        <div className="flex-1 overflow-y-auto">
          {/* TEAM_1 */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="team_1" className={styles.input_label}>
                Echipa Gazda
              </label>
              <div
                className={`${
                  formik.errors.team_1 && formik.touched.team_1 ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.team_1}
                </p>
              </div>
            </div>
            <select
              id="team_1"
              className={`${styles.input_text} ${
                formik.errors.team_1 && formik.touched.team_1 ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("team_1")}
            >
              <option>Alege Echipa Gazda</option>
              {teams.map((item) => (
                <option key={item.id} value={item.teamName}>
                  {item.teamName}
                </option>
              ))}
            </select>
          </div>
          {/* TEAM_2 */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="team_2" className={styles.input_label}>
                Echipa Oaspete
              </label>
              <div
                className={`${
                  formik.errors.team_2 && formik.touched.team_2 ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.team_2}
                </p>
              </div>
            </div>
            <select
              id="team_2"
              className={`${styles.input_text} ${
                formik.errors.team_2 && formik.touched.team_2 ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("team_2")}
            >
              <option>Alege Echipa Oaspete</option>
              {teams.map((item) => (
                <option key={item.id} value={item.teamName}>
                  {item.teamName}
                </option>
              ))}
            </select>
          </div>
          {/* DATE*/}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="date" className={styles.input_label}>
                Data Meci
              </label>
              <div
                className={`${
                  formik.errors.date && formik.touched.date ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.date}
                </p>
              </div>
            </div>
            <input
              type="date"
              className={`${styles.input_text} ${
                formik.errors.date && formik.touched.date ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("date")}
            />
          </div>
          {/* HOUR */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="hour" className={styles.input_label}>
                Ora
              </label>
              <div
                className={`${
                  formik.errors.hour && formik.touched.hour ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.hour}
                </p>
              </div>
            </div>

            <input
              id="hour"
              type="time"
              className={`${styles.input_text} ${
                formik.errors.hour && formik.touched.hour ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("hour")}
            />
          </div>
          {/* LOCATION */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="location" className={styles.input_label}>
                Locatie
              </label>
              <div
                className={`${
                  formik.errors.location && formik.touched.location ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.location}
                </p>
              </div>
            </div>
            <input
              id="location"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.location && formik.touched.location ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("location")}
            />
          </div>
          {/* SCOR */}
          <div className="flex">
            <div className="pt-4 px-2 w-1/2">
              <div className="flex items-center">
                <label htmlFor="scorTeam_1" className={styles.input_label}>
                  Scor Echipa Gazda
                </label>
                <div
                  className={`${
                    formik.errors.scorTeam_1 && formik.touched.scorTeam_1 ? "inline" : "hidden"
                  } flex items-center group`}
                >
                  <span className={``}>
                    <AiOutlineQuestionCircle />
                  </span>
                  <p className="text-red-500 pl-2 invisible group-hover:visible">
                    {formik.errors.scorTeam_1}
                  </p>
                </div>
              </div>
              <input
                id="scorTeam_1"
                type="text"
                className={`${styles.input_text} ${
                  formik.errors.scorTeam_1 && formik.touched.scorTeam_1 ? "border-rose-600" : ""
                }`}
                {...formik.getFieldProps("scorTeam_1")}
              />
            </div>
            <div className="pt-4 px-2 w-1/2">
              <div className="flex items-center">
                <label htmlFor="scorTeam_2" className={styles.input_label}>
                  Scor Echipa Oaspete
                </label>
                <div
                  className={`${
                    formik.errors.scorTeam_2 && formik.touched.scorTeam_2 ? "inline" : "hidden"
                  } flex items-center group`}
                >
                  <span className={``}>
                    <AiOutlineQuestionCircle />
                  </span>
                  <p className="text-red-500 pl-2 invisible group-hover:visible">
                    {formik.errors.scorTeam_2}
                  </p>
                </div>
              </div>
              <input
                id="scorTeam_2"
                type="text"
                className={`${styles.input_text} ${
                  formik.errors.scorTeam_2 && formik.touched.scorTeam_2 ? "border-rose-600" : ""
                }`}
                {...formik.getFieldProps("scorTeam_2")}
              />
            </div>
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
            Adauga Meci
          </button>
        </div>
      </form>
    </LayoutEditAdmin>
  );
}

export default Edit;
const teams = [
  {
    id: 1,
    teamName: "Real",
    logo: "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valladolid_mediano.png",
  },
];
