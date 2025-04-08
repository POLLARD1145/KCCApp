// app/(tabs)/courses.tsx
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CoursesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Courses</ThemedText>
      <ThemedText>Your enrolled courses will appear here.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 8,
  },
});