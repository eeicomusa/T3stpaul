import React from 'react';

const OpeningHours = () => {
  return (
    <div className="text-center">
      <table className="mx-auto">
        <tbody>
          <tr>
            <td className="py-2">Sunday</td>
            <td className="py-2">Closed</td>
          </tr>
          <tr>
            <td className="py-2">Monday</td>
            <td className="py-2">10 AM - 8 PM</td>
          </tr>
          <tr>
            <td className="py-2">Tuesday</td>
            <td className="py-2">10 AM - 8 PM</td>
          </tr>
          <tr>
            <td className="py-2">Wednesday</td>
            <td className="py-2">10 AM - 8 PM</td>
          </tr>
          <tr>
            <td className="py-2">Thursday</td>
            <td className="py-2">10 AM - 8 PM</td>
          </tr>
          <tr>
            <td className="py-2">Friday</td>
            <td className="py-2">10 AM - 8 PM</td>
          </tr>
          <tr>
            <td className="py-2">Saturday</td>
            <td className="py-2">10 AM - 8 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OpeningHours;
