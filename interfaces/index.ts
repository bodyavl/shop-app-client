export interface IMovie {
  backdrop: string;
  date: string;
  description: string;
  genres: { name: string }[];
  id: string;
  poster: string;
  rating: number;
  runtime: number;
  tagline: string;
  title: string;
  type: string;
}

export interface Pagination<T> {
  data: T[];
  hasNextPage: boolean;
  maximumPages?: number;
}
