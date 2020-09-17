import { ParamListBase } from "@react-navigation/native";

export type RootStackParamList = {
  Splash: undefined;
  Group:
    | {
        options: {
          headerTitle: string;
        };
      }
    | undefined;
  NotFound: undefined;
};

export type SharedTabParamList = {
  SharedTabScreen: undefined;
};

export type PersonalTabParamList = {
  PersonalTabScreen: undefined;
};

export type PantryTabParamList = {
  PantryTabScreen: undefined;
};

export type MaterialTopTabParamList = {
  Shared: undefined;
  Personal: undefined;
  Pantry: undefined;
};
