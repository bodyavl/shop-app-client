import {
  Button,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import { DetailsProps } from "../types";
import { useFocusEffect } from "@react-navigation/native";
import { getMovieDetails } from "../services";
import { IMovie } from "../interfaces";
import { DetailsAbout } from "../Components/UI";
const bgImage = require("../assets/Background.png");

export interface IDetailsProps {
  id: string;
  title: string;
}

const Details = ({ route, navigation }: DetailsProps) => {
  const { id, title } = route.params;
  navigation.setOptions({ title });

  const [movie, setMovie] = React.useState<IMovie>();

  useFocusEffect(
    useCallback(() => {
      async function getMovie() {
        try {
          const res = await getMovieDetails(id);
          setMovie(res);
        } catch (error) {
          alert(error);
        }
      }

      getMovie();
    }, [id])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <Image
            source={{
              uri: movie?.poster,
            }}
            style={styles.poster}
          />
          <Text style={styles.title}>{movie?.title}</Text>
          <Text style={styles.descr}>{movie?.description}</Text>
          <Text style={styles.genres}>
            Genres:{" "}
            {movie?.genres.map((genre, i) =>
              i === movie.genres.length - 1 ? genre.name : `${genre.name}, `
            )}
          </Text>
          <DetailsAbout>{movie?.type && `Type: ${movie.type}`}</DetailsAbout>
          <DetailsAbout>Rating: {movie?.rating.toFixed(2)}</DetailsAbout>
          <DetailsAbout>
            {movie?.runtime && `Runtime: ${movie?.runtime} minutes`}
          </DetailsAbout>
          <DetailsAbout>
            {movie?.date && `Date: ${new Date(movie.date).toDateString()}`}
          </DetailsAbout>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#121829",
  },
  innerContainer: {
    height: "auto",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  descr: {
    color: "#8E95A9",
    fontSize: 16,
  },
  genres: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },

  poster: {
    borderRadius: 12,
    width: "100%",
    height: 550,
  },
  loading: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
    flex: 1,
  },
});
