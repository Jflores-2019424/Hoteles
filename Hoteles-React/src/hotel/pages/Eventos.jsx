import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../ui/hooks/useForm";
import { EventList } from '../components/EventList'

export const Eventos = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search );
  
  const showSearch = (q.length === 0);
  const showError = (q.length > 0)


  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();

    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  }


    return (
      <>
        <h1>Eventos</h1>
        <hr />
        <div className="row">
        <div className="col-3">
            <h4>Buscar</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
              type="text"
              placeholder="Buscar evento"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Buscar
              </button>
            </form>
        </div>

        <div className="col-9">
              <h4>Resultado</h4>
              <hr />
              <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{display: showSearch ? '' : 'none'}}>
                 Busca un evento 
              </div>

              <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{display: showError ? '' : 'none'}}> 
              No se encontro el evento <b>{ q }</b> 
              </div>

              {
               
              }
        </div>
      </div>
      <hr />
      <h1>Lista de Eventos</h1>
      <hr /> 
      <EventList/>
    </>
    )
  }
  