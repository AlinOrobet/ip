import LayoutEditAdmin from "../../../layout/layoutEditAdmin";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {useEffect, useState} from "react";
import styles from "../../../styles/Form.module.css";
import form_validate from "../../../lib/validate";
import Content from "../../../components/AdminComponents/Content";
import {useFormik} from "formik";
const playerStats = {
  idPlayerSelected: 1,
  aces: 1,
  attacks: 2,
  blocks: 3,
};
function PlayerStats() {
  const [title, setTitle] = useState("Nedefinit");
  const handleChangeTitle = () => {
    if (!formik.values.firstName && !formik.values.lastName) {
      setTitle("Nedefinit");
    } else setTitle(formik.values.lastName + " " + formik.values.firstName);
  };
  useEffect(() => {
    handleChangeTitle();
  });
  const formik = useFormik({
    initialValues: playerStats,
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
          link="admin/statistici-jucatori"
          setToDelete={setToDelete}
        />
        <div className="flex-1 overflow-y-auto">
          {/* PLAYER */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="playerId" className={styles.input_label}>
                Jucator
              </label>
              <div
                className={`${
                  formik.errors.playerId && formik.touched.playerId ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.playerId}
                </p>
              </div>
            </div>
            <select
              id="playerId"
              className={`${styles.input_text} ${
                formik.errors.playerId && formik.touched.playerId ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("playerId")}
            >
              <option>TREBUIE SCHIMBAT CU PLAYERUL ALES</option>
              {players.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.lastName + " " + item.firstName}
                </option>
              ))}
            </select>
          </div>
          {/* ACES */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="aces" className={styles.input_label}>
                Aces
              </label>
              <div
                className={`${
                  formik.errors.aces && formik.touched.aces ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.aces}
                </p>
              </div>
            </div>
            <input
              type="text"
              id="aces"
              className={`${styles.input_text} ${
                formik.errors.aces && formik.touched.aces ? "border-rose-600" : ""
              }`}
              value={formik.getFieldProps("aces")}
              {...formik.getFieldProps("aces")}
            />
          </div>
          {/* ATTACKS */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="attacks" className={styles.input_label}>
                Atacuri
              </label>
              <div
                className={`${
                  formik.errors.attacks && formik.touched.attacks ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.attacks}
                </p>
              </div>
            </div>
            <input
              type="text"
              id="attacks"
              className={`${styles.input_text} ${
                formik.errors.attacks && formik.touched.attacks ? "border-rose-600" : ""
              }`}
              value={formik.getFieldProps("attacks")}
              {...formik.getFieldProps("attacks")}
            />
          </div>
          {/* BLOCKS */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="blocks" className={styles.input_label}>
                Blocaje
              </label>
              <div
                className={`${
                  formik.errors.blocks && formik.touched.blocks ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.blocks}
                </p>
              </div>
            </div>
            <input
              type="text"
              id="blocks"
              className={`${styles.input_text} ${
                formik.errors.blocks && formik.touched.blocks ? "border-rose-600" : ""
              }`}
              value={formik.getFieldProps("blocks")}
              {...formik.getFieldProps("blocks")}
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
            Modifica Statisticile pentru {title}
          </button>
        </div>
      </form>
    </LayoutEditAdmin>
  );
}

export default PlayerStats;
const players = [
  {
    id: 1,
    category: "Category 1",
    dob: "06/14/2000",
    firstName: "First Name 1",
    lastName: "Last Name 1",
    height: 193,
    nationality: "Nationality 1",
    photo: "Photo 1",
    shirtNumber: 1,
  },
  {
    id: 2,
    category: "Category 2",
    dob: "DOB 2",
    firstName: "First Name 2",
    lastName: "Last Name 2",
    height: "Height 2",
    nationality: "Nationality 2",
    photo: "Photo 2",
    shirtNumber: "shirt Number 2",
  },
  {
    id: 3,
    category: "Category 3",
    dob: "DOB 3",
    firstName: "First Name 3",
    lastName: "Last Name 3",
    height: "Height 3",
    nationality: "Nationality 3",
    photo: "Photo 3",
    shirtNumber: "shirt Number 3",
  },
  {
    id: 4,
    category: "Category 4",
    dob: "DOB 4",
    firstName: "First Name 4",
    lastName: "Last Name 4",
    height: "Height 4",
    nationality: "Nationality 4",
    photo: "Photo 4",
    shirtNumber: "shirt Number 4",
  },
  {
    id: 5,
    category: "Category 5",
    dob: "DOB 5",
    firstName: "First Name 5",
    lastName: "Last Name 5",
    height: "Height 5",
    nationality: "Nationality 5",
    photo: "Photo 5",
    shirtNumber: "shirt Number 5",
  },
];
