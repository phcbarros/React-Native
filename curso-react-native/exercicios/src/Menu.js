import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/simples'
import ParImpar from './componentes/parImpar'
import { Inverter, MegaSena } from './componentes/multi'
import Contador from './componentes/contador'
import Plataformas from './componentes/plataformas'
import ValidarProps from './componentes/validarProps'
import Evento from './componentes/evento'

export default createDrawerNavigator({
  Evento: {
    screen: Evento
  },
  ValidarPros: {
    screen: () => <ValidarProps ano={11}/>
  },
  Plataformas: {
    screen: Plataformas
  },
  Contador: {
    screen: () => <Contador />
  },
  MegaSena: {
    screen: () => <MegaSena numeros={6} />,
    navigationOptions: { title: 'Mega Sena'}
  },
  Inverter: {
    screen: () => <Inverter texto='React Native' />
  },
  ParImpar: {
    screen: () => <ParImpar numero={33}/>,
    navigationOptions: { title: 'Par ou Ímpar'}
  },
  Simples: {
    screen: () => <Simples texto='Flexível'/>
  }
}, { drawerWidth: 300})