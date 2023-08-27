import { useState } from 'react'

function Btn() {
    const [pay, isPay] = useState(false)

    return <button className={`py-2 px-4 ${pay ? "bg-green-500 hover:bg-green-700  " : "bg-blue-500 hover:bg-blue-700"}  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`} onClick={() => isPay(!pay)} >
        {pay ? "Pago exitoso" : "Pagar ahora"}



    </button>
}

export default Btn