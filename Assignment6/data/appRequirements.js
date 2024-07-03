import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { createDrawerNavigator } from '@react-navigation/drawer';
import dress1 from '../assets/dress1.png';
import dress2 from '../assets/dress2.png';
import dress3 from '../assets/dress3.png';
import dress4 from '../assets/dress4.png';
import dress5 from '../assets/dress5.png';
import dress6 from '../assets/dress6.png';
import dress7 from '../assets/dress7.png';

export const picturesDir = `${FileSystem.documentDirectory}pictures`;

export const createPicturesDirectory = async () => {
  try {
    const dirInfo = await FileSystem.getInfoAsync(picturesDir);
    if (!dirInfo.exists) {
      console.log('Creating pictures directory');
      await FileSystem.makeDirectoryAsync(picturesDir, { intermediates: true });
    }
  } catch (error) {
    console.error('Error creating pictures directory:', error);
    throw error;
  }
};

export const downloadAssets = async () => {
  try {
    await createPicturesDirectory(); 
    const assets = [
      { source: dress1, name: 'dress1.png' },
      { source: dress2, name: 'dress2.png' },
      { source: dress3, name: 'dress3.png' },
      { source: dress4, name: 'dress4.png' },
      { source: dress5, name: 'dress5.png' },
      { source: dress6, name: 'dress6.png' },
      { source: dress7, name: 'dress7.png' },
    ];

    for (const asset of assets) {
      const localAsset = await Asset.fromModule(asset.source).downloadAsync();
      await copyFile(localAsset, asset.name);
    }
  } catch (error) {
    console.error('Error in downloadAssets:', error);
    throw error;
  }
};

export const copyFile = async (asset, fileName) => {
  try {
    const fileUri = `${picturesDir}/${fileName}`;
    await FileSystem.copyAsync({
      from: asset.localUri,
      to: fileUri,
    });
    console.log(`Copied ${fileName} to ${fileUri}`);
  } catch (error) {
    console.error(`Error copying ${fileName}:`, error);
  }
};

export const fetchFonts = () => {
  try {
    return Font.loadAsync({
      'Swifted Regular': require('../assets/fonts/Swifted DEMO.otf'),
    });
  } catch (error) {
    console.error('Error in fetchFonts:', error);
    throw error;
  }
};

export const Drawer = createDrawerNavigator();

export const getImageUriByName = (imageName) => {
    return `${picturesDir}/${imageName}`;
  };

export const getImageUrisByNames = (imageNames) => {
    return imageNames.map(imageName => getImageUriByName(imageName));
  };