import { ListItem } from "./ListItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../api/index";
import { Link, useLocation } from "react-router-dom";
import { Container, Grid, Card } from '@mui/material';

export const DogList = () => {

  const { isLoading, dogs } = useSelector( state => state.dogs );
  const dispatch = useDispatch();
  const [selectedDog, setSelectedDog] = useState(null);
  const location = useLocation();

  useEffect(() => {
    dispatch( getDogs() );
  }, [dispatch])

  useEffect(() => {
    const dogName = location.pathname.split('/')[1];
    const matchingDog = dogs.find(dog => dog.name === dogName);
    if (matchingDog) {
      setSelectedDog(matchingDog);
    } else {
      setSelectedDog(null);
    }
  }, [location.pathname, dogs])

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
            <Grid item key={dog.id}>
              <Card sx={{ p:1, textAlign: 'center '}} >
                <Link
                  to={`/${dog.name}`}
                  onClick={()=> setSelectedDog(dog)}
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
      {selectedDog && selectedDog.name === location.pathname.split('/')[1] && <ListItem dog={selectedDog} />}
    </Container>
  )
}