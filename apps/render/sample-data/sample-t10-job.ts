import { IJob } from '../src/types'

import path from 'path'

export const T10: IJob = {
  scriptId: 1010,
  aeRenderData: {
    template: {
      src: `file://${path.resolve(
        __dirname,
        '../render-templates/T10/T10.aep',
      )}`,
      composition: 'Main',
      outputExt: 'mov',
    },
    assets: [
      {
        src: 'https://res.cloudinary.com/hdngr/video/authenticated/s--CB9_a9Kq--/v1613619469/assets/90/Smile_Time_Dreamlamp_instrumental_MP3_wqs0as.mp3',
        type: 'audio',
        layerName: 'soundTrack',
      },
      {
        type: 'data',
        layerName: 'brandColor1',
        property: 'Effects.Fill.Color',
        value: [0.11764705882352941, 0.7450980392156863, 0.9058823529411765],
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'brandColor2',
        property: 'Effects.Fill.Color',
        value: [0, 0, 0],
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'brandColor3',
        property: 'Effects.Fill.Color',
        value: [0.984313725490196, 0.984313725490196, 0],
        composition: '_control',
      },
      {
        src: 'https://res.cloudinary.com/hdngr/image/authenticated/s--o2iiPScg--/v1611005055/Lumina/Color_Positive_3x_jwrvoe.png',
        type: 'image',
        layerName: 'logo',
      },
      {
        src: 'https://res.cloudinary.com/hdngr/image/authenticated/s--Qj_SLdoQ--/v1587686734/icons/location-icon.png',
        type: 'image',
        layerName: 'locationIcon',
      },
      {
        src: 'https://res.cloudinary.com/hdngr/image/authenticated/s--Qj_SLdoQ--/v1587686734/icons/location-icon.png',
        type: 'image',
        layerName: 'coverImage',
      },
      {
        src: 'https://res.cloudinary.com/hdngr/image/authenticated/s--EF-Im3Zl--/v1600280845/adobe-stock/Business/AdobeStock_356685769_kq8m1f.jpg',
        type: 'image',
        layerName: 'backgroundImageOne',
      },
      {
        src: 'https://res.cloudinary.com/hdngr/image/authenticated/s--EF-Im3Zl--/v1600280845/adobe-stock/Business/AdobeStock_356685769_kq8m1f.jpg',
        type: 'image',
        layerName: 'backgroundImageTwo',
      },
      {
        src: 'https://res.cloudinary.com/hdngr/image/authenticated/s--EF-Im3Zl--/v1600280845/adobe-stock/Business/AdobeStock_356685769_kq8m1f.jpg',
        type: 'image',
        layerName: 'backgroundImageThree',
      },
      {
        src: 'https://res.cloudinary.com/hdngr/image/authenticated/s--EF-Im3Zl--/v1600280845/adobe-stock/Business/AdobeStock_356685769_kq8m1f.jpg',
        type: 'image',
        layerName: 'backgroundImageFour',
      },
      {
        type: 'data',
        layerName: 'tagline',
        property: 'Text.Source Text',
        value: '00000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'position',
        property: 'Text.Source Text',
        value: '000000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'location',
        property: 'Text.Source Text',
        value: '000000000000000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'slideTwoTitle',
        property: 'Text.Source Text',
        value: '00000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'slideTwoBody',
        property: 'Text.Source Text',
        value:
          '000000000000000000000 000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'slideThreeTitle',
        property: 'Text.Source Text',
        value: '000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletOne',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletTwo',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletThree',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'slideFourTitle',
        property: 'Text.Source Text',
        value: '000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletFour',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletFive',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletSix',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'slideFiveTitle',
        property: 'Text.Source Text',
        value: '000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletSeven',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletEight',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'bulletNine',
        property: 'Text.Source Text',
        value: '000000000000000000000 000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'testimonial',
        property: 'Text.Source Text',
        value: '00000000000000000000000000 00000000000000000000000000',
        composition: '_control',
      },
      {
        type: 'data',
        layerName: 'attribution',
        property: 'Text.Source Text',
        value: '00000000000000000000000000000000',
        composition: '_control',
      },
    ],
  },
}