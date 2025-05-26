"use client"

import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Box } from "@mui/material"
import theme from "./theme/theme"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import HelpPage from "./components/HelpPage"
import NavigationDrawer from "./components/NavigationDrawer"

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState("home") // home, help

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    setDrawerOpen(false)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "help":
        return <HelpPage onNavigate={handleNavigate} />
      default:
        return <MainContent onNavigate={handleNavigate} />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header onMenuClick={handleDrawerToggle} />
        <NavigationDrawer open={drawerOpen} onClose={handleDrawerToggle} onNavigate={handleNavigate} />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f5f5f5" }}>
          {renderCurrentPage()}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
