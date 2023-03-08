import { Link } from "react-router-dom";
import { useFetch } from "../helpers/useFetch";
import { Container, Grid, Card } from '@mui/material';

export const DogList = () => {

  const {data, loading} = useFetch("https://api.thedogapi.com/v1/breeds");

  return (
    <Container>
        <Grid 
            container 
            spacing={8}
            justifyContent="center"
            alignItems="center"
        >
            {loading && <p>Loading...</p>}
            {data?.map((data) => (
                <Grid item >
                    <Card sx={{ p: 1,  textAlign: 'center' }} >
                        <Link 
                            to={`/${data.name}`} 
                            key={data.id} 
                        >
                            <div>
                                <img src={data.image.url} alt={data.name} />
                                <h3>{data.name}</h3>
                            </div>
                        </Link>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}