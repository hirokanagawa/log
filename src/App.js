import "./styles.css";

export default function App() {
  const test = async () => {
    console.log(1);
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    });
  };

  const main = async () => {
    await test();
    console.log(3);
  };
  main();

  return (
    <div className="header">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
