import { setDogs, startLoadingDogs } from "./dogSlice";

export const getDogs = () => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingDogs() );

        const resp = await fetch(`https://api.thedogapi.com/v1/breeds?limit=10`);
        const data = await resp.json();

        dispatch( setDogs({ dogs: data.results }) );
        console.log(data);
    }
}