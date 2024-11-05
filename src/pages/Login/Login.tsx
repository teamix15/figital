import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import styles from "./Login.module.scss";
import { schema } from "./schema";

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.loginContainer}>
      <Typography variant="h5">Вход</Typography>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Логин"
          variant="outlined"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          className={styles.input}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Пароль"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          className={styles.input}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          className={styles.submitButton}
        >
          Вход
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
