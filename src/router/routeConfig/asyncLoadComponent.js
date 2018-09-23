import React from 'react';
export default loadComponents => (
  class AsyncComponents extends React.Component{
    constructor (props) {
      super(props);
      this.state = {
        Component: null
      }
    }
    async componentDidMount () {
      if(this.state.Component !== null) return
      try {
        const {default: Component} = await loadComponents()
        this.setState({ Component })
      } catch (err) {
        console.error(`Cannot load component in <AsyncComponent />`);
        throw err
      }
    }
    render () {
      const { Component } = this.state
      return (Component)?(<Component {...this.props}/>):null
    }
  }
)