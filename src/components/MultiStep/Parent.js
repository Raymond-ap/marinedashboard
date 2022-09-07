import React, { Component } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import LastForm from "./LastForm";
import Success from "./Success";

export default class Parent extends Component {
  state = {
    step: 1,
    currency: "",
    intermediaryName: "",
    customerType: "",
    customerName: "",
    customerPhoneNumber: "",
    customerEmail: "",
    customerAddress: "",
    ecowasCardNumber: "",
    TINNumber: "",
    inceptionDate: "",
    expiryDate: "",
    sumInsured: "",
    estimatedAnnualShipment: "",
    conveyance: "",
    voyages: "",
    interestedParty: "",
    lossOfToday: "",
    commercialInvoiceNumber: "",
    billLoadingNumber: "",
    vesselName: "",
    voyageFlightNumber: "",
    vessalFlag: "",
    codeOfCountryOfImportation: "",
    codeOfCountryOfArrival: "",
    codeOfPortOfLoading: "",
    codeOfPortOfArrival: "",
    sailingDate: "",
    estimatedArrivalDate: "",
    codeOfCountryTransshipmentStart: "",
    codeOfCountryTransshipmentEnd: "",
    locationOfTransStart: "",
    locationOfTransEnd: "",
    nameOfItemOnInvoice: "",
    nameOfPackageUsed: "",
    costOfItem: "",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const {
      currency,
      intermediaryName,
      customerType,
      customerName,
      customerPhoneNumber,
      customerEmail,
      customerAddress,
      ecowasCardNumber,
      TINNumber,
      inceptionDate,
      expiryDate,
      sumInsured,
      estimatedAnnualShipment,
      conveyance,
      voyages,
      interestedParty,
      lossOfToday,
      commercialInvoiceNumber,
      billLoadingNumber,
      vesselName,
      voyageFlightNumber,
      vessalFlag,
      codeOfCountryOfImportation,
      codeOfCountryOfArrival,
      codeOfPortOfLoading,
      codeOfPortOfArrival,
      sailingDate,
      estimatedArrivalDate,
      codeOfCountryTransshipmentStart,
      codeOfCountryTransshipmentEnd,
      locationOfTransStart,
      locationOfTransEnd,
      nameOfItemOnInvoice,
      nameOfPackageUsed,
      costOfItem,
    } = this.state;

    const values = {
      currency,
      intermediaryName,
      customerType,
      customerName,
      customerPhoneNumber,
      customerEmail,
      customerAddress,
      ecowasCardNumber,
      TINNumber,
      inceptionDate,
      expiryDate,
      sumInsured,
      estimatedAnnualShipment,
      conveyance,
      voyages,
      interestedParty,
      lossOfToday,
      commercialInvoiceNumber,
      billLoadingNumber,
      vesselName,
      voyageFlightNumber,
      vessalFlag,
      codeOfCountryOfImportation,
      codeOfCountryOfArrival,
      codeOfPortOfLoading,
      codeOfPortOfArrival,
      sailingDate,
      estimatedArrivalDate,
      codeOfCountryTransshipmentStart,
      codeOfCountryTransshipmentEnd,
      locationOfTransStart,
      locationOfTransEnd,
      nameOfItemOnInvoice,
      nameOfPackageUsed,
      costOfItem,
    };

    switch (this.state.step) {
      case 1:
        return (
          <FirstForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <SecondForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ThirdForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <LastForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <Success prevStep={this.prevStep} values={values} />;
      default:
      //
    }
  }
}
