const getSetters = (formData, setFormData) => {
  return {
    card: {
      number: (number) => {
        setFormData({
          ...formData,
          card: {
            ...formData.card,
            number
          }
        });
      },
      name: (name) => {
        setFormData({
          ...formData,
          card: {
            ...formData.card,
            name
          }
        });
      },
      expiration: (expiration) => {
        setFormData({
          ...formData,
          card: {
            ...formData.card,
            expiration
          }
        });
      },
      cvv: (cvv) => {
        setFormData({
          ...formData,
          card: {
            ...formData.card,
            cvv
          }
        });
      }
    }
  };
};

export default getSetters;
