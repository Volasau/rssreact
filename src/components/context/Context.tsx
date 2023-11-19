import React, { Context, createContext } from 'react';

import { CardProps } from '../card/Card';

export type PlanetContextType = {
  planetData: CardProps[];
  setPlanetData: React.Dispatch<React.SetStateAction<CardProps[]>>;
};

export const planetContextState = {
  planetData: [],
  setPlanetData: () => '',
};

export const PlanetContext: Context<PlanetContextType> =
  createContext<PlanetContextType>(planetContextState);
