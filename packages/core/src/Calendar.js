import React, { forwardRef, memo, useMemo } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { CustomisableRoot } from "./Root";
import {
  useHasCalendarProvider,
  useCalendarProps,
  CalendarProvider
} from "./CalendarProvider";

function getCalendarOverrides(name) {
  return (props, ...rest) => {
    const { calendarOverrides = {} } = props.theme;
    const styleOverrides = calendarOverrides[name] || {};
    if (typeof styleOverrides === "function") {
      return styleOverrides(props, ...rest);
    }
    return styleOverrides;
  };
}

const ThemedRoot = forwardRef(function ThemedRoot(props, ref) {
  const { theme } = useCalendarProps();
  const themeProps = useMemo(
    () => ({ theme: { calendarOverrides: theme, getCalendarOverrides } }),
    [theme]
  );
  return (
    <ThemeProvider {...themeProps}>
      <CustomisableRoot ref={ref} />
    </ThemeProvider>
  );
});

const Calendar = forwardRef(function Calendar(props, ref) {
  const isAChildOfProvider = useHasCalendarProvider();
  if (isAChildOfProvider) {
    return <ThemedRoot />;
  }
  return (
    <CalendarProvider {...props}>
      <ThemedRoot ref={ref} />
    </CalendarProvider>
  );
});

Calendar.propTypes = {
  /** Date API adapter */
  adapter: PropTypes.func,
  /** The initial value for whether to enable dateRange selections */
  allowRange: PropTypes.bool,
  /** Array of refs to white-list upon click outside */
  clickOutsideWhiteList: PropTypes.array,
  /** The initial selectedDate (for un-controlled use-case) */
  initialSelectedDate: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** The initial visible from calendar month (unless date is set) */
  initialVisibleFromMonth: PropTypes.object,
  /** Callback to set days as disabled
   *  @param day - Date to check
   */
  isDayDisabled: PropTypes.func,
  /** Callback to determine whether the current selection is valid
   *  @param day - startDate
   *  @param day - endDate
   */
  isRangeValid: PropTypes.func,
  /** Reducer(s), to override default state */
  reducers: PropTypes.arrayOf(PropTypes.func),
  /** Number of columns */
  numOfColumns: PropTypes.number,
  /** Number of visible months */
  numOfVisibleMonths: PropTypes.number,
  /** Selected date change handler */
  onChange: PropTypes.func,
  /** State change handler */
  onStateChange: PropTypes.func,
  /** Theme */
  theme: PropTypes.object,
  /** Start of week offset from date API's default */
  weekOffset: PropTypes.number
};

export default memo(Calendar);
