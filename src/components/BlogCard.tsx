import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { ItemsType } from "../types/news";

type BlogCardProps = {
  data: ItemsType
}

export default function BlogCard({ data }: BlogCardProps) {
  const { titulo, imagens, data_publicacao, introducao, link } = data
  const img = imagens? JSON.parse(imagens) : ""



  return (
    <Card className="max-w-[54rem] overflow-hidden m-auto mb-7">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={`https://agenciadenoticias.ibge.gov.br/${img.image_intro}`}
          alt="ui/ux review check"
          className="w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {titulo}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {introducao}
        </Typography>
        <a href={link} className="font-medium text-lg
         text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <Typography className="font-normal">published {data_publicacao} ago</Typography>
      </CardFooter>
    </Card>
  );
}