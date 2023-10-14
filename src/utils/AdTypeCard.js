import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
export default function AdTypeCard({image,type,checked,onClick}) {
  return (
    <Card sx={{ maxWidth:345,borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
      <CardActionArea onClick={onClick}>
        <div className='p-3'>
          <Checkbox  
          checked={checked}          
          />
        </div>
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt="green iguana"
          sx={{paddingX:"34px"}}
        />
        <CardContent sx={{backgroundColor:"#FAFAFA",margin:"3px",marginTop:"0",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}}>
          <Typography gutterBottom variant="body2" component="div" color="text.secondary" align='center'>
            Create
          </Typography>
          <Typography variant="h6" sx={{textTransform: 'capitalize'}} align="center" fontWeight={900}>
            {type} Ad
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}