import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
