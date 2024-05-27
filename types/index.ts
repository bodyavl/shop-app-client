import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/RootStack";
import { LoginStackParamList } from "../Navigation/LoginStack";
import { HomeTabsParamList } from "../Navigation/HomeTabs";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

export type HomeTabsProps = NativeStackScreenProps<
  RootStackParamList,
  "HomeTabs"
>;

export type HomeProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabsParamList, "Home">,
  NativeStackScreenProps<RootStackParamList>
>;

export type LoginProps = NativeStackScreenProps<LoginStackParamList, "Login">;
