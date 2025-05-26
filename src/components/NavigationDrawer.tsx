"use client"

import type React from "react"
import { Drawer, List, ListItem, ListItemButton, ListItemText, Box, Divider } from "@mui/material"

interface NavigationDrawerProps {
  open: boolean
  onClose: () => void
  onNavigate: (page: string) => void
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ open, onClose, onNavigate }) => {
  const menuItems = [
    { text: "Home", hasIndicator: false, page: "home" },
    { text: "Check the Register", hasIndicator: false, page: "check" },
    { text: "New registration", hasIndicator: false, page: "register" },
    { text: "Third party request", hasIndicator: false, page: "third-party" },
    { text: "Download a form", hasIndicator: false, page: "download" },
    { text: "Help", hasIndicator: false, page: "help" },
    { text: "FAQs", hasIndicator: true, page: "faq" },
    { text: "Contact Us", hasIndicator: true, page: "contact" },
  ]

  const handleItemClick = (page: string) => {
    onNavigate(page)
    onClose()
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "100%", sm: 320 },
          bgcolor: "#4a90a4", // Same blue-gray as header
          color: "white",
        },
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <List sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    py: 2.5,
                    px: 3,
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleItemClick(item.page)}
                >
                  {/* Green indicator dot */}
                  {item.hasIndicator && (
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: "#4caf50",
                        borderRadius: "50%",
                        mr: 2,
                        flexShrink: 0,
                      }}
                    />
                  )}

                  <ListItemText
                    primary={item.text}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: "1.125rem",
                        fontWeight: 400,
                        color: "white",
                        lineHeight: 1.4,
                      },
                      ml: item.hasIndicator ? 0 : 3, // Align text with items that have indicators
                    }}
                  />
                </ListItemButton>
              </ListItem>

              {/* Divider after each item except the last */}
              {index < menuItems.length - 1 && (
                <Divider
                  sx={{
                    borderColor: "rgba(255,255,255,0.2)",
                    mx: 3,
                  }}
                />
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default NavigationDrawer
