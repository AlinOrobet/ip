import LayoutEditAdmin from "../../../layout/layoutEditAdmin";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {useEffect, useState} from "react";
import styles from "../../../styles/Form.module.css";
import form_validate from "../../../lib/validate";
import Content from "../../../components/AdminComponents/Content";
import {useFormik} from "formik";
function Post() {
  const [title, setTitle] = useState("Nedefinit");
  const [valueCheckBox, setValueCheckBox] = useState(false);
  const handleChangeTitle = () => {
    if (!formik.values.title) {
      setTitle("Nedefinit");
    } else setTitle(formik.values.title);
  };
  useEffect(() => {
    handleChangeTitle();
  });
  const postInit = {
    category: "", //juniori mini-volei first-team
    match: "",
    title: "", //
    subtitle: "", //
    content: "", //
    images: [],
    author: "", //GSP TV
    date: "", //
    hour: "",
    match: "", //true or false
  };
  const formik = useFormik({
    initialValues: postInit,
    validate: form_validate,
    onSubmit,
  });
  async function onSubmit(values) {}
  //DELETE
  const [toDelete, setToDelete] = useState(false);
  //TODO func remove
  console.log(formik.values.match);
  return (
    <LayoutEditAdmin title="Creator Continut">
      <form className="flex flex-col h-screen border-r" onSubmit={formik.handleSubmit}>
        <Content
          title={title}
          styled={"italic"}
          iconRight={true}
          link="/cc/posts"
          setToDelete={setToDelete}
        />
        <div className="flex-1 overflow-y-auto mb-4">
          {/* HERO ? */}
          <div className="pt-4 px-4 flex items-center space-x-4">
            <input
              id="hero"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              onClick={() => setValueCheckBox(!valueCheckBox)}
            />
            <label>Doriti ca aceast articol sa fie in prim-plan?</label>
          </div>
          {/* MATCH FOR HERO */}
          <div className={`${valueCheckBox === true ? "inline" : "hidden"}`}>
            <div className="pt-4 px-2">
              <div className="flex items-center">
                <label htmlFor="match" className={styles.input_label}>
                  Meciul Referinta
                </label>
                <div
                  className={`${
                    formik.errors.match && formik.touched.match ? "inline" : "hidden"
                  } flex items-center group`}
                >
                  <span className={``}>
                    <AiOutlineQuestionCircle />
                  </span>
                  <p className="text-red-500 pl-2 invisible group-hover:visible">
                    {formik.errors.match}
                  </p>
                </div>
              </div>
              <select
                id="match"
                className={`${styles.input_text} ${
                  formik.errors.match && formik.touched.match ? "border-rose-600" : ""
                }`}
                {...formik.getFieldProps("match")}
              >
                <option>Alege Meciul</option>
                {matches.map((item) => (
                  <option key={item.id}>{item.title}</option>
                ))}
              </select>
            </div>
          </div>
          {/* CATEGORY */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="category" className={styles.input_label}>
                Categorie
              </label>
              <div
                className={`${
                  formik.errors.category && formik.touched.category ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.category}
                </p>
              </div>
            </div>
            <select
              id="category"
              className={`${styles.input_text} ${
                formik.errors.category && formik.touched.category ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("category")}
            >
              <option>Alege Categoria</option>
              <option>Prima Echipa</option>
              <option>Juniori</option>
              <option>Cadeti</option>
              <option>Sperante</option>
              <option>Mini volei</option>
            </select>
          </div>
          {/* TITLE */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="title" className={styles.input_label}>
                Titlu
              </label>
              <div
                className={`${
                  formik.errors.title && formik.touched.title ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.title}
                </p>
              </div>
            </div>
            <input
              id="title"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.title && formik.touched.title ? "border-rose-600" : ""
              }`}
              value={formik.values.title}
              {...formik.getFieldProps("title")}
            />
          </div>
          {/* SUBTITLE */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="subtitle" className={styles.input_label}>
                Subtitlu
              </label>
              <div
                className={`${
                  formik.errors.subtitle && formik.touched.subtitle ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.subtitle}
                </p>
              </div>
            </div>
            <input
              id="subtitle"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.subtitle && formik.touched.subtitle ? "border-rose-600" : ""
              }`}
              value={formik.values.subtitle}
              {...formik.getFieldProps("subtitle")}
            />
          </div>
          {/* CONTENT */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="content" className={styles.input_label}>
                Descriere
              </label>
              <div
                className={`${
                  formik.errors.content && formik.touched.content ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.content}
                </p>
              </div>
            </div>
            <textarea
              rows="6"
              id="content"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.content && formik.touched.content ? "border-rose-600" : ""
              }`}
              value={formik.values.content}
              {...formik.getFieldProps("content")}
            />
          </div>
          {/* IMAGE */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label className={styles.input_label}>Imagine</label>
              <div
                className={`${
                  formik.errors.images && formik.touched.images ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.images}
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
          {/* AUTHOR */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="author" className={styles.input_label}>
                Autor
              </label>
              <div
                className={`${
                  formik.errors.author && formik.touched.author ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.author}
                </p>
              </div>
            </div>
            <input
              id="author"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.author && formik.touched.author ? "border-rose-600" : ""
              }`}
              value={formik.values.author}
              {...formik.getFieldProps("author")}
            />
          </div>
          {/* DATE */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="date" className={styles.input_label}>
                Data Postare
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
              value={formik.getFieldProps("date")}
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
              value={formik.values.hour}
              {...formik.getFieldProps("hour")}
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
            Modifica Articol
          </button>
        </div>
      </form>
    </LayoutEditAdmin>
  );
}

export default Post;
const matches = [{id: 1, title: "REAL VS BARCA"}];
