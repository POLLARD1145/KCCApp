// app/(tabs)/index.tsx
import { Image, StyleSheet, Platform, TouchableOpacity, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  // Sample data for performance chart
  const performanceData = {
    labels: ['Assign 1', 'Assign 2', 'Test 1', 'Quiz 1', 'Quiz 2'],
    datasets: [
      {
        data: [100, 80, 75, 90, 65],
        color: (opacity = 1) => `rgba(65, 105, 225, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ['Performance']
  };

  // Sample data for progress chart (attendance)
  const attendanceData = {
    labels: ['Attendance'],
    data: [0.86] // 86%
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="#003B5C" // Background color for Android
        barStyle="light-content" // Use "light-content" for white icons, "dark-content" for dark icons
        translucent={false}
      />
      {/* Header placed above the ParallaxScrollView */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseSelector}>
          <ThemedText style={styles.courseText}>CS230 - Software En...</ThemedText>
          <Ionicons name="chevron-down" size={16} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.profileCircle}>
          <Image source={require('@/assets/images/profile-placeholder.png')} style={styles.profileImage} />
        </View>
      </View>
      
      <ParallaxScrollView
  headerBackgroundColor={{ light: '#003B5C', dark: '#002A41' }}
  headerImage={null}
  parallaxHeaderHeight={0}
  renderFixedHeader={() => null}
  renderForeground={() => null}
  renderBackground={() => null}
  contentBackgroundColor="transparent"
  stickyHeaderHeight={0}
  renderStickyHeader={() => null}
>
        
        {/* Inspirational Quote */}
        <ThemedView style={styles.quoteContainer}>
          <Ionicons name="bulb" size={20} color="white" style={styles.quoteIcon} />
          <ThemedText style={styles.quoteText}>"Genius is 10% inspiration, 90% perspiration"</ThemedText>
        </ThemedView>

        {/* Performance Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Performance</ThemedText>
          <View style={styles.chartContainer}>
            <LineChart
              data={performanceData}
              width={screenWidth - 60}
              height={220}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(65, 105, 225, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#4169e1'
                }
              }}
              bezier
              style={styles.chart}
            />
          </View>
        </ThemedView>

        {/* Attendance Section */}
        <ThemedView style={styles.sectionContainer}>
          <View style={styles.attendanceHeader}>
            <ThemedText type="subtitle">Attendance</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.attendancePercentage}>86%</ThemedText>
          </View>
          
          <View style={styles.progressBarContainer}>
            {/* Custom Progress Bar */}
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '86%' }]} />
            </View>
          </View>
          
          <View style={[styles.chartContainer, { marginTop: 10 }]}>
            <ProgressChart
              data={attendanceData}
              width={screenWidth - 60}
              height={100}
              strokeWidth={12}
              radius={32}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 59, 92, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              hideLegend
            />
          </View>
        </ThemedView>

        {/* Recent Activities */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">RECENT ACTIVITIES</ThemedText>
          <View style={styles.activitiesContainer}>
            <TouchableOpacity style={styles.activityButton}>
              <ThemedText style={styles.activityText}>CS 230 QUIZ 1</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activityButton}>
              <ThemedText style={styles.activityText}>CS 235 TEST 1</ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedView>

        {/* Upcoming Tasks */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Upcoming Tasks</ThemedText>
          <View style={styles.tasksContainer}>
            <ThemedText style={styles.emptyState}>No upcoming tasks</ThemedText>
          </View>
        </ThemedView>

        {/* Monthly Attendance Calendar */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Attendance Calendar</ThemedText>
          <ContributionGraph
            values={[
              { date: '2025-04-01', count: 1 },
              { date: '2025-04-02', count: 0 },
              { date: '2025-04-03', count: 1 },
              { date: '2025-04-05', count: 1 },
              { date: '2025-04-08', count: 1 }
            ]}
            endDate={new Date('2025-04-08')}
            numDays={31}
            width={screenWidth - 60}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(0, 59, 92, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            tooltipDataAttrs={(value) => ({
              accessibilityLabel: `${value.date}: ${value.value} contributions`,
            })}
          />
        </ThemedView>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#003B5C', // Match the headerBackgroundColor
    zIndex: 1, // Ensure header stays on top
  },
  menuButton: {
    padding: 5,
  },
  courseSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  courseText: {
    marginRight: 5,
    color: '#ffffff',
    fontWeight: '500',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  quoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003B5C',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  quoteIcon: {
    marginRight: 10,
  },
  quoteText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 16,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 16,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  chartContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  chart: {
    borderRadius: 10,
    marginVertical: 8,
  },
  attendanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attendancePercentage: {
    fontSize: 18,
  },
  progressBarContainer: {
    marginTop: 10,
  },
  progressBar: {
    height: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#003B5C',
    borderRadius: 10,
  },
  activitiesContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  activityButton: {
    backgroundColor: '#003B5C',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  activityText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tasksContainer: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    color: '#888',
    fontStyle: 'italic',
  },
});