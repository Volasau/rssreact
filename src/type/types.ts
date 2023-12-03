export type FormData = {
  firstName: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  country: string;
  picture?: string;
};

export interface InfoData {
  data: FormData;
}

export type File = {
  0: {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  };
  length: number;
};

export type Inputes = {
  accept?: boolean;
  firstName: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  picture?: FileList;
  country: string;
};
