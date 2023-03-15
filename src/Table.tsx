import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

// ----------------------------------------------- //
// --------------------- utils ------------------- //
// ----------------------------------------------- //
const random = (number = 1): number => Math.floor(Math.random() * 10 * number);

// ----------------------------------------------- //
// --------------------- data -------------------- //
// ----------------------------------------------- //
const stickyStyle = {
  position: "sticky",
  left: 0,
  boxShadow: "5px 2px 5px grey",
  borderRight: "2px solid black"
};

const firstColumnStyle = {
  width: 300
};

const sx = {
  sticky: stickyStyle,
  firstColumn: firstColumnStyle
};

const createData = (
  name: string,
  inputWeight: number,
  pricePerKg: number,
  foodcost: number,
  transformation: string,
  transformationRate: number,
  outputWeight: number,
  kitchenArea: string,
  machineType: string,
  machineSetting: string,
  stepDurationValue: number,
  stepDurationUnit: string
) => {
  return {
    name,
    inputWeight,
    pricePerKg,
    foodcost,
    transformation,
    transformationRate,
    outputWeight,
    kitchenArea,
    machineType,
    machineSetting,
    stepDurationValue,
    stepDurationUnit
  };
};

const items = [...Array(20)].map((_, i) => {
  return createData(
    "name " + i,
    random(),
    random(),
    random(),
    "transformation " + i,
    random(),
    random(),
    "kitchenArea " + i,
    "machineType " + i,
    "machineSetting " + i,
    random(),
    "kg / heure"
  );
});

const headers = [
  { label: "Section / Étape / Article" },
  { label: "Poids en entrée (g)" },
  { label: "Prix au kg (€)" },
  { label: "Foodcost (€)" },
  { label: "Transformation" },
  { label: "Rendement" },
  { label: "Poids en sortie (g)" },
  { label: "Atelier" },
  { label: "Machine" },
  { label: "Paramétrage machine" },
  { label: "Durée de l'étape (valeur)" },
  { label: "Durée de l'étape (unité)" }
];

// ----------------------------------------------- //
// -------------- styled components -------------- //
// ----------------------------------------------- //
const StyledTableHeadCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "isFirstColumn"
})((props) => {
  let defaultStyles = {
    height: 40,
    backgroundColor: "#2196f3",
    color: "#fff"
  };

  if (props.isFirstColumn) {
    defaultStyles = { ...defaultStyles, ...stickyStyle, ...firstColumnStyle };
  }

  return defaultStyles;
});

const Table = () => {
  return (
    <TableContainer
      style={{
        maxWidth: "100vw",
        maxHeight: "95vh",
        border: "1px solid black"
      }}
    >
      <MUITable
        sx={{ minWidth: 2600 }}
        aria-label="recipe table"
        style={{ tableLayout: "fixed" }}
      >
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <StyledTableHeadCell
                key={header.label + index}
                align={index === 0 ? "left" : "center"}
                isFirstColumn={index === 0}
              >
                <Typography
                  sx={{
                    textAlign: index === 0 ? "left" : "center",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "22px"
                  }}
                >
                  {header.label}
                </Typography>
              </StyledTableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) => (
            <TableRow key={row.name + index}>
              <TableCell
                sx={{ ...sx.sticky, backgroundColor: "#fff" }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="center">{row.inputWeight}</TableCell>
              <TableCell align="center">{row.pricePerKg}</TableCell>
              <TableCell align="center">{row.foodcost}</TableCell>
              <TableCell align="center">{row.transformation}</TableCell>
              <TableCell align="center">{row.transformationRate}</TableCell>
              <TableCell align="center">{row.outputWeight}</TableCell>
              <TableCell align="center">{row.kitchenArea}</TableCell>
              <TableCell align="center">{row.machineType}</TableCell>
              <TableCell align="center">{row.machineSetting}</TableCell>
              <TableCell align="center">{row.stepDurationValue}</TableCell>
              <TableCell align="center">{row.stepDurationUnit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
