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
    if (!formik.values.firstName && !formik.values.lastName) {
      setTitle("Nedefinit");
    } else setTitle(formik.values.lastName + " " + formik.values.firstName);
  };
  useEffect(() => {
    handleChangeTitle();
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      photo: "",
      role: "",
    },
    validate: form_validate,
    onSubmit,
  });
  async function onSubmit(values) {
    let data = new FormData();
    let imagedata = document.querySelector('input[type="file"]').files[0];
    data.append(
      "coach",
      new Blob(
        [
          JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            dob: values.dob,
            photo: values.photo,
            role: values.role,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    data.append("imagefile", imagedata);

    await fetch("http://localhost:8080/api/coach/create", {
      mode: "no-cors",
      method: "POST",

      body: data,
    }).then((res) => res.json());
  }
  return (
    <LayoutEditAdmin title="Administrator">
      <form className="flex flex-col h-screen border-r" onSubmit={formik.handleSubmit}>
        <Content title={title} styled={"italic"} iconRight={true} link="admin/staff" />
        <div className="flex-1 overflow-y-auto">
          {/* LAST NAME */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="lastName" className={styles.input_label}>
                Nume
              </label>
              <div
                className={`${
                  formik.errors.lastName && formik.touched.lastName ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.lastName}
                </p>
              </div>
            </div>

            <input
              id="lastName"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.lastName && formik.touched.lastName ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("lastName")}
            />
          </div>
          {/* FIRST NAME */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="firstName" className={styles.input_label}>
                Prenume
              </label>
              <div
                className={`${
                  formik.errors.firstName && formik.touched.firstName ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.firstName}
                </p>
              </div>
            </div>
            <input
              id="firstName"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.firstName && formik.touched.firstName ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("firstName")}
            />
          </div>
          {/* IMAGE */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label className={styles.input_label}>Imagine</label>
              <div
                className={`${
                  formik.errors.photo && formik.touched.photo ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.photo}
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
          {/* DOB */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="dob" className={styles.input_label}>
                Data Nastere
              </label>
              <div
                className={`${
                  formik.errors.dob && formik.touched.dob ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.dob}
                </p>
              </div>
            </div>
            <input
              type="date"
              className={`${styles.input_text} ${
                formik.errors.dob && formik.touched.dob ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("dob")}
            />
          </div>
          {/* ROLE */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="role" className={styles.input_label}>
                Functie
              </label>
              <div
                className={`${
                  formik.errors.role && formik.touched.role ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.role}
                </p>
              </div>
            </div>
            <input
              id="role"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.role && formik.touched.role ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("role")}
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
            Adauga Membru Staff
          </button>
        </div>
      </form>
    </LayoutEditAdmin>
  );
}

export default Edit;
