import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, Checkbox, colors, TextField } from "@mui/material";
import { ImBin2, ImCross } from "react-icons/im";
import InputComponent from "@/components/core/Input";
import { FaEquals } from "react-icons/fa";
import ButtonComponent from "@/components/core/Button";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   color: "black",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: "0.5rem",
//   p: 4,
// };
const mechanism = ["lift mechanism", "machine mechanism"];
const data = ["Inside", "Outside"];

export default function SelectBoxModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <div
        className="group hover:bg-[#1976D2] border p-2 cursor-pointer"
        onClick={handleOpen}
      >
        <div className="group-hover:text-white group-hover:font-bold">
          Select Box
        </div>
        <div className="text-sm opacity-75 group-hover:text-white">
          This input help to select single option from multiple choice.
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed inset-0 flex justify-center items-center p-4">
          <div className="w-full max-w-4xl bg-white text-black shadow-lg rounded-lg p-6 overflow-auto">
            <div className="mb-5 flex justify-between items-center w-full">
              <div className="font-bold text-xl">SELECT BOX</div>
              <div className="flex justify-end">
                <ImCross
                  onClick={handleClose}
                  className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 w-full">
              <div>
                <div className="mb-1">
                  Component Group<span className="text-red-600">*</span>
                </div>
                <Autocomplete
                  disablePortal
                  options={mechanism}
                  // sx={{ width:300  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Structure" />
                  )}
                />
              </div>
              <div>
                <div className="mb-1">Product Screen Grouping</div>
                <Autocomplete
                  disablePortal
                  options={mechanism}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Structural Components" />
                  )}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5 w-full">
              <InputComponent label="Field Name" required type="text" />
              <InputComponent label="Internal Name" type="text" />
            </div>
            <InputComponent
              label="Help Text"
              type="text"
              className="mt-5 w-full"
            />

            <div className="font-bold text-xl mt-10 w-full">
              SELECT BOX OPTIONS
            </div>

            <div className="border border-gray-300 rounded p-2 mt-5 w-full">
              <div>
                <Checkbox {...label} defaultChecked />
                Mandatory
              </div>
              <hr />
              <div className="flex gap-5 items-center justify-between  p-5 ">
                <FaEquals className="w-5 h-5 " />
                <InputComponent label="Indise Mount" required type="text" />
                <InputComponent label="Inside_01" required type="text" />
                <ImBin2 className="w-5 h-5" />
              </div>
              <hr />
              <div className="flex gap-5 items-center justify-between p-5">
                <FaEquals className="w-5 h-5 " />
                <InputComponent label="Outside Mount" required type="text" />
                <InputComponent label="Outside_01" required type="text" />
                <ImBin2 className="w-5 h-5" />
              </div>
              <hr />
              <div className="mt-5">
                <Autocomplete
                  disablePortal
                  options={data}
                  sx={{ width: "full" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select mounting type" />
                  )}
                />
              </div>
            </div>
            <ButtonComponent
              label="save"
              className="flex justify-end w-full mt-5"
              variant="contained"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
