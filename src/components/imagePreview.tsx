import useBreedQuery from "../query/breed/useBreedQuery";
import style from "../style/style.module.css";

type Props = {
  breed: string;
};

const ImagePreview = ({ breed }: Props) => {
  const { data: breedImage, isLoading, isFetching } = useBreedQuery({ breed });

  const isBackgroundFetching = isFetching && !isLoading;

  return (
    <div className={style.breed}>
      {isLoading && (
        <h4>Fetching breed {breed && <span>{`(${breed})`}</span>}....</h4>
      )}

      {breedImage && (
        <div
          className={`${style.imageContainer} ${
            isBackgroundFetching && style.fetching
          }`}
        >
          <img src={breedImage} alt="breedImage" />
        </div>
      )}

      {isBackgroundFetching && <p>Fetching...</p>}
    </div>
  );
};

export default ImagePreview;
