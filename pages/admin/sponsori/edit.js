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
    if (!formik.values.sponsorName) {
      setTitle("Nedefinit");
    } else setTitle(formik.values.sponsorName);
  };
  useEffect(() => {
    handleChangeTitle();
  });
  const formik = useFormik({
    initialValues: {
      sponsorName: "",
      photo: "",
      link: "",
    },
    validate: form_validate,
    onSubmit,
  });

  async function onSubmit(values) {}
  return (
    <LayoutEditAdmin title={title}>
      <form className="flex flex-col h-screen border-r" onSubmit={formik.handleSubmit}>
        <Content title={title} styled={"italic"} iconRight={true} link="sponsori" />
        <div className="flex-1 overflow-y-auto">
          {/* SPONOSR NAME */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="sponsorName" className={styles.input_label}>
                Nume Sponsor
              </label>
              <div
                className={`${
                  formik.errors.sponsorName && formik.touched.sponsorName ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.sponsorName}
                </p>
              </div>
            </div>

            <input
              id="lastName"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.sponsorName && formik.touched.sponsorName ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("sponsorName")}
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
                <input
                  type="file"
                  className="hidden"
                  onChange={(event) => {
                    setPhoto(event);
                  }}
                />
              </label>
            </div>
          </div>
          {/* SPONOSR Link */}
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <label htmlFor="sponsorLink" className={styles.input_label}>
                Link Sponsor
              </label>
              <div
                className={`${
                  formik.errors.sponsorLink && formik.touched.sponsorLink ? "inline" : "hidden"
                } flex items-center group`}
              >
                <span className={``}>
                  <AiOutlineQuestionCircle />
                </span>
                <p className="text-red-500 pl-2 invisible group-hover:visible">
                  {formik.errors.sponsorLink}
                </p>
              </div>
            </div>

            <input
              id="sponsorLink"
              type="text"
              className={`${styles.input_text} ${
                formik.errors.sponsorLink && formik.touched.sponsorLink ? "border-rose-600" : ""
              }`}
              {...formik.getFieldProps("sponsorLink")}
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
            Adauga Sponsor
          </button>
        </div>
      </form>
    </LayoutEditAdmin>
  );
}

export default Edit;
