import React from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import photos from "./photos";
import EuroIcon from "@mui/icons-material/Euro";
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
const database = [
  {
    id: "3233",
    productName: "Red Dress",
    price: 50.99,
    src: "./photos"
  },
  {
    id: "3435",
    productName: "Colors Pattern Dress",
    price: 64.99,
    src: "src\photos\clothes2.jpg",
  },

  {
    id: "3637",
    productName: "Boy Blue Set",
    price: 87.99,
    src: "src\photos\clothes7.jpg",
  },
  {
    id: "3839",
    productName: "Patterned T-Shirt Flannel",
    price: 24.55,
    src: "src\photos\clothes20.jpg",
  },
  {
    id: "4041",
    productName: "Paw Patrol Set",
    price: 55.99,
    src: "photos/clothes9.jpeg",
  },
  {
    id: "4243",
    productName: "Pinky New Born Set",
    price: 13.99,
    src: "photos/clothes10.jpeg",
  },
  {
    id: "4445",
    productName: "White Cotton Dress",
    price: 29.99,
    src: "photos/clothes3.jpeg",
  },
  {
    id: "4647",
    productName: "Dark blue Flannel",
    price: 32.99,
    src: "photos/clothes16.jpeg",
  },
  {
    id: "4849",
    productName: "Aqua Girl Set",
    price: 56.99,
    src: "photos/clothes11.jpeg",
  },
  {
    id: "5051",
    productName: "Pink Skirt ",
    price: 18.99,
    src: "photos/clothes5.jpeg",
  },
  {
    id: "5253",
    productName: "Green Dinosaur Set",
    price: 60.99,
    src: "photos/clothes17.jpeg",
  },
  {
    id: "5455",
    productName: "Beige Rain Coat",
    price: 74.99,
    src: "photos/clothes4.jpeg",
  },
  {
    id: "5657",
    productName: "Baby Bath Cap",
    price: 20.99,
    src: "photos/clothes22.jpeg",
  },
  {
    id: "5859",
    productName: "Cotton T-Shirt",
    price: 16.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "6061",
    productName: "Disney Princess Dress",
    price: 37.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "6263",
    productName: "White Cotton Flannel",
    price: 18.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "6465",
    productName: "Boy Lego Set",
    price: 45.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "6667",
    productName: "Cotton T-Shirt",
    price: 19.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "6869",
    productName: "Polka Dot Bbay Shower Cap",
    price: 22.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "7071",
    productName: "Pink Dress",
    price: 55.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "7273",
    productName: "Cotton Flower Set",
    price: 30.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "7475",
    productName: "Blue T-Shirt",
    price: 18.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "7677",
    productName: "Green Girl Dress",
    price: 56.99,
    src: "photos/clothes.jpeg",
  },
  {
    id: "7879",
    productName: "Grey Cotton Flannel",
    price: 25.99,
    src: "photos/clothes.jpeg",
  },
];

function Clothes() {
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

export default Clothes;
