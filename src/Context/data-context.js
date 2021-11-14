// import axios from "axios";
// import React, { useState, useContext, useEffect } from "react";
// // import { url } from "../utils/constants";
// const url = "https://course-api.com/react-store-products";
// const DataContext = React.createContext();

// export const useDataContext = () => {
//   return useContext(DataContext);
// };

// export const DataProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [testData, setTestData] = useState([]);

//   const fetchData = async (url) => {
//     // set loading
//     setLoading(true);

//     try {
//       const response = await axios.get(url);
//       const data = response.data;
//       //set state data & end loading
//       setLoading(false);
//       setTestData(data);
//       console.log(data);
//     } catch (error) {
//       //set state error
//       setLoading(false);
//       console.log(error, "error true");
//     }
//   };

//   useEffect(() => {
//     // url = url from Utils
//     fetchData(url);
//   }, []);

//   const contextValue = {
//     data: testData,
//     loading: loading,
//   };

//   return (
//     <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
//   );
// };
