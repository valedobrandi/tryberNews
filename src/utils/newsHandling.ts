import { differenceInCalendarDays } from 'date-fns';
import { ItemsType, NewsType } from '../types/news';

export function newsHandling(data: NewsType): ItemsType[] {
  const handle = data.items
    .map(({ data_publicacao, destaque, id, introducao, imagens, link, titulo }) => {
      const getNewsDate = data_publicacao.toString().slice(0, 10).split('/');
      const getDate = new Date().toISOString().slice(0, 10).split('-');

      const date = differenceInCalendarDays(
        new Date(
          Number(getNewsDate[2]),
          Number(getNewsDate[1]),
          Number(getNewsDate[0]),
          0,
        ),
        new Date(Number(getDate[0]), Number(getDate[1]), Number(getDate[2]), 0),
      );

      return {
        id,
        titulo,
        introducao,
        data_publicacao: date < 0 ? date * -1 : date,
        imagens,
        destaque,
        link,
      };
    });
  return handle;
}
