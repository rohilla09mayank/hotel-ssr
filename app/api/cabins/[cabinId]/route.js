import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const cabinId = params.cabinId;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ type: "S", cabin, bookedDates });
  } catch (err) {
    Response.json({
      type: "E",
      message: "Error fetching data",
      details: err.message,
    });
  }
}
