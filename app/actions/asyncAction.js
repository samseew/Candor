function fetchData() {
  return dispatch => {
    dispatch({ type: "PULLING_DATA" });
    fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "LOADED_DATA", payload: data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export { fetchData };
