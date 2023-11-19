export type JsonItem = {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl?: string;
  Description: string;
};
export type IJsonData = {
  Featured: JsonItem;
  TendingNow: JsonItem[];
};

export type TUseFetchData = (
  url: string,
  id?: string,
) => { data: IJsonData | null; loading: boolean; error: string | null; play: boolean };

export type TStorage = () => {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
};
