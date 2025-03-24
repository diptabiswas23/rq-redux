import { useState } from "react";
import ImagePreview from "../components/imagePreview";
import useDogsQuery from "../query/dogs/useDogsQuery"
import style from '../style/style.module.css'

const HomePage = () => {

    const {data} = useDogsQuery();
    const dogs = data?.list;

    const [breed , setBreed] = useState<string>("")


  return (
    <div className={style.container}>
        <div className={style.grid}>
            {dogs?.map((breedName) => (
                <div key={breedName} className={`${style.card} ${breedName === breed && style.selected}`} onClick={() => setBreed(breedName)}>
                    <h3>{breedName}</h3>
                </div>
            ))}
        </div>

        {breed && <ImagePreview breed={breed}/>}
    </div>
  )
}

export default HomePage