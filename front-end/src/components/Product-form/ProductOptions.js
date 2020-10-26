import React from "react";

export default function Product(props) {

  return (
    <div>
      <h1>Your Customizations</h1>

      <label for="cord-options">Cordless:</label>

      <select id="cord-options">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label for="chain-options">Metal Beaded Chain:</label>

      <select id="chain-options">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label for="motor-options">Motor:</label>

      <select id="motor-options">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label for="remote-options">Remote:</label>

      <select id="remote-options">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label for="charger-options">Charger:</label>

      <select id="charger-options">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div >
  )

}