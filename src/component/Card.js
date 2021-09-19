import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button } from 'reactstrap';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { MdDelete, MdShare } from 'react-icons/md';
import CreateIcon from '@material-ui/icons/Create';
function CardCompany(props) {
  const { update, deleteAction, background, name, manager } = props;
  return (
    <Card className="fl-card">
      <CardActionArea>
        <CardContent
          className="fl-cl-cr-ct"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            className="text-card"
            component="h2"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="text-white"
            component="p"
          >
            {manager}
          </Typography>
        </CardContent>
      </CardActionArea>
      <hr className="c-hr" />
      {update && (
        <CardActions>
          <Box style={{ marginLeft: 'auto' }}>
            <Button
              size="small"
              color="link"
              className="action"
              onClick={() =>
                update('update', {
                  name: name,
                  backgroundImage: background,
                  manager: manager,
                })
              }
            >
              <CreateIcon />
            </Button>
            <Button
              aria-label="delete"
              color="gray"
              className="action danger"
              onClick={deleteAction}
            >
              <MdDelete />
            </Button>
          </Box>
        </CardActions>
      )}
    </Card>
  );
}

export default CardCompany;
