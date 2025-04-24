import React from "react";

const BookingForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form className="w-full max-w-2xl bg-gray-300 p-6 sm:p-8 rounded-2xl shadow-md space-y-5">
        <h2 className="text-2xl font-bold text-center">Book a Chef</h2>

        {/* Chef ID */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Chef ID</label>
          <input
            type="text"
            name="chefId"
            placeholder="Enter Chef ID"
            className="border rounded-lg px-4 py-2"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            className="border rounded-lg px-4 py-2"
          />
        </div>

        {/* Start Time & End Time */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <label className="text-sm font-semibold mb-1">Start Time</label>
            <input
              type="time"
              name="startTime"
              className="border rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-sm font-semibold mb-1">End Time</label>
            <input
              type="time"
              name="endTime"
              className="border rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="e.g. East Legon, Accra"
            className="border rounded-lg px-4 py-2"
          />
        </div>

        {/* Event Type */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Event Type</label>
          <select name="eventType" className="border rounded-lg px-4 py-2">
            <option value="">Select Event Type</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Private Dinner">Private Dinner</option>
            <option value="Corporate Event">Corporate Event</option>
          </select>
        </div>

        {/* Notes */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Note</label>
          <textarea
            name="note"
            rows="3"
            placeholder="Any additional notes..."
            className="border rounded-lg px-4 py-2"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
