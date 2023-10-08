export const watchOutFeatureList = [
  {
    featureName: "Expressions",
    featureDescription: "Sentence describing feature.",

    featureCarouselSteps: [
      {
        step: "Choose from menu. Expressions will automatically display in a sequence.",
        stepImage: "./watchOut/menu.jpg",
      },
      {
        step: "On an expression page, tap the moving text to achieve text to speech. Make sure the smartwatch is unmuted.",
        stepImage: "./watchOut/seat.jpg",
      },
      {
        step: "In the bottom left, tap the icon for the buzzer.",
        stepImage: "./dialogue.png",
      },
      {
        step: "In the bottom centre, tap the icon for the blue disability badge.",
        stepImage: "./watchOut/bluebadge.jpg",
      },
      {
        step: "Finally, in the bottom right tap the icon to rotate the display to show to onlookers.",
        stepImage: "./kcllogo.png",
      },
    ],

    initialFeatureImageURL: "./watchOut/expressionsFeature.jpg",
  },

  {
    featureName: "Aphasia Page",
    featureDescription: "Sentence describing feature.",

    featureCarouselSteps: [
      {
        step: "Choose from menu to be directed to an Aphasia info page.",
        stepImage: "./watchOut/aphasiaMenu.jpg",
      },
      {
        step: "Provides a scannable QR code to further explain aphasia to onlookers.",
        stepImage: "./watchOut/qrcode.jpg",
      },
      {
        step: "Tap any of the text for text-to-speech of useful instructions to relay to onlookers. (add picture of the instructions)",
        stepImage: "./dialogue.png",
      },
    ],

    initialFeatureImageURL: "./watchOut/qrcode.jpg",
  },
];
