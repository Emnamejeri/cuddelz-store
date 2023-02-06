import React from "react";
import {
  Typography,
  CssBaseline,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import EuroIcon from "@mui/icons-material/Euro";
const database = [
  { id: "1230", productName: "Wooden Dinosaurs Set", price: 36.99 },
  { id: "4560", productName: "Wooden Kitchen Set", price: 42.89 },
  { id: "7890", productName: "Colorful Loops", price: 19.89 },
  { id: "1011", productName: "Wooden Alphabet Snake", price: 22.99 },
  { id: "1213", productName: "Stuffed Lion Toy", price: 7.99 },
  { id: "1314", productName: "Pearls Rainbow Toy", price: 39.89 },
  { id: "1415", productName: "Baby Wool Toy", price: 9.89 },
  { id: "1617", productName: "Wooden Leafs Set ", price: 27.99 },
  { id: "1819", productName: "Wood Animals Puzzles", price: 17.99 },
  { id: "2021", productName: "Baby Wooden Set", price: 30.99 },
  { id: "2223", productName: "Whale Puzzle Set", price: 16.89 },
  { id: "2425", productName: "Alphabet Wooden Set", price: 22.89 },
  { id: "2627", productName: "Storage Boxes ", price: 19.99 },
  { id: "2829", productName: "Zoo Animals Set", price: 22.89 },
  { id: "3031", productName: "Dinosaur Rocking Chair ", price: 74.89 },
];

function Toys() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />{" "}
      <Container className={classes.cardGrid}>
        <Grid container spacing={2}>
          {database.map((card) => {
            return (
              <Grid item key={card.id} xs={12} md={4} sm={6}>
                <Card className={classes.card}>
                  {" "}
                  <CardContent className={classes.cardContent}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../photos/book1.jpeg"
                      alt="its a book"
                    />
                    <Typography gutterBottom variant="h6">
                      {" "}
                      <h5 className={classes.producttitle}>
                        {card.productName}
                      </h5>
                      <h6>
                        Price {card.price} <EuroIcon fontSize="sx" />
                      </h6>
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button>Add to Cart</Button>
                      <Button>
                        Save <FavoriteTwoToneIcon color="success" />
                      </Button>
                    </ButtonGroup>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}{" "}
        </Grid>
      </Container>
    </div>
  );
}
export default Toys;
