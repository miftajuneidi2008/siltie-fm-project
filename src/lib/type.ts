export type News_Category = 
{
    id:string
    title:string
    description:string
}

export type newsData = {
    id: string;
    image: string;
    title: string;
    description: string;
    userId: string;
    viewed: number;
    categoryTitle: string;
    createdAt: Date;
    updatedAt: Date;
} | null


export interface valuesForUpdate 
{
    title? : string
    description?:string
    image?:string,
    categoryTitle?:string
}


export interface programForUpdate {
  title?: string;
  description?: string;
  image?: string;
 
}





