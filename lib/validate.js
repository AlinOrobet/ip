export default function form_validate(values) {
  const errors = {};
  // PLAYER VALIDATE START
  if (!values.firstName) {
    errors.firstName = "Camp Obligatoriu!!";
  } else if (values.firstName.includes(" ")) {
    errors.firstName = "Prenume Invalid!!";
  }
  if (!values.lastName) {
    errors.lastName = "Camp Obligatoriu!!";
  } else if (values.lastName.includes(" ")) {
    errors.lastName = "Nume de familie Invalid!!";
  }
  if (!values.height) {
    errors.height = "Camp Obligatoriu!!";
  }
  if (!values.dob) {
    errors.dob = "Camp Obligatoriu!!";
  }
  if (!values.shirtNumber) {
    errors.shirtNumber = "Camp Obligatoriu!!";
  }
  if (!values.category) {
    errors.category = "Camp Obligatoriu!!";
  } else if (values.category.includes(" ")) {
    errors.category = "Categorie Invalida!!";
  }
  if (!values.nationality) {
    errors.nationality = "Camp Obligatoriu!!";
  } else if (values.nationality.includes(" ")) {
    errors.nationality = "Nationalitate Invalida!!";
  }
  // PLAYER VALIDATE STOP

  // MATCH VALIDATE START
  // MATCH VALIDATE STOP

  // SPONSOR VALIDATE START
  // SPONSOR VALIDATE STOP

  // STAFF VALIDATE START
  // STAFF VALIDATE STOP

  // PLAYER STATS VALIDATE START
  // PLAYER STATS VALIDATE STOP
  console.log(errors);
  return errors;
}
