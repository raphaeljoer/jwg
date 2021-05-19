export interface ICatalog {
  id: string;
  name: string;
  url: string;
  releaseDate: string;
  partner: {
    logo: string;
    name: string;
  }
};

export default ICatalog;
