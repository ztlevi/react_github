/**
 * Theme
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const ThemeFlags = {
  Default: '#1e90ff',
  Red: '#F44336',
  Pink: '#E91E63',
  Purple: '#9C27B0',
  DeepPurple: '#673AB7',
  Indigo: '#3F51B5',
  Blue: '#1e90ff',
  LightBlue: '#03A9F4',
  Cyan: '#00BCD4',
  Teal: '#009688',
  Green: '#4CAF50',
  LightGreen: '#8BC34A',
  Lime: '#CDDC39',
  Yellow: '#FFEB3B',
  Amber: '#FFC107',
  Orange: '#FF9800',
  DeepOrange: '#FF5722',
  Brown: '#795548',
  Grey: '#9E9E9E',
  BlueGrey: '#607D8B',
  Black: '#000000',
};

export default class ThemeFactory {
  /**
   * Create a theme
   * @param themeFlag
   * @returns {{themeColor: *, styles: *}}
   */
  static createTheme(themeFlag) {
    return {
      themeColor: themeFlag,
      styles: StyleSheet.create({
        selectedTitleStyle: {
          color: themeFlag,
        },
        tabBarSelectedIcon: {
          color: themeFlag,
        },
        tabBarSelectedImage: {
          tintColor: themeFlag,
        },
        navBar: {
          backgroundColor: themeFlag,
        },
      }),
    };
  }
}
