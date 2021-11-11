'use strict';

import { createFetch } from './fetch';
import {URL_API} from "../constants/constants";

interface Swapi {
  getUsers: any;
}

export const swapi: Swapi = {
  getUsers: createFetch(URL_API)
}
