import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../components/context/api/productApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../../components/context/slices/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
});

export default function FormPropsTextFields() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createProduct, { isSuccess, isLoading, isError }] = useCreateProductMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      confirm: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createProduct({ name: values.name, password: values.password });
      toast.success("Registration Successful");
      navigate('/home');
      dispatch(setToken("token2828"));
    },
  });

  React.useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      toast.success("Registration Successful");
    }
    if (isError) {
      toast.error("Registration Failed");
      formik.setFieldValue("password", "");
      formik.setFieldValue("confirm", "");
    }
  }, [isSuccess, isError, formik]);

  return (
    <div className="form">
      <div className="hammasi" style={{ height: '530px' }}>
        <form onSubmit={formik.handleSubmit}>
          <h1>Sign up</h1>
          <Box
            className="box"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                className="input"
                fullWidth
                required
                id="outlined-required"
                label="Username"
              />
              <TextField
                className="input"
                id="outlined-password-input"
                label="Password"
                type="password"
                {...formik.getFieldProps('password')}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <TextField
                className="input"
                id="outlined-confirm-password-input"
                label="Confirm password"
                type="password"
                placeholder="Enter your confirm password"
                autoComplete="current-password"
              />
              <Button variant="contained" type="submit" className="btn" disabled={isLoading}>Submit</Button>
              <p className="p">Already signed up? <Link to={'/login'}>Go to sign in</Link></p>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
}
