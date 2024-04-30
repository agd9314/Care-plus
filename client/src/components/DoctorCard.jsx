import male from "../assets/maleDoc.jpg";
import female from "../assets/femaleDoc.jpg";
import { useNavigate } from "react-router-dom";
export const DoctorCard = ({
  doctor: { name, gender, phone, specialization, experience, address , _id },
}) => {
    const navigate = useNavigate();
  function mapValue(value, minInput, maxInput, minOutput, maxOutput) {
    return (
      minOutput +
      (maxOutput - minOutput) * ((value - minInput) / (maxInput - minInput))
    );
  }
  const starValue = mapValue(experience, 0, 100, 0, 5);
  return (
    <div className="rounded-lg p-4 bg-white px-8 min-h-56">
      <div className="flex items-center gap-2">
        <div>
          <img
            src={gender === "male" ? male : female}
            alt="notfound"
            className="h-12 w-12 object-contain border rounded-full p-1"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 text-lg">
            <strong>{specialization.toUpperCase()}</strong>
            <div className="flex items-center">
              <span>{starValue}</span>
              <svg
                className="w-5 h-5 text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl">{name}</h2>
        </div>
      </div>
      <div>
        <h2 className="text-sm">{experience} years of experiance</h2>
        <h2 className="text-sm"> +91 {phone}</h2>
        <h2 className="text-sm">
          Address : {address || "chitkara university"}
        </h2>
      </div>
      <div className="mt-5 flex items-center gap-3 ">
        <button onClick={()=> {
                  navigate(`/patien-book/patientbookform/doctorId=${_id}`);
        }} className="bg-blue-500 rounded-full text-white px-5 py-1">
          Book Now
        </button>
      </div>
    </div>
  );
};
