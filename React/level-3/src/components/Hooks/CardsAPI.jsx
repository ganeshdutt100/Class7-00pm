import React, { useEffect, useState } from "react";

const CardsAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <div className="h-screen flex justify-center item-center font-bold text-xl ">
        Loading....
      </div>
    );
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Our Students</h1>

      <div className=" ">
        {users.map((user) => (
          <div className="" key={user.id}>
            <div className="bg-blue-950 mb-5 w-[300px] text-center text-white p-5 rounded-md shadow-md mx-auto ">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 border-white rounded-full text-yellow-700 flex item-center justify-center size-10 font-bold text-2xl shadow-md">
                  {user.name[0]}
                </div>
                <div>
                  <h2 className="font-bold text-lg">{user.name}</h2>
                  <p className="font-bold text-md text-gray-400">
                    @{user.username}
                  </p>
                  <div className="text-start text-sm text-gray-300 space-y-1 border-t pt-3">
                    <p>📧{user.email}</p>
                    <p>📞{user.phone}</p>
                    <p>🌐{user.website}</p>
                    <p>📍{user.address.city}</p>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white font-bold py-2 px-4 rounded-md">
                    <a href="https://ganeshdutt.vercel.app" target="_blank">
                      Contact
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsAPI;
