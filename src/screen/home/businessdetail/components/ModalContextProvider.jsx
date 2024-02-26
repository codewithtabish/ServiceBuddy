import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

const ModalContextProvider = ({ children }) => {
    const [selectedDate, setselectedDate] = useState()
    const [selectedTimeSlot, setSelectedTimeSlot] = useState()
    const [suggestion, setSuggestion] = useState("")
    const [showIndicator, setshowIndicator] = useState(false)

    const updateIndicator=()=>{
        setshowIndicator(!showIndicator)
    }

  const updateData = (newData) => {
    setselectedDate(newData)
  };
  const updateTimeSlots = (newData) => {
    settimeSlots(newData)
  };
  const updateSuggestion = (newData) => {
    setSuggestion(newData)
  };


  return (
    <MyContext.Provider value={{ selectedDate,setselectedDate,
    selectedTimeSlot,setSelectedTimeSlot,suggestion,setSuggestion,
    showIndicator,updateIndicator }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ModalContextProvider };
