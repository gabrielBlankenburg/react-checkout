const defaultData = {
  card: {
    number: "",
    name: "",
    expiration: "",
    cvv: ""
  }
};

const getFormData = (data) => {
  return {
    ...defaultData,
    ...data
  };
};

export default getFormData;
