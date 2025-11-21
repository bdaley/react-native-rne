import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text, makeStyles } from '@rneui/themed';

export default function DetailsScreen({ navigation }) {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text h3>Details Edited</Text>
        <Input placeholder='Type here...'/>
      <Button type="clear" onPress={() => navigation.goBack()}>Back</Button>
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
