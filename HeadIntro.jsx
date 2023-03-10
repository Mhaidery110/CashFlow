import {Card, CardActionArea, CardContent,CardHeader, Typography } from "@mui/material";
import React from "react"
import {format} from 'date-fns'



function HeadIntro(){

 

    return <div>
        <Card variant="contained">
            <CardActionArea>
                <CardHeader 
                 title="Welcome to Profuse Transtech Solutions"
                 subheader = {format(new Date(), 'yyyy/mm/dd')}
                 color='green' >
                </CardHeader>
                
        
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      
            </CardActionArea>
        </Card>
    </div>
}


export default HeadIntro;