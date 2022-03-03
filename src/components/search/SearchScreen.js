import React, { useMemo } from "react";
import useForm from "../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import HeroCard from "../heroe/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //el parse sirve para separar
  //la espresión { q = ""} Significa que si q no existe, que sea igual a un string vacío
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>SearchForm</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info"> Buscar un heroe </div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">No hay resultados: {q} </div>
            )
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
