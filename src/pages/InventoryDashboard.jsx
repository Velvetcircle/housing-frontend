import React, { useState } from 'react';

const mockInventory = [
  {
    id: 1,
    project: "Ashiyana Greens",
    type: "2BHK Flat",
    location: "Noida Sector 62",
    status: "Available",
    price: "₹45 Lakhs",
  },
  {
    id: 2,
    project: "Ashiyana Heights",
    type: "3BHK Flat",
    location: "Greater Noida",
    status: "Booked",
    price: "₹65 Lakhs",
  },
  {
    id: 3,
    project: "Ashiyana Villas",
    type: "Villa",
    location: "Ghaziabad",
    status: "Available",
    price: "₹1.2 Cr",
  },
  {
    id: 4,
    project: "Ashiyana Greens",
    type: "Plot",
    location: "Noida Extension",
    status: "Sold Out",
    price: "₹35 Lakhs",
  },
];

const InventoryDashboard = () => {
  const [inventory] = useState(mockInventory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏡 Ashiyana Inventory Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Project</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{item.project}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.location}</td>
                <td className={`px-4 py-2 font-medium ${item.status === "Available" ? "text-green-600" : item.status === "Booked" ? "text-yellow-600" : "text-red-600"}`}>
                  {item.status}
                </td>
                <td className="px-4 py-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryDashboard;
