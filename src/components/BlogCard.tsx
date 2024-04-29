import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { useContext } from 'react';
import { ItemsType } from '../types/news';
import { NewsContext } from '../Context/NewsContext';

type BlogCardProps = {
  data: ItemsType
};

export default function BlogCard({ data }: BlogCardProps) {
  const { setStorage, store } = useContext(NewsContext);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { titulo, imagens, data_publicacao, link, id } = data;
  const img = imagens ? JSON.parse(imagens) : '';

  const isFavorite = store.find((fav) => fav.id === id);

  const handleFavorite = () => {
    if (isFavorite) { return setStorage(store.filter((fav) => fav.id !== id)); }
    setStorage([...store, data]);
  };

  return (
    <Card className="max-w-[54rem] overflow-hidden m-auto mb-7">
      <CardHeader
        floated={ false }
        shadow={ false }
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={ `https://agenciadenoticias.ibge.gov.br/${img.image_intro}` }
          alt="ui/ux review check"
          className="w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {titulo}
        </Typography>

        <a
          href={ link }
          className="font-medium text-lg
         text-blue-600 dark:text-blue-500 hover:underline"
        >
          Read more
        </a>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <button
            placeholder={ `${id}` }
            onClick={ handleFavorite }
            className="bg-transparent text-3xl"
          >
            {isFavorite ? '❤️️' : '🖤'}
          </button>
        </div>
        <Typography className="font-normal">
          published
          {data_publicacao}
          {' '}
          ago
        </Typography>
      </CardFooter>
    </Card>
  );
}
