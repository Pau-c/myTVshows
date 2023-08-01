import axios from "axios";

export const fetchShowData = async (url, setShowData) => {
  try {
    const response = await axios.get(url,
       { mode: 'cors' }
       );
    const data = response.data;
     //  console.log("Fetched data:", data); 

    if (setShowData) {
      setShowData(data);
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
