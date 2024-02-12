import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const subscribeEmail = async (email: any) => {
  try {
    const response = await axios.post('https://api.systeme.io/api/contacts', { email }, {
      headers: {
        'X-API-Key': 'j5zxflc9qy29vr13l3pu1c6gm2kwl3d44gbzjr6qxmw3cluodf89cqrw8580c7aj',
        'Content-Type': 'application/json',
      },
    });

    // Log the response or handle it as needed
    console.log(response.data);
    return response.data; // Return the response if needed
  } catch (error) {
    // Handle errors
    console.error('Error subscribing email:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export default subscribeEmail;