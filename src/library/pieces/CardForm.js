import React from "react";
import CardNumber from "../components/Inputs/CardNumber";
import CardName from "../components/Inputs/CardName";
import CardExpiration from "../components/Inputs/CardExpiration";
import CardCvv from "../components/Inputs/CardCvv";
import NextButton from "../components/Buttons/Next";
import { FormTemplateWrapper, InputGroup } from "../core/Div";
import Form from "../core/Form";

const handleSubmit = (event, onSubmit, data) => {
  event.preventDefault();
  onSubmit(data);
};

function CardForm({ settings, data, setFocus, handleBlur, setters }) {
  return (
    <FormTemplateWrapper>
      <Form
        HTMLTableDataCellElement
        onSubmit={(event) => handleSubmit(event, settings.onSubmit, data)}
      >
        <InputGroup>
          <CardNumber
            placeholder={settings.numberPlaceholder}
            value={data.number}
            setFocus={setFocus}
            handleBlur={handleBlur}
            setValue={setters.number}
          />
        </InputGroup>
        <InputGroup>
          <CardName
            placeholder={settings.namePlaceholder}
            value={data.name}
            setFocus={setFocus}
            handleBlur={handleBlur}
            setValue={setters.name}
          />
        </InputGroup>
        <InputGroup field="card-expiration">
          <CardExpiration
            placeholder={settings.expirationPlaceholder}
            value={data.expiration}
            setFocus={setFocus}
            handleBlur={handleBlur}
            setValue={setters.expiration}
          />
        </InputGroup>
        <InputGroup field="card-cvv">
          <CardCvv
            placeholder={settings.cvvPlaceholder}
            value={data.cvv}
            setFocus={setFocus}
            handleBlur={handleBlur}
            setValue={setters.cvv}
          />
        </InputGroup>
        <NextButton background={settings.buttonBackground}>
          {settings.buttonText}
        </NextButton>
      </Form>
    </FormTemplateWrapper>
  );
}

export default CardForm;
