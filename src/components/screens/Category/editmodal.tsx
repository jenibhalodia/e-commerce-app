import ButtonComponent from "@/components/core/Button";
import InputComponent from "@/components/core/Input";
import { getCategoryTable, EditCategoryTable } from "@/services/page";
import { Autocomplete, Box, Modal, TextField } from "@mui/material";
import React from "react";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

function EditModal({
  editOpen,
  setEditOpen,
  selectedRow,
  setSelectedRow,
  setData,
}: any) {
  const Status = ["Active", "Inactive"];

  const handleSaveEdit = async () => {
    try {
      const response = await EditCategoryTable(
        selectedRow.categoryName,
        selectedRow.description,
        selectedRow.code,
        selectedRow.status,
        selectedRow.id
      );
      console.log("response", response);
      if (response.statusCode === 200) {
        const newData = await getCategoryTable();
        console.log("newdata", newData);
        if (newData.statusCode === 200) {
          setData(newData.data);
          toast.success("Category updated");
          setEditOpen(false); 
          setSelectedRow(null); 
        } else {
          toast.error("Error while updating category");
        }
      }
    } catch (error) {
      toast.error("Error while updating category");
    }
  };

  return (
    <div>
      <Modal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed inset-0 flex justify-center items-center p-4 bg-black bg-opacity-50">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <div className="font-bold text-center text-2xl text-gray-800">
                Edit Category
              </div>
              <div className="flex justify-end">
                <ImCross
                  onClick={() => setEditOpen(false)}
                  className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
                />
              </div>
            </div>

            <div className="space-y-4">
              <InputComponent
                label="Category Name"
                type="text"
                value={selectedRow?.categoryName || ""}
                onChange={(e: any) =>
                  setSelectedRow({
                    ...selectedRow,
                    categoryName: e.target.value,
                  })
                }
                className="w-full"
              />
              <InputComponent
                label="Code"
                type="string"
                value={selectedRow?.code || ""}
                onChange={(e: any) =>
                  setSelectedRow({ ...selectedRow, code: e.target.value })
                }
                className="w-full"
              />
              <Autocomplete
                disablePortal
                options={Status}
                value={selectedRow?.status || ""}
                onChange={(e: any, newValue: any) => {
                  setSelectedRow({ ...selectedRow, status: newValue });
                }}
                getOptionLabel={(option) => option.toString()}
                renderInput={(params) => (
                  <TextField {...params} label="Status" type="text" />
                )}
              />
              <InputComponent
                label="Category Description"
                type="text"
                value={selectedRow?.description || ""}
                onChange={(e: any) =>
                  setSelectedRow({
                    ...selectedRow,
                    description: e.target.value,
                  })
                }
                className="w-full"
              />
            </div>

            <div className="flex justify-end mt-6">
              <ButtonComponent
                label="Save"
                variant="contained"
                onClick={handleSaveEdit}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditModal;
