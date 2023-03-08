import { Link } from "react-router-dom";
import { useFetch } from "../helpers/useFetch";
import { Container } from '@mui/material';

export const DogList = () => {

  const {data, loading} = useFetch("https://api.thedogapi.com/v1/breeds");

  return (
    <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-10" >
            {loading && <p>Loading...</p>}
            {data?.map((data) => (
                <Link 
                    to={`/${data.name}`} 
                    key={data.id} 
                >
                    <div className="p-4" >
                        <img src={data.image.url} alt={data.name} className="md:h-72 w-full object-cover" />
                        <h3 className="text-center text-lg font-bold mt-4 mb-3" >{data.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    </Container>
  )
}