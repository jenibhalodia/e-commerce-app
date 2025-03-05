
// 1. Add State for Edit Modal and Selected Row

// const [editOpen, setEditOpen] = useState(false);
// const [selectedRow, setSelectedRow] = useState<any>(null);


// 2. Modify the handleEdit Function to Open Modal

// const handleEdit = (row: any) => {
//     console.log("Edit clicked", row);
//     setSelectedRow(row); // Set the selected row for editing
//     setEditOpen(true); // Open the modal
//   };
  

//   3. Add Edit Modal (Similar to Add Category Modal)

//   <Modal
//   open={editOpen}
//   onClose={() => setEditOpen(false)}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box className="fixed inset-0 flex justify-center items-center p-4 bg-black bg-opacity-50">
//     <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//       <div className="flex justify-between mb-4">
//         <div className="font-bold text-center text-2xl text-gray-800">
//           Edit Category
//         </div>
//         <div className="flex justify-end">
//           <ImCross
//             onClick={() => setEditOpen(false)}
//             className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
//           />
//         </div>
//       </div>

//       <div className="space-y-4">
//         <InputComponent
//           label="Category Name"
//           type="text"
//           value={selectedRow?.categoryName || ""}
//           onChange={(e: any) => setSelectedRow({ ...selectedRow, categoryName: e.target.value })}
//           className="w-full"
//         />
//         <InputComponent
//           label="Code"
//           type="string"
//           value={selectedRow?.code || ""}
//           onChange={(e: any) => setSelectedRow({ ...selectedRow, code: e.target.value })}
//           className="w-full"
//         />
//         <Autocomplete
//           disablePortal
//           options={Status}
//           value={selectedRow?.status || ""}
//           onChange={(e: any, newValue: any) => {
//             setSelectedRow({ ...selectedRow, status: newValue });
//           }}
//           getOptionLabel={(option) => option.toString()}
//           renderInput={(params) => (
//             <TextField {...params} label="Status" type="text" />
//           )}
//         />
//         <InputComponent
//           label="Category Description"
//           type="text"
//           value={selectedRow?.description || ""}
//           onChange={(e: any) => setSelectedRow({ ...selectedRow, description: e.target.value })}
//           className="w-full"
//         />
//       </div>

//       <div className="flex justify-end mt-6">
//         <ButtonComponent
//           label="Save"
//           variant="contained"
//           onClick={() => handleSaveEdit(selectedRow)}
//         />
//       </div>
//     </div>
//   </Box>
// </Modal>

// 4. Handle Save Logic for Edit Modal


// const handleSaveEdit = async (editedRow: any) => {
//     try {
//       const response = await UpdateCategoryTable(
//         editedRow.categoryName,
//         editedRow.description,
//         editedRow.code,
//         editedRow.status,
//         editedRow.id
//       );
//       console.log("response", response);
//       if (response.statusCode === 200) {
//         const newData = await getCategoryTable();
//         console.log("newdata", newData);
//         if (newData.statusCode === 200) {
//           setData(newData.data); // Update the table with new data
//           toast.success("Category updated");
//           setEditOpen(false); // Close the modal
//           setSelectedRow(null); // Reset the selected row
//         } else {
//           toast.error("Error while updating category");
//         }
//       }
//     } catch (error) {
//       toast.error("Error while updating category");
//     }
//   };

//   5. Add onEdit Prop to TableComponent

//   <TableComponent
//   data={data}
//   columns={columns}
//   onEdit={handleEdit} // Pass the handleEdit function
//   onDelete={handleDelete}
//   onInfo={handleInfo}
// />
