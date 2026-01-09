'use client'
import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const router = useRouter();
  const handleNavigate = (path) => {
    router.push(path);
    setOpen(false); // close sidebar after click
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer} className="d-md-none" style={{color:'black'}}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div style={{ width: 250, padding: "1rem" }}>
          <List>
            <ListItem button onClick={() => handleNavigate("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleNavigate("/aboutus")}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => handleNavigate("/team")}>
              <ListItemText primary="Our Team" />
            </ListItem>
            <ListItem button onClick={() => handleNavigate("/contact-us")}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;
