import { useState } from "react";
import FormField from "./formField";

const BookingForm = ({ availableTimes, submitData }) => {
  const minimumDate = new Date().toISOString().split("T")[0];

  const [name, setName] = useState();
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(availableTimes[0]);
  const [numberOfGuests, setNumberGuests] = useState(1);

  const isNameValid = () => !!name;
  const isDateValid = () => date !== "";
  const isTimeValid = () => time !== "";
  const isNumberOfGuestsValid = () => numberOfGuests !== "";

  const areAllFieldsValid = () =>
    isDateValid() && isTimeValid() && isNumberOfGuestsValid() && isNameValid();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, name });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField
        label="Name*"
        htmlFor="name"
        hasError={!isNameValid() && name !== undefined}
        errorMessage={"Please enter your name"}
      >
        <input
          type="string"
          id="name"
          name="name"
          value={name}
          required={true}
          onChange={handleNameChange}
        />
      </FormField>
      <FormField
        label="Date*"
        htmlFor="booking-date"
        hasError={!isDateValid()}
        errorMessage={"Please choose a valid date"}
      >
        <input
          type="date"
          id="booking-date"
          name="booking-date"
          min={minimumDate}
          value={date}
          required={true}
          onChange={handleDateChange}
        />
      </FormField>
      <FormField
        label="Time*"
        htmlFor="booking-time"
        hasError={!isTimeValid()}
        errorMessage={"Please choose a valid time"}
      >
        <select
          id="booking-time"
          name="booking-time"
          value={time}
          required={true}
          onChange={handleTimeChange}
        >
          {availableTimes.map((times) => (
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label="Number of guests*"
        htmlFor="booking-number-guests"
        hasError={!isNumberOfGuestsValid()}
        errorMessage={"Please enter a number between 1 and 20"}
      >
        <input
          type="number"
          id="booking-number-guests"
          name="booking-number-guests"
          value={numberOfGuests}
          min={1}
          max={20}
          required={true}
          onChange={(e) => setNumberGuests(e.target.value)}
        />
      </FormField>

      <button className="button-primary" type="submit" disabled={!areAllFieldsValid()}>
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
