import { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { CalendarInfo } from "./CalendarInfo";

const getEarthDate = (date: moment.Moment) => {
  return moment.utc(date).format("YYYY-MM-DD");
};

export function Calendar() {
  const dispatch = useDispatch();
  const { updateDates } = bindActionCreators(actionCreators, dispatch);
  const [startDate, setStartDate] = useState<moment.Moment>(moment());
  const [endDate, setEndDate] = useState<moment.Moment>(moment());
  const [focusedInput, setFocusedInput] = useState<moment.Moment | any>(null);

  const handleDatesChange = ({ startDate, endDate }: any) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleUpdateDates = () => {
    updateDates({
      startDate: getEarthDate(startDate),
      endDate: getEarthDate(endDate),
    });
  };

  const renderCalendarInfo = () => (
    <CalendarInfo
      handleUpdateDates={handleUpdateDates}
      startDate={getEarthDate(startDate)}
      endDate={getEarthDate(endDate)}
    />
  );

  const isValidDate = (day: moment.Moment) => day.isAfter(moment());

  return (
    <div id="calendar">
      <h5> Filter by date: </h5>
      <DateRangePicker
        showDefaultInputIcon
        withPortal
        renderCalendarInfo={renderCalendarInfo}
        keepOpenOnDateSelect
        isOutsideRange={isValidDate}
        numberOfMonths={1}
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={({ startDate, endDate }) =>
          handleDatesChange({ startDate, endDate })
        }
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      />
    </div>
  );
}
