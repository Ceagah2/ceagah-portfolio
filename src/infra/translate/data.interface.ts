export interface ITranslationData {
  bio: {
    pt: string;
    eng: string;
  };
  header: {
    pt: string;
    eng: string;
  };
  jobExperiences: {
    pt: string;
    eng: string;
  };
  terms: {
    eng: { [key: string]: string };
    pt: { [key: string]: string };
  };
  messages: string[];
}