fetchQuotes = () => {
    this.setState({...this.state, isFetching: true})
    fetch('http://localhost:5000/cities/all')
        .then(response => response.json())
        .then(respuesta => alert(respuesta));
      }