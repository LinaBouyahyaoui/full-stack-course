

const Filter = ({filter, handlefilter}) => {
  return (
    <div>
        filter shown with <input value={filter} onChange={handlefilter} />
      
    </div>
  )
}

export default Filter
