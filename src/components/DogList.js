import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../api/index";

export const DogList = () => {

  const { isLoading, dogs } = useSelector( state => state.dogs );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getDogs() );
  }, [dispatch])

  console.log(dogs)

  return (
    <>
        <span>Loading: { isLoading ? 'True': 'False' }</span>

        <ul>
            {
                dogs.map(dog => (
                <li key={ dog.id }>{ dog.name }</li>
                ))
            }
        </ul>
    </>
  )
}