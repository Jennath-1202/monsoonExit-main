import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const Home = ({ id, title, content, img_url, handleDelete, handleUpdate }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={img_url} alt={content} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" variant="contained" onClick={() => handleDelete(id)}>
          DELETE
        </Button>
        <Button size="small" color="secondary" variant="contained" onClick={() => handleUpdate(id)}>
          UPDATE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Home;
