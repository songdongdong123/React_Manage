import React from 'react';
import NProgress from 'nprogress';
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
      NProgress.start()
      try {
        const {default: Component} = await loadComponents()
        this.setState({ Component })
      } catch (err) {
        console.error(`Cannot ldoad component in <AsyncComponent />`);
        throw err
      }
      NProgress.done()
    }
    render () {
      const { Component } = this.state
      return (Component)?(<Component {...this.props}/>):null
    }
  }
)