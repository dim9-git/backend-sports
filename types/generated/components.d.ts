import type { Schema, Struct } from '@strapi/strapi';

export interface ContentTypesGallery extends Struct.ComponentSchema {
  collectionName: 'components_content_types_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ContentTypesText extends Struct.ComponentSchema {
  collectionName: 'components_content_types_texts';
  info: {
    description: '';
    displayName: 'Text';
    icon: 'stack';
  };
  attributes: {
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface FooterFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
    icon: 'archive';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HeaderHeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_header_header_links';
  info: {
    displayName: 'Header Link';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedAdvertisementBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_advertisement_banners';
  info: {
    description: '';
    displayName: 'Advertisement Banner';
    icon: 'chartBubble';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 3;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-types.gallery': ContentTypesGallery;
      'content-types.text': ContentTypesText;
      'footer.footer-link': FooterFooterLink;
      'footer.social-link': FooterSocialLink;
      'header.header-link': HeaderHeaderLink;
      'shared.advertisement-banner': SharedAdvertisementBanner;
      'shared.seo': SharedSeo;
    }
  }
}
