import { differenceInCalendarDays } from "date-fns";
import { ItemsType, NewsType } from "../types/news";

export function newsHandling(data: NewsType): ItemsType[] {

    const handle = data.items.map(({ data_publicacao, destaque, id, introducao, imagens, link, titulo }) => {
        const getNewsDate = data_publicacao.toString().slice(0, 10).split("/")
        
        const actualDate = new Date()
        
        const date = differenceInCalendarDays(
            new Date(Number(getNewsDate[2]), Number(getNewsDate[1]), Number(getNewsDate[0])),
            new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDay())
        )
        
        return {
            id,
            titulo,
            introducao,
            data_publicacao: date < 0 ? date * -1 : date,
            imagens,
            destaque,
            link
        }
    })
    return handle
}