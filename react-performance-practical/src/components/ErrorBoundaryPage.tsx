import React from "react";
import withErrorBoundary from "../hocs/withErrorBoundary";

interface MyComponentProps {
  someData: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ someData }) => {
  if (someData === "error") {
    throw new Error("Something went wrong in MyComponent!");
  }
  return <div>{someData}</div>;
};

const FallbackComponent: React.FC = () => (
  <div
    style={{
      backgroundColor: "lightcoral",
      padding: "20px",
      borderRadius: "5px",
    }}
  >
    <h3>Oh no! An error occurred.</h3>
    <p>Please try again later.</p>
  </div>
);

const MyComponentWithErrorBoundary = withErrorBoundary(MyComponent);

const ErrorBoundaryPage = () => {
  const [data, setData] = React.useState("initial");
  const handleRetry = () => {
    setData("retrying...");
    setTimeout(() => {
      setData("success"); // Or potentially another "error" to test again
    }, 1000);
  };

  return (
    <main className="min-h-screen px-5 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Error Boundary Example
      </h1>
      <div>
        <h2>Example using withErrorBoundary</h2>
        <button onClick={() => setData("initial")}>Set to Initial</button>
        <button onClick={() => setData("error")}>Set to Error</button>
        <button onClick={() => setData("success")}>Set to Success</button>
        <p>Current Data: {data}</p>

        <MyComponentWithErrorBoundary someData={data} />

        <h3>Custom Fallback UI</h3>
        <MyComponentWithErrorBoundary
          someData={data === "error" ? "error" : "normal"}
          fallbackUI={<FallbackComponent />}
        />

        <h3>With Retry Mechanism</h3>
        <MyComponentWithErrorBoundary
          someData={data === "error" ? "error" : "normal"}
          fallbackUI={
            <div>
              <h4>Oops!</h4>
              <p>There was an issue rendering.</p>
            </div>
          }
          onRetry={handleRetry}
        />
      </div>
    </main>
  );
};

export default ErrorBoundaryPage;
