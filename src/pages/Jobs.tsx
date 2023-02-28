import NavigationBar from "../components/NavigationBar";
import JobsList from "../components/Jobs/JobsList";

export const Jobs = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <section className="tabs">
          <div className="title">
            <h1>Jobs</h1>
            <div className="underline"></div>
          </div>
          <JobsList />
        </section>
      </main>
    </>
  );
};
