import   {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LoginIn.css";
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../context/api/productApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setToken } from "../context/slices/authSlice";

export default function FormPropsTextFields() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: products } = useGetProductsQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLogin = products.some(
      (product) => product.name === name && product.password === password
    );
    if (isLogin) {
      navigate('/home');
      toast.success("Welcome");
      dispatch(setToken("token123"));
    } else {
      toast.error("Incorrect username or password");
    }
  };

  return (
    <div className="form">
      <div className="hammasi">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
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
                onChange={(e) => setname(e.target.value)}  
                id="outlined-required"
                label="Username"
              />
              <TextField
                className="input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                autoComplete="current-password"
              />
              <Button type="submit" variant="contained" className="btn">
                Sign In
              </Button>
              <p className="p">
                Already signed up? <Link to={'/signup'}>Go to sign up.</Link>
              </p>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
}
