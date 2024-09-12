import { useEffect, useState } from "react";
import { Graph } from "./components/Graph";
import { lineChartData } from "./fake_data";
import axios from "axios";

function App() {
  
  const baseURL = "https://webull-api-production.up.railway.app/api/companies/07634a73-0302-40ea-8d6c-3b506b50d483";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2MTk3NDQ4LCJpYXQiOjE3MjYxMTEwNDgsImp0aSI6Ijg0MmRmNGYwMTYyNzQ5OWQ4MDQwYzFkOGE3OTg4NzRkIiwidXNlcl9pZCI6MX0.-XJtx91QYQY6Zq-52AHAqJAMFfNRNXuwn-0Te1qv1I4";
  const [get, setGet] = useState(null);

  useEffect (() => {
    
    axios.get(baseURL,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setGet(response.data);
    });
    
    if (!get) return null;

    prepareDataChart()

  }  , []);

  const prepareDataChart = () =>{
    console.log(get);
  }

  return (
    <div class="container mx-auto px-4 pt-10">
      <form>
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Prueba Técnica</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Ingresa la información requerida</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre de la compañia
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Simbolo
                </label>
                <div className="mt-2">
                  <input
                    id="simbolo"
                    name="simbolo"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Descripción de la compañia
                </label>
                <div className="mt-2">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>
        </div>
      </form>

      <Graph lineChartData={lineChartData} />
    </div>
  );
}

export default App;
