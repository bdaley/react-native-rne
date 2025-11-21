import React from 'react';
import { View } from 'react-native';
import { Button, Text, makeStyles } from '@rneui/themed';
import MyComponent from '../../components/MyComponent';

export default function HomeScreen({ navigation }) {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text h3>Home</Text>
      <MyComponent />
      <Button onPress={() => navigation.navigate('Details')}>Go to Details</Button>
    </View>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },
}));
