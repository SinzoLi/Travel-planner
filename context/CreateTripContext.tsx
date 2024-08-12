import React, { createContext } from 'react';

type TripContextType = {
  tripData: any;
  setTripData: React.Dispatch<any>;
};

export const CreateTripContext = createContext<TripContextType | null>(null);