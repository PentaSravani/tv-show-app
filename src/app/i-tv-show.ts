export interface ITvShow {
  id?: number;
  name?: string;
  language?: string;
  rating?: { average: number };
  genres?: string[];
  premiered?: string;
  status?: string;
  officialSite?: string;
  summary?: string;
  image?: { medium: string; original: string };
  person?: string;
  airdate?: string;
  _embedded?: { episodes?: [], cast?: [], seasons?: [] };
}
