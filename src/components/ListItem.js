import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../api/index";
import { Link, useParams } from 'react-router-dom';
import { Container, Card, Button } from '@mui/material';

export const ListItem = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  const { isLoading, dogs } = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const selectedDog = dogs.find((dog) => dog.name === name);

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {selectedDog && (
        <Card sx={{ p: 4 }}>
          <img
            src={`https://cdn2.thedogapi.com/images/${selectedDog.reference_image_id}.jpg`}
            alt=""
          />
          <h1>{selectedDog.name}</h1>
          {selectedDog.description && <p>{selectedDog.description}</p>}
          <ul>
            <li>Height: {selectedDog.height.metric} cm</li>
            <li>Weight: {selectedDog.weight.metric} kgs</li>
            <li>Temperament: {selectedDog.temperament}</li>
          </ul>
          <Link to="/">
            <Button>BACK</Button>
          </Link>
        </Card>
      )}
    </Container>
  );
};

