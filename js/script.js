"use strict";
// const setStorageData = () => {
//     const storageField = document.querySelector(
//       "#storage-field"
//     ) as HTMLInputElement;
//     const fieldValue = storageField.value;
//     const previousData = localStorage.getItem("Type");
//     if (!previousData) {
//       const finalValue = [
//         {
//           type: fieldValue,
//         },
//       ];
//       localStorage.setItem("Type", JSON.stringify(finalValue));
//     } else {
//       const prevUpdatedData = JSON.parse(previousData);
//       const finalValue = [
//         ...prevUpdatedData,
//         {
//           type: fieldValue,
//         },
//       ];
//       localStorage.setItem("Type", JSON.stringify(finalValue));
//     }
//     showStorageData();
//   };
//   const showStorageData = () => {
//     const storageContainer = document.querySelector(
//       "#storage-container"
//     ) as HTMLOListElement;
//     storageContainer.textContent = "";
//     const storageDataString = localStorage.getItem("Type");
//     if (!storageDataString) {
//       return;
//     }
//     const storageData = JSON.parse(storageDataString);
//     storageData.forEach((data: any) => {
//       const li = document.createElement("li");
//       li.innerText = data.type;
//       storageContainer.append(li);
//     });
//   };
//   showStorageData();
