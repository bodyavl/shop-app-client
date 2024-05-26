import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCallback, useState } from "react";
import Card from "./Card";
import { getMovies } from "../services";
import { HomeProps } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface IMainContainerProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home", undefined>;
}

const MainContainer = ({ navigation }: IMainContainerProps) => {
  const [movies, setMovies] = useState<[]>();
  const [refreshing, setRefreshing] = useState(false);

  async function getMoviesFromApi() {
    const data = await getMovies();
    setMovies(data);
  }

  const onRefresh = useCallback(async () => {
    setMovies([]);
    setRefreshing(true);
    await getMoviesFromApi();
    setRefreshing(false);
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RefreshControl
        tintColor={"#fff"}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <View style={styles.cards}>
        {!movies && (
          <Text style={styles.loading}>
            Refresh page to discover new movies
          </Text>
        )}
        {refreshing && <Text style={styles.loading}>Loading...</Text>}

        {movies?.map((movie: any, index: number) => {
          return (
            <Card
              key={index}
              title={movie.title}
              imgSrc={movie.poster}
              onPress={() =>
                navigation.navigate("Details", {
                  id: movie._id,
                  title: movie.title,
                })
              }
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 64,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
  },
  descr: {
    color: "#8E95A9",
    fontSize: 16,
  },
  cards: {
    flex: 1,
    rowGap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  loading: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
    flex: 1,
  },
});
