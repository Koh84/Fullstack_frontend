import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function ListItemLink(props) {
    return <ListItem button component={RouterLink} {...props} />;
}

class Sidebar extends Component {
    render() {
        return (
            <list>
                <ListItemLink to="/admin">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"></ListItemText>
                </ListItemLink>
                <ListItemLink to="/admin/posts">
                    <ListItemIcon>
                        <FileCopyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Posts"></ListItemText>
                </ListItemLink>
                <ListItemLink to="/admin/users">
                    <ListItemIcon>
                        <FaceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users"></ListItemText>
                </ListItemLink>
            </list>
        )
    }

}

export default Sidebar;