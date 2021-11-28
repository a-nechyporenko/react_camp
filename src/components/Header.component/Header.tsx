import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import ArticleIcon from '@mui/icons-material/Article';
import { Button } from "@mui/material";
import React from "react";

  
export const Header = () =>{
    return (
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="green" fontWeight="bold" noWrap sx={{ flexGrow: 1 }}>
          My Blog
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Home
          </Link>
          <ArticleIcon/>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            New Article
          </Link>
          <Typography
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
            display="inline"
          >
            User Name
          </Typography>
        </nav>
      </Toolbar>
    )
}