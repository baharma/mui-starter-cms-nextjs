import { Typography, Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Your App Name",
  description: "Login to your account",
};

export default function Page() {
  return (
    <>
      <Typography
        variant="h5"
        component="h1"
        className="text-center mb-6 font-bold"
      >
        Login
      </Typography>
      <Box>{/* Login form content */}</Box>
    </>
  );
}
