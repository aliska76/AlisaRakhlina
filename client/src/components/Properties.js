import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    number_of_rooms: 3,
    price: 250000,
    floor: 5,
    contact: "+1 (555) 123-4567",
    address: {
      state: "NY",
      city: "New York",
      street: "Broadway",
      number: 123,
    },
  },
  {
    id: 2,
    title: "Suburban Family House",
    number_of_rooms: 4,
    price: 450000,
    contact: "+1 (555) 234-5678",
    address: {
      state: "CA",
      city: "Los Angeles",
      street: "Palm Avenue",
      number: 456,
    },
  },
  // Add more sample properties as needed
];

function Properties() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          Properties
        </Typography>
        <Button
          component={Link}
          to="/add-property"
          variant="contained"
          color="primary"
        >
          Add New Property
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: "#132F4C" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Rooms</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Floor</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow
                key={property.id}
                sx={{ "&:hover": { backgroundColor: "#1E4976" } }}
              >
                <TableCell>{property.title}</TableCell>
                <TableCell>{property.number_of_rooms}</TableCell>
                <TableCell>${property.price.toLocaleString()}</TableCell>
                <TableCell>{property.floor || "N/A"}</TableCell>
                <TableCell>{property.contact}</TableCell>
                <TableCell>
                  {`${property.address.number} ${property.address.street}, ${property.address.city}, ${property.address.state}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Properties;
