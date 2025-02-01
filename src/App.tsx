// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Home from "./pages/Home";
// import FormEditor from "./pages/FormEditor";
// import FormResponses from "./pages/FormResponses";
// import { FormField } from "./types/interfaces";

// // App Component: Main entry point with routing setup
// const App: React.FC = () => {
//   return (
//     <Router>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Form Builder App
//           </Typography>
//           <Button color="inherit" href="/">
//             Home
//           </Button>
//           <Button color="inherit" href="/form-editor">
//             Edit Form
//           </Button>
//           <Button color="inherit" href="/form-responses">
//             Form Responses
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container sx={{ mt: 3 }}>
//         <Routes>
//           {/* Routes for different pages */}
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/form-editor"
//             element={
//               <FormEditor
//                 forms={[]}
//                 onSave={function (
//                   formId: string,
//                   updatedForm: FormField[]
//                 ): void {
//                   throw new Error("Function not implemented.");
//                 }}
//               />
//             }
//           />
//           <Route path="/form-responses" element={<FormResponses />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Home from "./pages/Home";
import FormEditor from "./pages/FormEditor";
//import FormResponses from "./pages/FormResponses";
import { FormField } from "./types/interfaces";

// App Component: Main entry point with routing setup
const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Form Builder App
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/form-editor">
            Edit Form
          </Button>
          <Button color="inherit" href="/form-responses">
            Form Responses
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 3 }}>
        <Routes>
          {/* Routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/form-editor/:formId" element={<FormEditor />} />
          {/* <Route path="/form-responses" element={<FormResponses />} /> */}
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
