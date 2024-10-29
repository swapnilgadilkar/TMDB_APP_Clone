import MMKVStorage from 'react-native-mmkv-storage';

class StorageHandler {
  private static instance: StorageHandler | null = null;
  private mmkvStorage: MMKVStorage.API;

  // Private constructor to initialize MMKVStorage
  private constructor() {
    this.mmkvStorage = new MMKVStorage.Loader().initialize();
  }

  // Static method to get the singleton instance
  public static getInstance(): StorageHandler {
    if (!StorageHandler.instance) {
      StorageHandler.instance = new StorageHandler();
    }
    return StorageHandler.instance;
  }

  // Method to set a value in storage
  public async setItem<T>(key: string, value: T): Promise<void> {
    try {
      await this.mmkvStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error setting item in storage: ${error}`);
    }
  }

  // Method to get a value from storage
  public async getItem<T>(key: string): Promise<T | null> {
    try {
      const value = await this.mmkvStorage.getItem<T>(key);
      return value;
    } catch (error) {
      console.error(`Error getting item from storage: ${error}`);
      return null;
    }
  }

  // Method to remove a value from storage
  public async removeItem(key: string): Promise<void> {
    try {
      await this.mmkvStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from storage: ${error}`);
    }
  }

  // Method to clear all items in storage
  public async clearStorage(): Promise<void> {
    try {
      await this.mmkvStorage.clearStore();
    } catch (error) {
      console.error(`Error clearing storage: ${error}`);
    }
  }
}

// Exporting the singleton instance
export default StorageHandler.getInstance();

// USAGE
// import React, {useEffect, useState} from 'react';
// import {View, Text, Button, Alert} from 'react-native';
// import StorageHandler from './StorageHandler';

// const App: React.FC = () => {
//   const [storedValue, setStoredValue] = useState<string | null>(null);

//   useEffect(() => {
//     loadStoredData();
//   }, []);

//   const loadStoredData = async () => {
//     const value = await StorageHandler.getItem<string>('sample_key');
//     setStoredValue(value);
//   };

//   const saveData = async () => {
//     await StorageHandler.setItem('sample_key', 'This is a stored value');
//     Alert.alert('Data saved successfully!');
//     loadStoredData();
//   };

//   const clearData = async () => {
//     await StorageHandler.removeItem('sample_key');
//     Alert.alert('Data cleared successfully!');
//     setStoredValue(null);
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Stored Value: {storedValue || 'No data found'}</Text>
//       <Button title="Save Data" onPress={saveData} />
//       <Button title="Clear Data" onPress={clearData} />
//     </View>
//   );
// };

// export default App;
