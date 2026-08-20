import FilterBar from "../components/FilterBar";
import PostList from "../components/PostList";

function Dashboard({ onLogout }) {

  return (
    <div className="dashboard">

      <header className="dashboard-header">

        <h1>Postify</h1>

        <button onClick={onLogout}>
          Logout
        </button>

      </header>

      <main>

        <h2>Post Dashboard</h2>

        <FilterBar />

        <PostList />

      </main>

    </div>
  );
}

export default Dashboard;