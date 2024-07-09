import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCreateProductMutation } from "../../components/context/api/productApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../components/context/slices/authSlice";
import { useDispatch } from "react-redux";

export default function FormPropsTextFields() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createProduct, { isSuccess, isLoading, isError }] = useCreateProductMutation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setPassword("");
      setConfirm("");
      toast.success("Registration Successful");
    }
    if (isError) {
      toast.error("Registration Failed");
      setPassword("");
      setConfirm("");
    }
  }, [isSuccess, isError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirm) {
      createProduct({ name, password });
      toast.success("Registration Successful")
      navigate('/book1')
      dispatch(setToken("token2828"));
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <div className="form">
      <div className="hammasi" style={{ height: '530px' }}>
        <form onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="outlined-required"
                label="Username"
              />
              <TextField
                className="input"
                id="outlined-password-input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <TextField
                className="input"
                id="outlined-confirm-password-input"
                label="Confirm password"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Enter your confirm password"
                autoComplete="current-password"
              />
              <Button variant="contained" type="submit" className="btn" disabled={isLoading}>Submit</Button>
              <p className="p">Already signed up? <Link to={'/'}>Go to sign in</Link></p>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
}
