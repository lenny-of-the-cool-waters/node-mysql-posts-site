import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const CreatePost = () => {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data, {resetForm}) => {
    axios.post('http://localhost:5000/posts', data).then(() => {
        console.log("Database updated")
    })
    resetForm();
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label htmlFor="title">Title:</label>
          <ErrorMessage name="title" component="span"/>
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="example"
            autoComplete="off"
          ></Field>

          <label htmlFor="postText">Post Text:</label>
          <ErrorMessage name="postText" component="span"/>
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="Enter post text"
            autoComplete="off"
          ></Field>

          <label htmlFor="username">Username:</label>
          <ErrorMessage name="username" component="span"/>
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="username"
            autoComplete="off"
          ></Field>

          <button type="submit"> Create Post </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
