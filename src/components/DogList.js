
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../store/slices/thunks";

export const DogList = () => {

  const dispatch = useDispatch();
  const { isLoading, dogs } = useSelector( state => state.dogs );

  useEffect(() => {
    dispatch( getDogs() );
  }, [dispatch])

  console.log(dogs)

  return (
    <>
        <span>Loading: { isLoading ? 'True': 'False' }</span>

        <ul>
            {
                dogs.map(({name}) => (
                <li key={ name }>{ name }</li>
                ))
            }
        </ul>
    </>
  )
}