import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="justify-center items-center grid">
      <Spinner />;<p className="text-xl text-primary-200">Loading Cabin Data</p>
    </div>
  );
}
