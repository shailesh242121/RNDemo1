import React, { useState } from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, ScrollView, View } from 'react-native';

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState<string>('column');

  return (
    <ScrollView style={{ flex: 1 }}>
      <PreviewLayout
        label="flexDirection"
        values={['column', 'row', 'column-reverse', 'row-reverse']}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}>
        <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
        <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
      </PreviewLayout>
      <PreviewLayout
        label="flexDirection"
        values={['column', 'row', 'column-reverse', 'row-reverse']}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}>
        <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
        <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
      </PreviewLayout>
      <ButtonLayout titleButton='Test User' onPressMethod={(message: string) => { console.log(message) }}></ButtonLayout>
      <ButtonLayout titleButton='Test User11' onPressMethod={(message: string) => { console.log(message) }}></ButtonLayout>
      {/* <ButtonLayout titleButton='Test User'></ButtonLayout>
        <ButtonLayout titleButton='Test User'></ButtonLayout>
         <ButtonLayout titleButton='Test User'></ButtonLayout> */}

    </ScrollView >
  );
};

type ButtonLayoutProps = {
  titleButton: string;
  onPressMethod: (value: string) => void
};

const ButtonLayout = ({ titleButton, onPressMethod }: ButtonLayoutProps) => (

  (<View>
    <TouchableOpacity
      style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, }}>
      <Button title={titleButton} onPress={() => onPressMethod(getMethodName(titleButton))} />

    </TouchableOpacity>


  </View>
  )
);

function getMethodName(screenTitle: string) {
  console.log("Button clicked and title is ", screenTitle);
  if (screenTitle === 'Test User') {
    return 'abc'
  } else {
    return 'xyz'
  }

}




type PreviewLayoutProps = {
  label: string;
  children: React.ReactNode;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;