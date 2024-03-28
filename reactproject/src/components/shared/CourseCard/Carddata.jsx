import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";

const apiInfo = "https://tap-web-1.herokuapp.com/topics/list";

export function CardLoading() {
  const [allCards, setAllCards] = useState([]);
  const [viewCards, setviewCards] = useState(allCards);
  const [searchInput, setsearchInput] = useState("");
  const [filterDrop, setfilterDrop] = useState("Default");
  const [sortDrop, setsortDrop] = useState("Default");

  function handleSearch(event) {
    const searchEntry = event.target.value;
    setsearchInput(searchEntry);
  }
  function handleSort(event) {
    const sortEntry = event.target.value;
    setsortDrop(sortEntry);
    if (sortEntry === "Default") {
      setviewCards(allCards);
    }
    if (sortEntry === "Topic Title") {
      viewCards.sort((a, b) => a.topic.localeCompare(b.topic));
    } else if (sortEntry === "Author Name") {
      viewCards.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  function handleFilter(event) {
    const filterEntry = event.target.value;
    setfilterDrop(filterEntry);
    if (filterDrop !== "Default") {
      const filterOptionLower = filterDrop.toLowerCase();
      setviewCards(
        allCards.filter(
          (card) => card.category.toLowerCase() === filterOptionLower
        )
      );
    }
  }

  useEffect(() => {
    async function fetchCards(apiUrl = apiInfo) {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setAllCards(data);
      } catch (error) {
        console.error("error is", error);
      }
    }
    fetchCards();
  }, []);

  useEffect(() => {
    let debounceTime;
    console.log("search input");
    async function fetchSearch(searchInput) {
      clearTimeout(debounceTime);
      debounceTime = setTimeout(async () => {
        const searchAPI = `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchInput}`;
        try {
          const response = await fetch(searchAPI);
          const data = await response.json();
          setviewCards(data);
          console.log("search was done");
        } catch (error) {
          console.error("error fetching data", error);
        }
      }, 300);
    }
    if (searchInput) {
      fetchSearch(searchInput);
    } else {
      setviewCards(allCards);
    }
  }, [searchInput]);

  return (
    <>
      {allCards.map((course) => (
        <Link key={course.id} to={`/details/${course.id}`}>
          <Card key={course.id} courses={course} />
        </Link>
      ))}
    </>
  );
}
