"use client"

import type React from "react"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import HelpIcon from "@mui/icons-material/Help"
import DescriptionIcon from "@mui/icons-material/Description"
import PersonIcon from "@mui/icons-material/Person"

const DesktopSidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 280,
        flexShrink: 0,
        bgcolor: "white",
        borderRight: "1px solid #e0e0e0",
        height: "calc(100vh - 64px)",
        position: "sticky",
        top: 0,
        display: { xs: "none", md: "block" },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#4a90a4",
            fontWeight: 600,
            mb: 2,
            fontSize: "1.25rem",
          }}
        >
          Navigation
        </Typography>

        <List sx={{ p: 0 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                bgcolor: "#f0f7ff",
                "&:hover": {
                  bgcolor: "#e3f2fd",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <HomeIcon sx={{ color: "#4a90a4" }} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#4a90a4",
                  },
                }}
              />
              <InfoIcon sx={{ color: "#4a90a4", fontSize: 20 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <PersonIcon sx={{ color: "#666" }} />
              </ListItemIcon>
              <ListItemText
                primary="Check Registration"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#333",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <DescriptionIcon sx={{ color: "#666" }} />
              </ListItemIcon>
              <ListItemText
                primary="New Registration"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#333",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <HelpIcon sx={{ color: "#666" }} />
              </ListItemIcon>
              <ListItemText
                primary="Help & Support"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#333",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontSize: "0.875rem",
            lineHeight: 1.5,
          }}
        >
          Quick Links
        </Typography>

        <List sx={{ p: 0, mt: 1 }}>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              sx={{
                borderRadius: 1,
                py: 0.5,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <ListItemText
                primary="FAQs"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    color: "#1976d2",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 1,
                py: 0.5,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <ListItemText
                primary="Download Forms"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    color: "#1976d2",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default DesktopSidebar
