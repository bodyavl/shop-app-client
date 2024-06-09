import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { IUser } from "../interfaces";
import { useFocusEffect } from "@react-navigation/native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useAuth } from "../context/AuthContext";
import { getMe } from "../services/auth/getMe";

interface ProfileContainerProps {}

const ProfileContainer: React.FC<ProfileContainerProps> = () => {
  const [user, setUser] = useState<IUser>();
  const { onLogout } = useAuth();

  useFocusEffect(() => {
    async function getUserData() {
      const me = await getMe();
      console.log(user);

      setUser(me);
    }
    if (!user) {
      getUserData();
    }
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.photo?.path }} style={styles.photo} />
      <Text style={styles.username}>
        {user?.firstName + " " + user?.lastName}
      </Text>
      <Text style={styles.role}>{user?.role?.name}</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  role: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ProfileContainer;
