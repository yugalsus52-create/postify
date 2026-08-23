import { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import PostList from "./components/PostList";
import postsData from "./data/Posts";
import Login from "./pages/Login";
 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [posts, setPosts] = useState(postsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [trending, setTrending] = useState(false);
 
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
 
  const filteredPosts = useMemo(() => {
    let result = [...posts];
 
    // Search
    if (search.trim()) {
      result = result.filter((post) =>
        post.content
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }
 
    // Category
    if (category !== "All") {
      result = result.filter(
        (post) => post.category === category
      );
    }
 
    // Trending
    if (trending) {
      result = result.filter((post) => post.trending);
    }
 
    // Sorting
    if (sort === "newest") {
      result.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }
 
    if (sort === "oldest") {
      result.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }
 
    if (sort === "likes") {
      result.sort((a, b) => b.likes - a.likes);
    }
 
    return result;
  }, [posts, search, category, sort, trending]);
 
  function handleLike(id) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  }
 
  // FIXED: App now actually checks isLoggedIn and shows the
  // Login page instead of always rendering the dashboard content.
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }
 
  return (
 
    <main className="container">
      <header className="header">
        <h1>POSTIFY</h1>
        <p>Discover what people are talking about.</p>
        {/* FIXED: handleLogout was defined but never wired to anything */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
 
      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        trending={trending}
        setTrending={setTrending}
      />
 
      <p className="results">
        Showing {filteredPosts.length} posts
      </p>
 
      <PostList
        posts={filteredPosts}
        onLike={handleLike}
      />
    </main>
  );
 
}
 
export default App;
 
