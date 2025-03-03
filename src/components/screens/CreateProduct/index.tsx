"use client";

import ButtonComponent from "@/components/core/Button";
import { ImCross } from "react-icons/im";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { useState } from "react";
import SelectBoxModal from "./selectBoxModal";
import TableComponent from "@/components/core/Table";

const columns = [
  { id: "status", label: "Status" },
  { id: "category_name", label: "Category Name" },
  { id: "code", label: "Code" },
  { id: "create_on", label: "Create On" },
  { id: "last_modified", label: "Last Modified" },
  { id: "description", label: "Description" },
];
const data = [
  {
    status: "Wood Blind",
    category_name: "wood",
    code: "2426",
    create_on: "2/15/25 08:10:15",
    last_modified: "2/20/25 14:20:05",
    description: "",
  },
  {
    status: "Aluminum",
    category_name: "aluminum",
    code: "2469",
    create_on: "",
    last_modified: "",
    description: "",
  },
  {
    status: "Vertical",
    category_name: 28,
    code: "USA",
    create_on: "",
    last_modified: "",
    description: "",
  },
  {
    status: "Panel track",
    category_name: 28,
    code: "USA",
    create_on: "",
    last_modified: "",
    description: "",
  },
  {
    status: "Faux Wood",
    category_name: 28,
    code: "USA",
    create_on: "",
    last_modified: "",
    description: "",
  },
  {
    status: "Motorization",
    category_name: 28,
    code: "USA",
    create_on: "",
    last_modified: "",
    description: "",
  },
];

function CreateProductComponent() {
  const [open, setOpen] = useState(false);
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

  return (
    <div className="flex flex-col  mt-16 text-black bg-white h-screen p-10">
      <div className="flex justify-between mb-10">
        <div className=" text-5xl">Create New Product</div>

        {/* MODAL */}
        <ButtonComponent
          label="Add New"
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
            <div className="w-full max-w-4xl bg-white text-black shadow-lg rounded-lg p-6 overflow-hidden">
              <div className="flex justify-between w-full mb-5">
                <div className="font-bold text-center text-2xl">
                  Add New Field
                </div>
                <div className="flex justify-end mb-5">
                  <ImCross
                    onClick={handleClose}
                    className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
                  />
                </div>
              </div>
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 overflow-y-auto max-h-screen sm:max-h-[80vh]">
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Input
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This Input can store upto 255 characters
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Long text
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    Bigger text field{" "}
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Integer number
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    Bigger text field{" "}
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Float number
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This field can store numeric values with two decimal points.
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Date
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This field allows you to select a date using the calendar
                    component.
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Date Time
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This field allows you to capture the date and time for
                    performing actions.
                  </div>
                </div>
                <div>
                  <SelectBoxModal />
                </div>

                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Multi Select
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This Input help to select multi option.
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Check Box
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This field allows you to select select or deselect single
                    value.
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Radio Button
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This field allows you to select a single value from multiple
                    option.
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    Range Selector
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    Select Range{" "}
                  </div>
                </div>
                <div className="border p-2 hover:bg-[#1976D2] group flex flex-col justify-center cursor-pointer">
                  <div className="group-hover:text-white group-hover:font-bold">
                    URL
                  </div>
                  <div className="text-sm opacity-75 group-hover:text-white">
                    This field allows you to enter a website or page URL,
                    Appears as a clickable link.
                  </div>
                </div>
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
export default CreateProductComponent;
