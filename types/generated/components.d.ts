import type { Schema, Attribute } from '@strapi/strapi';

export interface MainPageStatistic extends Schema.Component {
  collectionName: 'components_main_page_statistics';
  info: {
    displayName: 'Statistic';
    icon: 'star';
  };
  attributes: {
    Number: Attribute.Integer;
    Description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main-page.statistic': MainPageStatistic;
    }
  }
}
