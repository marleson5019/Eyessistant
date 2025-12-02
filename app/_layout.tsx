import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { CadastroFormProvider } from '../components/CadastroFormContext';
import { ContrasteProvider } from '../components/ContrasteContext';
import { ContrasteWrapper } from '../components/ContrasteWrapper';
import { DaltonicoProvider } from '../components/DaltonicoContext';
import { FontSizeProvider } from '../components/FontSizeContext';
import { GrayscaleWrapper } from '../components/GrayscaleWrapper';
import { IdiomaProvider } from '../components/IdiomaContext';
import { TemaProvider } from '../components/TemaContext';
import { TemaWrapper } from '../components/TemaWrapper';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {
  const colorScheme = useColorScheme();
  return (
    <TemaProvider>
      <DaltonicoProvider>
        <ContrasteProvider>
          <FontSizeProvider>
            <CadastroFormProvider>
              <IdiomaProvider>
                <TemaWrapper>
                  <GrayscaleWrapper>
                    <ContrasteWrapper>
                      <Stack
                      screenOptions={{
                        headerShown: false,
                        animation: 'slide_from_right',
                        gestureDirection: 'horizontal',
                      }}>
                      <Tabs
                        screenOptions={{
                          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                          headerShown: false,
                          tabBarButton: HapticTab,
                          tabBarBackground: TabBarBackground,
                          tabBarStyle: Platform.select({
                            ios: { position: 'absolute' },
                            default: {},
                          }),
                        }}>
                        <Tabs.Screen
                          name="index"
                          options={{
                            title: 'Início',
                            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, 
                          }}
                        />
                        <Tabs.Screen
                          name="analise"
                          options={{
                            title: 'Análise',
                            tabBarIcon: ({ color }) => <IconSymbol size={28} name="camera.fill" color={color} />, 
                          }}
                        />
                      </Tabs>
                    </Stack>
                  </ContrasteWrapper>
                </GrayscaleWrapper>
              </TemaWrapper>
              </IdiomaProvider>
            </CadastroFormProvider>
          </FontSizeProvider>
        </ContrasteProvider>
      </DaltonicoProvider>
    </TemaProvider>
  );
}
