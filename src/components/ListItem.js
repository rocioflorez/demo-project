import { Link, useParams } from 'react-router-dom';
import { useFetch } from "../helpers/useFetch";
import { Container, Card, Button } from '@mui/material';

export const ListItem = () => {

  const {name} = useParams()
  const {data, loading} = useFetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);

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