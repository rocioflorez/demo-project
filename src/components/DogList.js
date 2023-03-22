import { ListItem } from "./ListItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../api/index";
import { Link } from "react-router-dom";
import { Container, Grid, Card } from '@mui/material';

export const DogList = () => {

  const { isLoading, dogs } = useSelector( state => state.dogs );
  const dispatch = useDispatch();
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    dispatch( getDogs() );
  }, [dispatch])

  const handleSelectDog = (dog) => {
    setSelectedDog(dog);
  };

  return (
    <Container>
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
      >
        <span>Loading: { isLoading ? 'True': 'False' }</span>
          {dogs.map(dog => (
            <Grid item>
              <Card sx={{ p:1, textAlign: 'center '}} >
                <Link 
                  to={`/${dog.name}`}
                  key={dog.id}
                  onClick={()=> handleSelectDog(dog)}
                >
                  <div>
                    <img src={dog.image.url} alt={dog.name} />
                    <h3>{dog.name}</h3>
                  </div>
                </Link>
              </Card>
            </Grid>        
            ))
          }

      </Grid>
      {selectedDog && <ListItem dog={selectedDog} />}
    </Container>
  )
}