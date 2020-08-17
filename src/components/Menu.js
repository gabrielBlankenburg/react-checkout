import React from "react";
import MenuDiv from "../core/Menu";
import Title from "../core/Title";
import Section from "../core/Section";
import NumberPlaceholder from "./InputsGroups/CheckoutForm/NumberPlaceholder";
import NamePlaceholder from "./InputsGroups/CheckoutForm/NamePlaceholder";
import ExpirationPlaceholder from "./InputsGroups/CheckoutForm/ExpirationPlaceholder";
import CvvPlaceholder from "./InputsGroups/CheckoutForm/CvvPlaceholder";
import ButtonText from "./InputsGroups/CheckoutForm/ButtonText";
import NumberPlaceholderSymbol from "./InputsGroups/Card/NumberPlaceholderSymbol";
import NamePlaceholderGroup from "./InputsGroups/Card/NamePlaceholder";
import ExpirationLabelPlaceholder from "./InputsGroups/Card/ExpirationLabelPlaceholder";
import ExpirationValuePlaceholder from "./InputsGroups/Card/ExpirationValuePlaceholder";
import CvvPlaceholderSymbol from "./InputsGroups/Card/CvvPlaceholderSymbol";
import BackgroundGroup from "./InputsGroups/Background"; 

function Menu({settings, setValue}) {
    return (
        <MenuDiv>
            <Title type="title">Settings</Title>
            <Section>
                <Title>Checkout Form</Title>
                <NumberPlaceholder setValue={setValue} settings={settings.checkoutForm} />
                <NamePlaceholder setValue={setValue} settings={settings.checkoutForm} />
                <ExpirationPlaceholder setValue={setValue} settings={settings.checkoutForm} />
                <CvvPlaceholder setValue={setValue} settings={settings.checkoutForm} />
                <ButtonText setValue={setValue} settings={settings.checkoutForm} />
            </Section>
            <Section>
                <Title>Card</Title>
                <NumberPlaceholderSymbol setValue={setValue} settings={settings.card} />
                <NamePlaceholderGroup setValue={setValue} settings={settings.card} />
                <ExpirationLabelPlaceholder setValue={setValue} settings={settings.card} />
                <ExpirationValuePlaceholder setValue={setValue} settings={settings.card} />
                <CvvPlaceholderSymbol setValue={setValue} settings={settings.card} />
                <BackgroundGroup setValue={setValue} settings={settings} />
            </Section>
        </MenuDiv>
    );
}

export default Menu;