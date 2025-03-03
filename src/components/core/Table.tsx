import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

interface Column {
  id: string;
  label: string;
}

interface RowData {
  [key: string]: any;
}

interface ReusableTableProps {
  data: RowData[];
  columns: Column[];
  rowsPerPage?: number;
  onEdit?: (row: RowData) => void;
  onDelete?: (row: RowData) => void;
  onInfo?: (row: RowData) => void;
}

const TableComponent: React.FC<ReusableTableProps> = ({
  data,
  columns,
  rowsPerPage = 5,
  onEdit,
  onDelete,
  onInfo,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPageState, setRowsPerPageState] = useState(rowsPerPage);

  const filteredData = data.filter((row) => {
    return columns.some((column) =>
      row[column.id]
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPageState(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ width: '100%' }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        margin="normal"
        className="mb-10"
      />

      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(
                page * rowsPerPageState,
                page * rowsPerPageState + rowsPerPageState
              )
              .map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                  <TableCell>
                    {/* Action buttons */}
                    <IconButton onClick={() => onInfo?.(row)} color="primary">
                      <InfoIcon />
                    </IconButton>
                    <IconButton onClick={() => onEdit?.(row)} color="secondary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete?.(row)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPageState}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableComponent;
