function GenderCheckbox() {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={'label gap-2 cursor-pointer'}>
                <span className="label-text text-indigo-300">Male</span>
                <input type="checkbox" className="checkbox checkbox-accent border-gray-200" />
            </label>
        </div>
      
        <div className="form-control">
            <label className={'label gap-2 cursor-pointer'}>
                <span className="label-text text-indigo-300">Female</span>
                <input type="checkbox" className="checkbox checkbox-accent border-gray-200" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox
