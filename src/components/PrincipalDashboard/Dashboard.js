import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [sectionsData, setSectionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://Schoolapi.netcampus.in/api/app/GetPrnsDashboard?token=1&Flag=PD&Userid&frm_Date=23-01-2024&to_Date&ay_id=');
      const result = await response.json();
      console.log('result', result);
      
      setAttendanceData(result.table1);
      setSectionsData(result.table0);
      
      // Store data in AsyncStorage
      await AsyncStorage.setItem('attendanceData', JSON.stringify(result.table1));
      await AsyncStorage.setItem('sectionsData', JSON.stringify(result.table0));
    } catch (error) {
      console.error('Network ',error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  



  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const groupedData = attendanceData.reduce((acc, curr) => {
    const existingClass = acc.find(item => item.std === curr?.class_name);
    if (existingClass) {
      existingClass.sections.push({
        section: curr?.div_name,
        p_value: parseInt(curr?.p, 10),
        a_value: parseInt(curr?.a, 10),
        count: parseInt(curr?.count, 10)
      });
    } else {
      acc.push({
        std: curr.class_name,
        sections: [{
          section: curr.div_name,
          p_value: parseInt(curr?.p, 10),
          a_value: parseInt(curr?.a, 10),
          count: parseInt(curr?.count, 10)
        }]
      });
    }
    return acc;
  }, []);


  const sections = [
    {key: 'student', label: 'STUDENT', backgroundColor: '#133c58'},
    {key: 'staff', label: 'STAFF', backgroundColor: '#396ea5'},
    {key: 'enquiry', label: 'ENQUIRY', backgroundColor: '#f1466e'},
    {key: 'admission', label: 'ADMISSION', backgroundColor: '#6d6439'},
    {key: 'feeCollection', label: 'FEE COLLECTION', backgroundColor: '#5aa4d6'},
    {key: 'outstanding', label: 'OUTSTANDING', backgroundColor: '#db0808'},
    {key: 'transport', label: 'TRANSPORT', backgroundColor: '#f49901'},
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <AttendanceChart attendanceData={groupedData} />
      <View style={styles.sectionContainer}>
        {sectionsData.map((section, index) => (
          <TouchableOpacity style={styles.section} key={section?.name}>
            <Text style={[styles[`text${index + 1}`], { backgroundColor: section.cardHeaderColor }]}>
              {section.name}
            </Text>
            <View style={styles.container1}>
              <View style={styles.subContainer}>
                <Text style={styles.text8}>{section?.chilren1Name}</Text>
                <Text style={styles.text8}>{section?.chilren2Name}</Text>
              </View>
              <View style={styles.subContainer1}>
                <Text style={styles.text9}>{section?.chilren1Value}</Text>
                <Text style={styles.text9}>{section?.chilren2Value}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};



const AttendanceChart = ({ attendanceData }) => {
  const getSectionColor = (count, p_value, a_value) => {
    const sum = p_value + a_value;
    if (count === sum) {
      return styles.completed;
    } else if (sum > 0) {
      return styles.notMarked;
    } else {
      return styles.notStarted;
    }
  };

  const showAlert = (class_name, section) => {
    Alert.alert("Selected Class", ` ${class_name} Standard ${section} Section`);
  };

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartHeader}>Attendance Chart</Text>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#008000'}]} />
          <Text style={styles.legendText}>Completed</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#F1C40F'}]} />
          <Text style={styles.legendText}>On Process</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#FF0000'}]} />
          <Text style={styles.legendText}>Not Started</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.row1}>
          <Text style={styles.cell}>STD</Text>
          <Text style={styles.cellHeader}>SECTION</Text>
        </View>
        {attendanceData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.std}</Text>
            <View style={styles.sections}>
              {item.sections.map((section, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.sectionCell,
                    getSectionColor(
                      section?.count,
                      section?.p_value,
                      section?.a_value,
                    ),
                  ]}
                  onPress={() => showAlert(item?.std, section?.section)}>
                  <Text style={styles.sectionText}>{section?.section}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f2e6',
    maxHeight: '80%',
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginBottom: 90,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  section: {
    width: '45%',
    marginVertical: 10,
  },
  text1: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text2: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text3: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text4: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text5: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text6: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text7: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text8: {
    textAlign: 'center',
    color: '#080808',
  },
  text9: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#080808',
  },
  container1: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer: {
    borderWidth: 1,
    borderColor: '#dbd8e6',
    backgroundColor: '#fff',
    width: '50%',
    padding: 11,
    borderBottomLeftRadius: 5,
  },
  subContainer1: {
    borderWidth: 1,
    borderColor: '#dbd8e6',
    backgroundColor: '#fff',
    width: '50%',
    padding: 11,
    borderBottomRightRadius: 5,
  },
  view3: {
    top: 10,
    width: '45%',
    left: '27%',
  },
  chartContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    // width: '90%',
  },
  chartHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  legend: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
  table: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: 24,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: 30,
  },
  cellHeader: {
    left: 110,
  },
  cell: {
    borderColor: '#000000',
    borderRightWidth: 1,
    // borderBottomWidth: 1,
    textAlign: 'center',
    width: 60,
  },
  sections: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionCell: {
    width: '25%',
    borderColor: '#000000',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    height: 24,
  },
  completed: {
    backgroundColor: '#008000',
  },
  notMarked: {
    backgroundColor: '#F1C40F',
  },
  notStarted: {
    backgroundColor: '#FF0000',
  },
  sectionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Dashboard;