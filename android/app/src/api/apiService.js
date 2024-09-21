import axios from 'axios';

const API_URL = 'http://10.0.2.2:7080/api';

export const fetchUserDetails = async () => {
    try {
        console.log("Fetching user details...");
        const response = await axios.get(`${API_URL}/users/userDetails`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

export const signupUser = async (signupData) => {
    try {
        const response = await axios.post(`${API_URL}/access/signup`, signupData);
        console.log(response.data , "response.data->");
        return response.data;
    } catch (error) {
        console.error("Error during signup:", error);
        return {error: error};
    }
};

export const sendOtp = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/access/sendOtp`, {
            params: { email }
        });
        return response.data;
    } catch (error) {
        console.error("Error during sending OTP:", error);
        return {error:error};
    }
};

export const loginUser = async (loginData) => {
    try {
      console.log("start");
      const response = await axios.post(`${API_URL}/access/login`, loginData);
      console.log("end");
      return response.data; 
    } catch (error) {
      console.error("Error during login:", error);
      return {error: error};
    }
  };

  export const getDevices = async () => { 
    try { 
        console.log("start"); 
       
        const response = await axios.get(`${API_URL}/plan/get-device-plans`, { 
            headers: { 
                'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJvdHBJZCI6MywiZW1haWxJZCI6Imdrcml0aWthODk4QGdtYWlsLmNvbSIsInVzZXJJZCI6MSwic3ViIjoiMSIsImlhdCI6MTcyNjgwOTQ3MSwiZXhwIjoxNzI3MTU1MDcxfQ.VTp-6OnoIor0lguyAUssAkpipDqXcwZbYI_qlTNIkzR8oFDNPPZwboicZgeXUW_6W3RQGizpXXYk5yNnooSZcA` 
            } 
        }); 
   
        console.log(response.data); 
        return response.data;  
    } catch (error) { 
        console.error("Error during devices fetch:", error); 
        return { error: error }; 
    } 
};

  export const addToCartApi = async (addToCart) => {
    try {
      console.log("start");
      const response = await axios.post(`${API_URL}/cart/add-to-cart`, addToCart);
      console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error("Error during devices fetch:", error);
      return {error: error};
    }
  }

  export const addTOGroup =  async(userDetails) => {
    try {
      console.log("=====> ", userDetails);
      const response = await axios.get(`${API_URL}/group/add-in-group`, userDetails );
      console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error("Error during add to Group fetch:", error);
      return {error: error};
    }
  }

  
  export const getCart =  async(userId) => {
    try {
      console.log("=====> ", userId);
      const response = await axios.get(`${API_URL}/cart/get-cart`, {params: { cartId: 3 } } );
      console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error("Error during get cart fetch:", error);
      return {error: error};
    }
  }

  export const getParentCart =  async(userId) => {
    try {
      const response = await axios.get(`${API_URL}/cart/get-parent-cart`, {params: { parentCartId: 3 } } );
      console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error("Error during get cart fetch:", error);
      return {error: error};
    }
  }