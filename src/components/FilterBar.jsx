function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  trending,
  setTrending,
}) {
  return (
    <div className="filter-bar">

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Music">Music</option>
        <option value="Gaming">Gaming</option>
        <option value="Travel">Travel</option>
        <option value="Fitness">Fitness</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="likes">Most Liked</option>
      </select>

      <button
        className={trending ? "active" : ""}
        onClick={() => setTrending(!trending)}
      >
        🔥 Trending
      </button>
    </div>
  );
}

export default FilterBar;