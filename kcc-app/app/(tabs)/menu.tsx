// app/(tabs)/menu.tsx
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MenuScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="school" size={20} color="#003B5C" />
          <ThemedText style={styles.menuItemText}>Course Registration</ThemedText>
          <Ionicons name="chevron-forward" size={16} color="#003B5C" style={styles.menuArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="mail" size={20} color="#003B5C" />
          <ThemedText style={styles.menuItemText}>Messages</ThemedText>
          <Ionicons name="chevron-forward" size={16} color="#003B5C" style={styles.menuArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications" size={20} color="#003B5C" />
          <ThemedText style={styles.menuItemText}>Notifications</ThemedText>
          <Ionicons name="chevron-forward" size={16} color="#003B5C" style={styles.menuArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings" size={20} color="#003B5C" />
          <ThemedText style={styles.menuItemText}>Settings</ThemedText>
          <Ionicons name="chevron-forward" size={16} color="#003B5C" style={styles.menuArrow} />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  menuContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
    color: '#003B5C',
    marginLeft: 15,
    flex: 1,
  },
  menuArrow: {
    marginLeft: 'auto',
  },
});