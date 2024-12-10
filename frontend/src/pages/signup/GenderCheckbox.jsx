function GenderCheckbox({ oncheckboxchange, selectedGender }) {
    return (
      <div className="flex gap-4 mt-4">
        {/* Male Option */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={() => oncheckboxchange("male")}
            className="hidden peer"
          />
          {/* Custom Checkbox */}
          <span className="w-5 h-5 border rounded bg-gray-200 peer-checked:bg-red-500 peer-checked:border-red-500"></span>
          <span className="text-gray-300">Male</span>
        </label>
  
        {/* Female Option */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={() => oncheckboxchange("female")}
            className="hidden peer"
          />
          {/* Custom Checkbox */}
          <span className="w-5 h-5 border rounded bg-gray-200 peer-checked:bg-yellow-500 peer-checked:border-yellow-500"></span>
          <span className="text-gray-300">Female</span>
        </label>
      </div>
    );
  }
  
  export default GenderCheckbox;
  