"use client"

import type React from "react"
import { AppBar, Toolbar, Typography, IconButton, Box, Button, useTheme, useMediaQuery } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

interface HeaderProps {
  onMenuClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar position="static" sx={{ bgcolor: "#4a90a4", boxShadow: "none" }}>
      <Toolbar sx={{ minHeight: { xs: 64, sm: 70 } }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          {/* Government Logo */}
          <Box
            sx={{
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              bgcolor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: 30, sm: 40 },
                height: { xs: 30, sm: 40 },
                background: "radial-gradient(circle, #4a90a4 2px, transparent 2px)",
                backgroundSize: "8px 8px",
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Title */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Rialtas Áitiúil Éireann
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                lineHeight: 1.2,
                fontWeight: 300,
              }}
            >
              Local Government Ireland
            </Typography>
          </Box>
        </Box>

        {/* Language Toggle */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <Button
            sx={{
              color: "white",
              minWidth: "auto",
              p: 0.5,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              fontWeight: 500,
            }}
          >
            en
          </Button>
          <Typography sx={{ color: "white", mx: 0.5 }}>|</Typography>
          <Button
            sx={{
              color: "white",
              minWidth: "auto",
              p: 0.5,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              fontWeight: 500,
            }}
          >
            ga
          </Button>
        </Box>

        {/* Menu Button */}
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={onMenuClick} sx={{ p: 1 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
