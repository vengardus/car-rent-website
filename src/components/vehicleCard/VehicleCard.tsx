import { Link } from "react-router-dom";
import { IsFavoriteIcon } from "..";
import { useFavorite } from "../../hooks";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";


import { AutoCardProps } from "../../interfaces/AutoCard.interface";
import { Button } from "../ui/button";
import { SpecsContainer } from "./SpecsContainer";
import { PriceDisplay } from "./PriceDisplay";

export const AutoCard = ({ id, model, type, image, price, specs }: AutoCardProps): JSX.Element => {
  const { isFavorite, handleToggleFavorite } = useFavorite();

  return (
    <Card className="flex flex-col justify-between bg-white p-5 rounded-xl w-80 h-60 sm:h-96 shadow-lg  " id={id}>
      <CardHeader className="flex flex-col w-full p-0">
        <div className="flex justify-between items-center w-full">
          <CardTitle className="text-textPrimary text-lg sm:text-xl uppercase leading-5 max-sm:font-normal font-medium">
            {model}
          </CardTitle>
          <IsFavoriteIcon isFavorite={isFavorite} handleToggleFavorite={handleToggleFavorite} />
        </div>
        <h5 className="text-textSecondary text-xs sm:text-sm font-medium capitalize">{type}</h5>
      </CardHeader>
      <div className="w-full">
        <CardContent className="flex sm:flex-col w-full p-0">
          <figure className="w-2/3 h-24 sm:w-full sm:h-36 relative">
            <img src={image} alt={model} className="object-contain w-full h-full" />
            <figcaption className="absolute bottom-0 right-0 w-full h-10 sm:h-12 bg-gradient-to-t from-white via-white/80 to-transparent"></figcaption>
          </figure>

          <SpecsContainer specs={specs} />
        </CardContent>
        <CardFooter className="flex justify-between items-center w-full p-0 mt-5 sm:mt-6">
          <PriceDisplay price={price} />
          <Link to={`/cars/details/${id}`}>
            <Button className=" font-medium px-4 py-2 rounded-sm text-white text-xs sm:text-base">Rent Now</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};
