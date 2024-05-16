// UpdateContext.js
import React, {createContext, useContext, useState} from 'react';

const UpdateContext = createContext();

export const UseUpdate = () => {
  return useContext(UpdateContext);
};

export const UpdateProvider = ({children}) => {
  const [updatedStudent, setUpdatedStudent] = useState(null);

  return (
    <UpdateContext.Provider value={{updatedStudent, setUpdatedStudent}}>
      {children}
    </UpdateContext.Provider>
  );
};
