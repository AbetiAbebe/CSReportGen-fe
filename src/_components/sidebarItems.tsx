import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SummarizeIcon from '@mui/icons-material/Summarize';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AssessmentIcon from '@mui/icons-material/Assessment';


export const sidebarItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SummarizeIcon />
      </ListItemIcon>
      <ListItemText primary="All Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="My Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RecentActorsIcon />
      </ListItemIcon>
      <ListItemText primary="Recently Viewed" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItem>
  </div>
);
