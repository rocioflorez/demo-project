import { setDogs } from "../store/slices/dogSlice";

export const getDogs = () => {
    return async( dispatch ) => {
        
        const resp = await fetch(`https://api.thedogapi.com/v1/breeds?limit=10`);
        const data = await resp.json();

        dispatch( setDogs({ dogs: data }) );
    }
}
