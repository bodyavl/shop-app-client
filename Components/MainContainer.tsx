import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import { getProducts } from "../services/products/getProducts";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { IProduct } from "../services/products/types";
import { isAxiosError } from "axios";
import { Pagination } from "../interfaces";
import { HomeTabsParamList } from "../Navigation/HomeTabs";
import { RootStackParamList } from "../Navigation/RootStack";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { HomeProps } from "../types";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from "@react-navigation/native";

interface IMainContainerProps {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<HomeTabsParamList, "Home">,
    NativeStackNavigationProp<RootStackParamList>
  >;
}

const MainContainer = ({ navigation }: IMainContainerProps) => {
  const [products, setProducts] = useState<Pagination<IProduct>>();
  const [refreshing, setRefreshing] = useState(false);

  async function getProductsFromApi() {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    if (!products) {
      getProductsFromApi();
    }
  });

  const onRefresh = useCallback(async () => {
    try {
      setProducts(undefined);
      setRefreshing(true);
      await getProductsFromApi();
      setRefreshing(false);
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RefreshControl
        tintColor={"#fff"}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <View style={styles.cards}>
        {!products && (
          <Text style={styles.loading}>
            No products found. Pull down to refresh
          </Text>
        )}
        {refreshing && <Text style={styles.loading}>Loading...</Text>}

        {products?.data?.map((product: IProduct, index: number) => {
          return (
            <Card
              key={index}
              title={product.name}
              imgSrc={product.photo.path}
              price={product.price}
              onPress={() =>
                navigation.navigate("Details", {
                  id: product.id,
                  title: product.name,
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
    padding: 10,
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
    columnGap: 5,
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
