"use client"

import type React from "react"
import { Box, Container, Typography, Link, useTheme, useMediaQuery } from "@mui/material"

const Footer: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        {/* Government Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                background: "radial-gradient(circle, #4a90a4 2px, transparent 2px)",
                backgroundSize: "8px 8px",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#666",
            fontSize: "0.875rem",
            mb: 2,
            lineHeight: 1.4,
          }}
        >
          Rialtas Áitiúil Éireann
          <br />
          Local Government Ireland
        </Typography>

        {/* Footer Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 3 },
            mb: 2,
          }}
        >
          <Link
            href="#"
            sx={{
              color: "#666",
              textDecoration: "none",
              fontSize: "0.875rem",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Help
          </Link>
          <Link
            href="#"
            sx={{
              color: "#666",
              textDecoration: "none",
              fontSize: "0.875rem",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Accessibility Statement
          </Link>
          <Link
            href="#"
            sx={{
              color: "#666",
              textDecoration: "none",
              fontSize: "0.875rem",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Privacy Statement
          </Link>
        </Box>

        {/* Validation Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: 80,
              height: 15,
              bgcolor: "#1976d2",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "white", fontSize: "0.625rem", fontWeight: "bold" }}>W3C</Typography>
          </Box>
          <Box
            sx={{
              width: 80,
              height: 15,
              bgcolor: "#ff9800",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "white", fontSize: "0.625rem", fontWeight: "bold" }}>WAI-AA</Typography>
          </Box>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#666",
            fontSize: "0.75rem",
          }}
        >
          ©2025 All Rights Reserved
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
