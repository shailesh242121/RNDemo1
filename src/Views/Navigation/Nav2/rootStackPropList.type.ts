import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AddNumbers } from './ScreenConstant';

export type RootStackParamList = {
  Home: undefined;
  Profile: profileType;
  ListScreen: ListParamList;
  Index: undefined;
  Views: undefined;
  List: ListParamList;
  Grid: ListParamList;
  sectionList: undefined;
  Login: undefined;
  Register: undefined;
  FlexDemo: undefined;
  Todolist: undefined;
  NetworkCall: undefined;
  ClassDemo: undefined;
  ProductProject: undefined;
  hooksTest: undefined;
  ReducerDemo: undefined;
  Number: undefined;
  addNumber: addNumberType;
  AddNumbers: addNumberType;
  PropsTest: undefined;
  image: undefined;
  NativeBridgeDemo: undefined;
  TodoListRTX: undefined;
};

export type addNumberType = {
  navigation: {};
  route: { params: { onGoBack: (number?: string) => void } };
};

export type profileType = {
  name: string;
  age: number;
};

export type ListParamList = {
  listType: 'List' | 'Grid';
  initialColor?: string;
};

export type ScreenProps<ScreenName extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, ScreenName>;
  route: RouteProp<RootStackParamList, ScreenName>;
};
