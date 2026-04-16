function Mainpage({ PageComponent }) {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 p-5">
        <PageComponent />
      </main>

    </div>
  );
}

export default Mainpage;