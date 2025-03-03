"use client";
import ButtonComponent from "@/components/core/Button";
import TableComponent from "@/components/core/Table";
import { Autocomplete, Box, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import InputComponent from "@/components/core/Input";
import { addCategory, getCategoryTable } from "@/services/page";
import { toast } from "react-toastify";

function CategoryComponent() {
  interface TableHeader {
    id: string;
    label: string;
  }

  const Status = ["Active", "Inactive"];
  const TABLE_HEAD: TableHeader[] = [
    { id: "status", label: "Status" },
    { id: "categoryName", label: "Category Name" },
    { id: "code", label: "Code" },
    { id: "createdOn", label: "Create On" },
    { id: "updatedAt", label: "Last Modified" },
    { id: "description", label: "Description" },
  ];
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState<TableHeader[]>([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEdit = (row: any) => {
    console.log("Edit clicked", row);
  };

  const handleDelete = (row: any) => {
    console.log("Delete clicked", row);
  };

  const handleInfo = (row: any) => {
    console.log("Info clicked", row);
  };

  const handleSave = async () => {
    try {
      const response = await addCategory(
        categoryName,
        description,
        code,
        status
      );
      console.log("response", response);
      if (response.statusCode === 201) {
        const newData = await getCategoryTable();
        console.log("newdata", newData);
        if (newData.statusCode === 200) {
          setData(newData.data);
          toast.success("New Category added");
          setOpen(false);
          setCategoryName("");
          setCode("");
          setStatus("");
          setDescription("");
        } else {
          toast.error("Error while creating new category");
        }
      } else {
        toast.error("Error while creating new category");
      }
    } catch (error) {
      toast.error("Error while creating new category");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getCategoryTable();
      console.log("response", response);
      if (response.statusCode === 200) {
        setColumns(TABLE_HEAD);
        setData(response.data);
      } else {
        console.log("Error fetching table");
        toast.error("Error fetching table");
      }
    } catch (error) {
      console.log("Error while fetching data", error);
      toast.error("Error fetching table");
    }
  };

  return (
    <div className="flex flex-col  mt-16 text-black bg-white h-screen p-10">
      <div className="flex justify-between mb-10">
        <div className=" text-5xl">Category</div>
        <ButtonComponent
          label="Add Category"
          onClick={handleOpen}
          variant="contained"
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="fixed inset-0 flex justify-center items-center p-4 bg-black bg-opacity-50">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between mb-4">
                <div className="font-bold text-center text-2xl text-gray-800">
                  Add New Category
                </div>
                <div className="flex justify-end">
                  <ImCross
                    onClick={handleClose}
                    className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <InputComponent
                  label="Category Name"
                  type="text"
                  value={categoryName}
                  onChange={(e: any) => {
                    setCategoryName(e.target.value);
                  }}
                  className="w-full"
                />
                <InputComponent
                  label="Code"
                  type="string"
                  value={code}
                  onChange={(e: any) => {
                    setCode(e.target.value);
                  }}
                  className="w-full"
                />
                {/* <InputComponent
                  label="Status"
                  type="text"
                  value={status}
                  onChange={(e: any) => {
                    setStatus(e.target.value);
                  }}
                  className="w-full"
                /> */}
                <Autocomplete
                  disablePortal
                  options={Status}
                  value={status}
                  onChange={(e: any , newValue :any) => {
                    setStatus(newValue);
                  }}
                  getOptionLabel={(option) => option.toString()} // Converts numbers to strings
                  renderInput={(params) => (
                    <TextField {...params} label="Status" type="text" />
                  )}
                />
                <InputComponent
                  label="Category Description"
                  type="text"
                  value={description}
                  onChange={(e: any) => {
                    setDescription(e.target.value);
                  }}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end mt-6">
                <ButtonComponent
                  label="Save"
                  variant="contained"
                  onClick={handleSave}
                />
              </div>
            </div>
          </Box>
        </Modal>

        {/* MODAL */}
      </div>
      <TableComponent
        data={data}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onInfo={handleInfo}
      />
    </div>
  );
}

export default CategoryComponent;
