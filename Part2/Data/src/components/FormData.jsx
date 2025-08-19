
const FormData = ({filters, filteredcountry}) => {
  return (
    <div>
        <form>
            <div>
                find countries <input value ={filters} onChange={filteredcountry}/>
            </div>
        </form>
      
    </div>
  )
}

export default FormData
