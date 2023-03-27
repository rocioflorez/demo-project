import { Link, useParams } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Container, Card, Button } from '@mui/material';

export const ListItem = () => {

  const {data, loading} = useContext(DataContext);
  const { name } = useParams();

  const filteredData = data.filter(dog => dog.name.toLowerCase() === name.toLowerCase());

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {filteredData.length === 0 ? (
        <p>Dog not found</p>
      ) : (
        <Card
          key={filteredData[0].id}
          sx={{ p: 4}}
        >
          <img src={`https://cdn2.thedogapi.com/images/${filteredData[0].reference_image_id}.jpg`} alt="" />
          <h1>{filteredData[0].name}</h1>
          {filteredData[0].description && <p>{filteredData[0].description}</p>}
          <ul>
            <li>Height: {filteredData[0].height.metric} cm</li>
            <li>Weight: {filteredData[0].weight.metric} kgs</li>
            <li>Temperament: {filteredData[0].temperament}</li>
          </ul>

          <Link to="/">
            <Button>BACK</Button>
          </Link>
        </Card>
      )}
    </Container>
  )
}