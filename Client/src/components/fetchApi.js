fetchQuotes = () => {
    this.setState({...this.state, isFetching: true})
    fetch(QUOTE_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({quotes: result, 
                                     isFetching: false}))
      .catch(e => console.log(e));
      }