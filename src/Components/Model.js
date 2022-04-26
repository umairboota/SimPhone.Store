import React from "react";

export default function Model() {
  function openModal(modalId) {
    modal = document.getElementById(modalId);
    modal.classList.remove("hidden");
  }

  function closeModal() {
    modal = document.getElementById("modal");
    modal.classList.add("hidden");
  }
  return (
    <div>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
        onclick={openModal('modal')}
      >
        Open modal
      </button>

      <div
        id="modal"
        className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
      >
        <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">
          <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
            <h3>Modal header</h3>
            <button onclick={closeModal()}>x</button>
          </div>

          <div className="max-h-48 overflow-y-scroll p-4">
            <p>Scrollable modal body</p>
            <p>Scrollable modal body</p>
          </div>

          <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onclick="closeModal()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
