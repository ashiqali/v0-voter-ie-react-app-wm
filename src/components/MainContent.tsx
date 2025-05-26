"use client"

import type React from "react"
import { Container, Typography, Card, CardContent, Button, Box, Link } from "@mui/material"
import Breadcrumb from "./Breadcrumb"

interface MainContentProps {
  onNavigate: (page: string) => void
}

const MainContent: React.FC<MainContentProps> = ({ onNavigate }) => {
  return (
    <Container maxWidth="sm" sx={{ py: 3, px: { xs: 2, sm: 3 } }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentPage="Home" onNavigate={onNavigate} />

      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            fontWeight: 400,
            color: "#333",
          }}
        >
          Welcome to Voter.ie
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: "1rem",
            lineHeight: 1.5,
            mb: 3,
          }}
        >
          Use this site to register to vote or to update your details.
        </Typography>
      </Box>

      {/* Action Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Check/Update Record Card */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#333",
                lineHeight: 1.4,
              }}
            >
              I want to check or update my record
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                bgcolor: "#4caf50",
                "&:hover": {
                  bgcolor: "#388e3c",
                },
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              Check the Register
            </Button>
          </CardContent>
        </Card>

        {/* New Registration Card */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#333",
                lineHeight: 1.4,
              }}
            >
              I am not registered
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                bgcolor: "#4caf50",
                "&:hover": {
                  bgcolor: "#388e3c",
                },
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              New registration
            </Button>
          </CardContent>
        </Card>

        {/* Report Error Card */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#333",
                lineHeight: 1.4,
              }}
            >
              I want to report an error on the Register
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: "#666",
                fontSize: "0.875rem",
                lineHeight: 1.5,
              }}
            >
              You believe that an entry in the Register about another person is inaccurate.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                bgcolor: "#4caf50",
                "&:hover": {
                  bgcolor: "#388e3c",
                },
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              Third party request
            </Button>
          </CardContent>
        </Card>

        {/* More Options Card */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: "#333",
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              More options ...
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate("help")
                }}
                sx={{
                  color: "#1976d2",
                  textDecoration: "underline",
                  fontSize: "1rem",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                FAQs
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#1976d2",
                  textDecoration: "underline",
                  fontSize: "1rem",
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                Download a form
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default MainContent
