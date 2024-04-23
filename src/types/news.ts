export type NewsType = {
    items: ItemsType[]
}

export type ItemsType = {
    id: number;
    titulo: string;
    introducao: string;
    data_publicacao: string | number;
    imagens: string;
    destaque: true;
    link: string;
}