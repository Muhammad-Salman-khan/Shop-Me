import { Alert, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // effect logic
    return () => {
      // cleanup logic (optional)
    };
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
        <Stack
          sx={{
            width: {
              xs: "100%",
              sm: "80%",
              md: "60%",
              lg: "40%",
            },
          }}
          spacing={2}
        >
          <Alert
            severity="error"
            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {error}
          </Alert>
        </Stack>
      </div>
    );
  }
  return (
    <>
      <div>
        <NotFound />
      </div>
    </>
  );
};

export default App;
