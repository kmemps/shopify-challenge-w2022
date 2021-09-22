interface CalendarProps {
  handleUpdateDates: any;
  startDate: string;
  endDate: string;
}

export const CalendarInfo: React.FC<CalendarProps> = ({
  handleUpdateDates,
  startDate,
  endDate,
}) => {
  return (
    <div id="calendarInfo">
      <h5 className="my-3">
        {" "}
        Selected dates: <span>{startDate}</span> to <span>{endDate}</span>{" "}
      </h5>

      <button
        className="btn shadow-sm my-2 center-button"
        onClick={handleUpdateDates}
      >
        {" "}
        Get photos{" "}
      </button>
    </div>
  );
};
