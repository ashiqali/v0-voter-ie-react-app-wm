"use client"

import type React from "react"
import { Box, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import InfoIcon from "@mui/icons-material/Info"

interface BreadcrumbProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPage, onNavigate }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      {/* Home Icon and Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.7,
          },
        }}
        onClick={() => onNavigate("home")}
      >
        <HomeIcon sx={{ color: "#4a90a4", mr: 1, fontSize: 20 }} />
        <Typography
          variant="body2"
          sx={{
            color: "#4a90a4",
            fontWeight: 500,
            fontSize: "0.875rem",
          }}
        >
          Home
        </Typography>
      </Box>

      {/* Arrow */}
      <ChevronRightIcon
        sx={{
          color: "#666",
          mx: 1,
          fontSize: 16,
        }}
      />

      {/* Current Page */}
      <Typography
        variant="body2"
        sx={{
          color: "#666",
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
      >
        {currentPage}
      </Typography>

      {/* Info Icon */}
      <InfoIcon sx={{ color: "#4a90a4", ml: "auto", fontSize: 20 }} />
    </Box>
  )
}

export default Breadcrumb
