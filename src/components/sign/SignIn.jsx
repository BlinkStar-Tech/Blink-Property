import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./ForgotPassword";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "./CustomIcons";
import { useAuth } from "../../context/AuthContext";

// Styled Card component for sign-in form
const Card = styled(MuiCard)({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: "24px",
  gap: "5px",
  margin: "auto",
  maxWidth: "450px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
});

// Styled container for the sign-in layout
const SignInContainer = styled(Stack)({
  height: "100vh",
  padding: "16px",
});

export default function SignIn() {
  const { login } = useAuth();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState({ open: false, message: "", severity: "success" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      // Use the login function from AuthContext
      login(result.user, result.token);

      setAlert({
        open: true,
        message: "Login successful!",
        severity: "success",
      });

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      setAlert({
        open: true,
        message: error.message || "Login failed",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleGoogleSignIn = async () => {
    // Implement Google Sign In
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const handleFacebookSignIn = async () => {
    // Implement Facebook Sign In
    window.location.href = "http://localhost:5000/api/auth/facebook";
  };

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="center">
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <h3>BlinkStar Properties</h3>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: { xs: "1rem", md: "2rem" },
              marginTop: "-5px",
            }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 1,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? "error" : "primary"}
                disabled={loading}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={passwordError ? "error" : "primary"}
                disabled={loading}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" disabled={loading} />}
              label="Remember me"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Sign in"}
            </Button>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: "center" }}
              disabled={loading}
            >
              Forgot your password?
            </Link>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleGoogleSignIn}
              startIcon={<GoogleIcon />}
              disabled={loading}
            >
              Sign in with Google
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={handleFacebookSignIn}
              startIcon={<FacebookIcon />}
              disabled={loading}
            >
              Sign in with Facebook
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <Link href="/signup" variant="body2" sx={{ alignSelf: "center" }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleAlertClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}
