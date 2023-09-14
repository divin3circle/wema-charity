const Admin = () => {
  return (
    <div>
      <h1 className="md:text-4xl text-lg font-bold text-center mt-1 mb-10">
        Administration
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg bg-gray-100">
          <ul className="flex flex-col justify-center items-center font-semibold p-1">
            <li className="p-2">Dan Wema - Founder</li>
            <li className="p-2">Tush Christine - Chairlady</li>
            <li className="p-2">Mercy Maira - Finance Manager</li>
            <li className="p-2">Brother Joseph - Assistant Chair</li>
            <li className="p-2">Eunice Ouma - Welfare Treasurer</li>
            <li className="p-2">Humphrey Muhusa - Secretary</li>
            <li className="p-2">Sister Perpetual - Assistant Secretary </li>
            <li className="p-2">Sister Faith - Welfare Coordinator</li>
          </ul>
        </div>
        <div className="flex justify-between rounded-lg bg-gray-100">
          <div>
            <h1 className="font-semibold p-1 md:p- text-green-700 md:text-lg">
              Patron
            </h1>
            <h1>George Njenga</h1>
          </div>
          <div>
            <h1 className="font-semibold p-1 md:p- text-green-700 md:text-lg">
              Coordinators
            </h1>
            <ul className="p-1 md:p-2 font-light">
              <li>Joseph Ngulu</li>
              <li>Naoimi Nzioka</li>
              <li>Brother Muli</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold p-1 md:p- text-green-700 md:text-lg">
              Event Organizers
            </h1>
            <ul className="p-1 md:p-2 font-light">
              <li>Jackline Mumbua</li>
              <li>Joshua Mwangangi</li>
              <li>Elijah Muthoka</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between rounded-lg bg-gray-100">
          <div>
            <h1 className="font-semibold p-1 md:p- text-green-700 md:text-lg">
              Hospitality
            </h1>
            <ul className="p-1 md:p-2 font-light">
              <li>Dommitilah</li>
              <li>Geofrey Mulokosi</li>
              <li>Brother Jonny</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold p-1 md:p- text-green-700 md:text-lg">
              Intercessory
            </h1>
            <ul className="p-1 md:p-2 font-light">
              <li>David Nawira</li>
              <li>Mary Alobi</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold p-1 md:p- text-green-700 md:text-lg">
              Media
            </h1>
            <ul className="p-1 md:p-2 font-light">
              <li>Brother Pato</li>
              <li>Brother Newton</li>
              <li>Cliff Kelvin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
