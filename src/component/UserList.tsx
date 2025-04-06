import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { User } from '../model/UserAPIInterface';

interface UserListProps {
  searchFiltering: User[];
}

const UserList: React.FC<UserListProps> = ({ searchFiltering }) => {
  return (
    <List>
      {searchFiltering.length > 0 ? (
        searchFiltering.map((user) => (
          <React.Fragment key={user.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.firstName} src={user.image} />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.firstName} ${user.maidenName} ${user.lastName}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      {user.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))
      ) : (
        <ListItem>
             <ListItemText
                primary={`No results found`}
              />
        </ListItem>
      )}
    </List>
  );
};

export default UserList;
