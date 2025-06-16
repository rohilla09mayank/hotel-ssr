"use client";

import {
  differenceInDays,
  isPast,
  isWithinInterval,
  isSameDay,
  addDays,
  eachDayOfInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../_context/ReservationContext";
import { formatCurrency } from "../_lib/helper";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        selected={displayRange}
        onSelect={(range) => {
          if (!range?.from || !range?.to) {
            setRange(range);
            return;
          }
          const allDatesInRange = eachDayOfInterval({
            start: range.from,
            end: range.to,
          });
          const hasBookedDay = allDatesInRange.some((date) =>
            bookedDates.some((booked) => isSameDay(booked, date))
          );
          if (hasBookedDay) {
            setRange({ from: undefined, to: undefined });
          } else {
            setRange(range);
          }
        }}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        modifiers={{
          booked: bookedDates.filter((booking) => !isPast(booking.endDate)),
        }}
        modifiersClassNames={{ booked: "line-through" }}
        numberOfMonths={1}
        disabled={(curDate) =>
          isPast(curDate) ||
          isWithinInterval(curDate, {
            start: range.from,
            end: addDays(range.from, minBookingLength),
          }) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl">
                  {formatCurrency(regularPrice - discount)}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  {formatCurrency(regularPrice)}
                </span>
              </>
            ) : (
              <span className="text-xl">{formatCurrency(regularPrice)}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-3 text-xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-xl font-semibold">
                  {formatCurrency(cabinPrice)}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
