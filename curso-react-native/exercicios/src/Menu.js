import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/simples'
import ParImpar from './componentes/parImpar'
import { Inverter, MegaSena } from './componentes/multi'
import Contador from './componentes/contador'
import Plataformas from './componentes/plataformas'
import ValidarProps from './componentes/validarProps'
import Evento from './componentes/evento'
import { Avo } from './componentes/comunicacaoDireta'
import TextoSincronizado from './componentes/comunicacaoIndireta'

export default createDrawerNavigator({
  TextoSincronizado: {
    screen: TextoSincronizado,
    navigationOptions: { title: 'Texto Sincronizado'}
  },
  Avo: {
    screen: () => <Avo nome='Pedro' sobrenome='Costa' />
  },
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