import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar";
import PostList from "../components/PostList";
import postsData from "../data/Posts";
 
function Dashboard({ onLogout }) {
  const [posts, setPosts] = useState(postsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [trending, setTrending] = useState(false);
 
  const filteredPosts = useMemo(() => {
    let result = [...posts];
 
    // Search
    if (search.trim()) {
      result = result.filter((post) =>
        post.content.toLowerCase().includes(search.toLowerCase())
      );
    }
 
    // Category
    if (category !== "All") {
      result = result.filter((post) => post.category === category);
    }
 
    // Trending
    if (trending) {
      result = result.filter((post) => post.trending);
    }
 
    // Sorting
    if (sort === "newest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
 
    if (sort === "oldest") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
 
    if (sort === "likes") {
      result.sort((a, b) => b.likes - a.likes);
    }
 
    return result;
  }, [posts, search, category, sort, trending]);
 
  function handleLike(id) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }
 
  return (
    <main className="container">
      <header className="header">
        <h1>POSTIFY</h1>
        <p>Discover what people are talking about.</p>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </header>
 
      {/* FIXED: FilterBar now receives the props it needs */}
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
 
      <p className="results">Showing {filteredPosts.length} posts</p>
 
      {/* FIXED: PostList now receives posts + onLike instead of nothing */}
      <PostList posts={filteredPosts} onLike={handleLike} />
    </main>
  );
}
 
export default Dashboard;
 
 
