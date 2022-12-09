import React from "react";
import LayoutPagesAdmin from "../../../layout/layoutPagesAdmin";
function Matches() {
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
  return (
    <LayoutPagesAdmin
      data={players}
      pageTitle="Sponsori"
      link="/sponsori"
      type="sponsor"
    ></LayoutPagesAdmin>
  );
}

export default Matches;
