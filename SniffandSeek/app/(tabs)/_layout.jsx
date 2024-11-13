import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="favorite" />
      <Tabs.Screen name="report" />
    </Tabs>
  );
}