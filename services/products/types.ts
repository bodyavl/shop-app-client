export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: ICategory;
  photo: IFile;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IFile {
  id: string;
  path: string;
}
