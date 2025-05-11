import { Card, Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Your App Name",
  description: "Login or register for your account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 450,
          width: "100%",
          padding: 4,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          margin: "auto",
        }}
        className="rounded-lg"
      >
        <Box className="space-y-6">{children}</Box>
      </Card>
    </Box>
  );
}
