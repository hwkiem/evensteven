import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Group: {
        screens: {
          SharedTab: {
            screens: {
              Shared: "Shared",
            },
          },
          PersonalTab: {
            screens: {
              Personal: "Personal",
            },
          },
          PantryTab: {
            screens: {
              Personal: "Pantry",
            },
          },
        },
      },
      Splash: "/",
      NotFound: "*",
    },
  },
};
