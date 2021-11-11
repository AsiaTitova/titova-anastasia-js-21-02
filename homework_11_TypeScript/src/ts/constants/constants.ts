export const URL_API: string = 'https://swapi.dev/api/people/';

export type UserData = {
  birth_year?: string,
  created?: string,
  edited?: string,
  eye_color?: string,
  films?: Array<string>,
  gender: string,
  hair_color?: string,
  height: number,
  homeworld?: string,
  mass: number,
  name: string,
  skin_color?: string,
  species?: Array<string>,
  starships?: Array<string>,
  url?: string
}

export type SWAPI_USERS_DATA = {
  count: number,
  next: string,
  previous: string,
  results: Array<UserData>
}



