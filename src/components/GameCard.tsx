import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatfromIconLIst from "./PlatfromIconLIst";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatfromIconLIst
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatfromIconLIst>
      </CardBody>
    </Card>
  );
};

export default GameCard;
