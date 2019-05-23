# Exemplos de navegação com React Navigation

Abaixo segue uma breve descrição de instalação e uso dos principais recursos da biblioteca. Para maiores informações consulte a [doc oficial](https://reactnavigation.org/docs/en/getting-started.html)

React Navigation nasceu a partir de uma necessidade da comunidade de React Native para uma solução de navegacao fácil de usar e escrita totalmente em JavaScript.

## Instalação

Instale o pacote do **_react-navigation_** no seu projeto

```yarn
yarn add react-navigation
# or with npm
# npm install --save react-navigation
```

Em seguida instale o pacote **_react-native-gesture-handler_**

```yarn
yarn add react-native-gesture-handler
# or with npm
# npm install --save react-native-gesture-handler
```

Vincule todas as dependências nativas

```yarn
react-native link react-native-gesture-handler
```

Sem passos adicionais para iOS.

Para finalizar a instalação do react-native-gesture-hanlder para o Android, faça as seguintes modificações no MainActivity.java

```java

package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

Aplicação iOS Híbridas (Pule para projetos somente em RN)

```pods
 pod 'React', :path => '../node_modules/react-native', :subspecs => [
    . . . // other subspecs
    'RCTLinkingIOS',
    . . .
  ]
```

## Navegação em pilhas (Stack Navigation)

Para criar uma navegação em pilhas use **_createStackNavigator_** que é uma função que retorna um componente **React** e recebe a configuração das rotas e opcionalmente um objeto de configuração. No exemplo abaixo existem duas rotas configuradas, uma para a Home (HomeScreen) e outra para os detalhes (DetailScreen). Foi configurado que o nome da rota inicial será a **"Home"** e também foram definidos os estilos do headerStyle, headerTintColor e headerTitleStyle.

```javascript
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen, DetailsScreen } from "../components/screens";

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
```

### Navegando entre telas

Para efetuar a navegação de uma tela para outra é por meio da propriedade **_navigation_** que é passada para todos os nossos componentes de telas.

```javascript
this.props.navigation;
```

No exemplo abaixo é efetuada a navegação para a tela de detalhes (Details) usando o método **_navigate_** que recebe o nome da rota para qual queremos navegar.

```javascript
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
```

Podemos também efetuar a navegação usando o método **\*push**.

```javascript
<Button
  title="Go to Details... again"
  onPress={() => this.props.navigation.push("Details")}
/>
```

A diferença entre os métodos **_navigate_** e **\*push** é que o primeiro quando chamado ele primeiro tenta achar uma rota com o nome existente e somente adiciona se a rota ainda não esta na stack de rotas e o segundo sempre adiciona a rota na stack.

### Navegando de volta

O stacj navigator sempre irá adicionar um header com o botão volta quando for possível navegar de volta a partir da tela onde você está, caso contrário nenhum botão será adicionado. É possível programáticamente disparar o comportamento de voltar por meio do método **_back_**

```javascript
<Button
  title="Go back"
  onPress={() => this.props.navigation.goBack())}
/>
```

## App Containers

Containers são responsáveis por gerenciar o estado do app e vinculando o navigator com os ambientes do app. No Android o app container usa a **_Linking API_** para controlar o botão voltar. O container também pode ser configurado para persistir o estado da navegação.

```javascript
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
```

## Navegação em Abas (Tab Navigation)

É possível criar navegação baseda em abas que podem ficar no rodapé ou no header da aplicação. Exemplo usando o **_createBottomTabNavigator_** para mais detalhes clique [aqui](https://reactnavigation.org/docs/en/tab-based-navigation.html).

```javascript
import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

export default createAppContainer(TabNavigator);
```

Usando tabNavigation com stackNavigation e configurando os ícones para cada aba.

```javascript
const MainStacK = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});

const TabStack = createBottomTabNavigator(
  {
    TabHome: {
      screen: MainStacK,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "TabHome") {
          iconName = `home`;
        } else if (routeName === "Settings") {
          iconName = `settings`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    initialRouteName: "TabHome",
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "gray"
    }
  }
);
```
