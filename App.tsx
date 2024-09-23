import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Alert, AlertIcon, AlertText } from "./components/ui/alert";
import { AddIcon, Icon } from "./components/ui/icon";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Button, ButtonIcon, ButtonText } from "./components/ui/button";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView className="flex-1 items-center justify-center">
        <Alert action="muted" variant="solid">
          {/* <AlertIcon as={AddIcon} /> */}
          <AlertText>Description of alert!</AlertText>
        </Alert>

        <Button>
          <ButtonText>Hello World!</ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>

        <Icon as={AddIcon} />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
