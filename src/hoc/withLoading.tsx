import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const withLoading = (WrappedComponent: React.ComponentType<unknown>) => {
  return ({isLoading, ...props}: {isLoading: boolean}) => {
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default withLoading;
