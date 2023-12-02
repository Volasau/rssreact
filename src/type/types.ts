export type FormData = {
  firstName: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  country: string;
  picture?: FileList | undefined;
};

export interface InfoData {
  data: FormData;
}
