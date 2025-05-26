"use client"

import type React from "react"
import { Container, Typography, Box, Link } from "@mui/material"
import Breadcrumb from "./Breadcrumb"

interface HelpPageProps {
  onNavigate: (page: string) => void
}

const HelpPage: React.FC<HelpPageProps> = ({ onNavigate }) => {
  return (
    <Container maxWidth="sm" sx={{ py: 3, px: { xs: 2, sm: 3 } }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentPage="Help" onNavigate={onNavigate} />

      {/* Help Content */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            fontWeight: 400,
            color: "#333",
          }}
        >
          Help
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: "1rem",
            lineHeight: 1.5,
            mb: 2,
          }}
        >
          Have you checked our{" "}
          <Link
            href="#"
            sx={{
              color: "#1976d2",
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            FAQ section
          </Link>
          ? There is a lot of useful information there, including on:
        </Typography>

        {/* Bullet Points */}
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Box component="li" sx={{ mb: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              Voter eligibility
            </Typography>
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              Information needed and why
            </Typography>
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              Requirement for your PPSN and where to find it
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          If you cannot find the information you are looking for in the FAQ section, you should contact your{" "}
          <Link
            href="#"
            sx={{
              color: "#1976d2",
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            local authority
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  )
}

export default HelpPage
