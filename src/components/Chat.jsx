import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Noprofile from '../assets/img/no-profile.png';
import Kazumin from '../assets/img/kazumin02.jpg';


const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row': 'p-chat__reverse';
return (
    <ListItem className={classes}>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={Kazumin} />
          ) : (
            <Avatar alt="icon" src={Noprofile} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
      </ListItem>
)
}

export default Chat