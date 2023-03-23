import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../api/index";
import { Link, useParams } from 'react-router-dom';
import { Container, Card, Button } from '@mui/material';

export const ListItem = () => {

    const { isLoading, dogs } = useSelector( state => state.dogs );
    const dispatch = useDispatch();
    const { name } = useParams();

    useEffect(() => {
      dispatch( getDogs() );
    }, [dispatch])
 
  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {dogs.filter(dog => dog.id === parseInt(name)).map((dog) => (
        <Card 
          key={dog.id}
          sx={{ p: 4}}
        >
          <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt="" />
          <h1>{dog.name}</h1>
          {dog.description && <p>{dog.description}</p>}
          <ul>
            <li>Height: {dog.height.metric} cm</li>
            <li>Weight: {dog.weight.metric} kgs</li>
            <li>Temperament: {dog.temperament}</li>
          </ul>
          <Link to="/">
            <Button>BACK</Button>
          </Link>
        </Card>  
      ))}
    </Container>
  )
}