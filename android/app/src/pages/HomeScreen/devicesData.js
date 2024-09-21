import MobilePhone from './MobilePhone.png';
import Tablets from './Tablets.png';
import Computer from './Computer.png';
import Laptop from './Laptop.png';
import { getDevices } from '../../api/apiService';

export const devicesItems = async () => {
  console.log("enter");
  const plans = await fetchDevicePlans();
  console.log(plans,"********************", plans.desktop);
  return [
    {
      imageSource: MobilePhone,
      title: 'Mobile',
      screen: 'Device',
      data: plans.mobile,
    },
    {
      imageSource: Tablets,
      title: 'Tablets',
      screen: 'Device',
      data: plans.tablets,
    },
    {
      imageSource: Laptop,
      title: 'Laptops',
      screen: 'Device',
      data: plans.laptop,
    },
    {
      imageSource: Computer,
      title: 'Computer',
      screen: 'Device',
      data: plans.desktop,
    }
  ];
};

const fetchDevicePlans = async () => {
  try {
    console.log("Starting API call...");
    const response = await getDevices();

    if (!Array.isArray(response)) {
      console.error("Unexpected response structure:", response);
      return {}; 
    }

    const devicePlans = {
      mobile: [],
      tablets: [],
      laptop: [],
      desktop: []
    };

    response.forEach(item => {
      const deviceType = item.deviceType?.toLowerCase();

      if (!deviceType) {
        console.warn("Device type is undefined for item:", item);
        return; 
      }

      // Constructing cleaned item
      const cleanedItem = {
        colors: parseArrayString(cleanupString(item.colors)),
        deviceType,
        fullModel: cleanupString(item.fullModel),
        id: item.id,
        imageUrl: cleanupString(item.imageUrl),
        name: cleanupString(item.name),
        rating: parseFloat(item.rating) || 0,
        storageOptions: parseArrayString(cleanupString(item.storageOptions))
      };

      if (devicePlans[deviceType]) {
        devicePlans[deviceType].push(cleanedItem);
      } else {
        console.warn(`Unexpected device type "${deviceType}" for item:`, item);
      }
    });

    console.log(devicePlans, "___________");
    return devicePlans; 
  } catch (error) {
    console.error("Error during fetching device plans:", error);
    return {};
  }
};

// Helper functions
const cleanupString = (str) => {
  if (!str) return '';
  return str.replace(/"/g, '').trim(); 
};

const parseArrayString = (string) => {
  console.log("string is 11 1", string);
  try {
    return string
      .replace(/^\[|\]$/g, '')
      .split(',')
      .map(item => item.trim());
  } catch (e) {
    console.error("Error parsing string:", e);
    return [];
  }
};
