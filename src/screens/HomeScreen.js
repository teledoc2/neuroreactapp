import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useTheme } from '../themes/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Welcome to our App!
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>
          Explore our services and features
        </Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Learn More"
            color={theme.colors.primary}
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
});
