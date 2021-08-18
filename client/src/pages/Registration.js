import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Registration = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(5).max(20).required(),
  });

  const onSubmit = (data, { resetForm }) => {
      axios.post("http://localhost:5000/auth", data)
      .then(()=> console.log(data))

      resetForm();
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="formContainer">
          <label htmlFor="username">Username</label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Username"
            autocomplete="off"
          ></Field>

          <label htmlFor="password">Password</label>
          <ErrorMessage name="password" component="span" />
          <Field
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Password"
            autocomplete="off"
          ></Field>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
