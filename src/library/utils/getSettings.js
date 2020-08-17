const defaultSettings = {
  checkoutForm: {
    numberPlaceholder: "NUMBER",
    namePlaceholder: "NAME",
    expirationPlaceholder: "EXPIRATION",
    cvvPlaceholder: "CVV",
    buttonText: "CHECKOUT",
    onSubmit: () => {}
  },
  card: {
    numberPlaceholderSymbol: "•",
    namePlaceholder: "Full Name",
    expirationLabelPlaceholder: "Expiration",
    expirationValuePlaceholder: "MM/AA",
    cvvPlaceholderSymbol: "•"
  },
  background: "transparent",
  padding: "0"
};

const getSettings = (settings) => {
  let appSettings = {
    ...defaultSettings,
    ...settings,
    checkoutForm: {
      ...defaultSettings.checkoutForm
    },
    card: {
      ...defaultSettings.card
    }
  };

  if (settings && settings.checkoutForm) {
    appSettings.checkoutForm = {
      ...appSettings.checkoutForm,
      ...settings.checkoutForm
    };
  }

  if (settings && settings.card) {
    appSettings.card = {
      ...appSettings.card,
      ...settings.card
    };
  }

  return appSettings;
};

export default getSettings;
