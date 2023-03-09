import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Container, Card, Button } from '@mui/material';

export const ListItem = () => {

  const {data, loading} = useContext(DataContext);

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {data.map((item) => (
        <Card 
            key={item.id}
            sx={{ p: 4}}
        >
          <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt="" />
          <h1>{item.name}</h1>
          {item.description && <p>{item.description}</p>}
          <ul>
            <li>Height: {item.height.metric} cm</li>
            <li>Weight: {item.weight.metric} kgs</li>
            <li>Temperament: {item.temperament}</li>
          </ul>

          <Link to="/">
            <Button>BACK</Button>
          </Link>
        </Card>  
      ))}
    </Container>
  )
}