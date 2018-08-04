import React from 'react'
import Link from 'gatsby-link'

const DemoMenu = (props) => {
  const activePath = (path) => {
    return (props.headPath === `/${path}`) ? "item-active" : ""
  }
  function toggleInterestsDropdown() {
    const displayStatus = document.getElementById('interests-dropdown').style.height;
    document.getElementById('interests-dropdown').style.height = displayStatus === 'fit-content' ? '0px' : 'fit-content';
  }
  return (
    <div id="side-bar" className="bg-white">
      <div className={`col-12 ${activePath("interiors")}`}>
        <span onClick={toggleInterestsDropdown} className="navbar-toggle-link" to="/interiors">Interest</span>
      </div>
      <div id="interests-dropdown">
        <Link className="dropdown-item" to='/weightloss'>Weight Loss</Link>
        <Link className="dropdown-item" to="/breakfast">Breakfast</Link>
        <Link className="dropdown-item" to="/lunch">Lunch</Link>
        <Link className="dropdown-item" to="/dinner">Dinner</Link>
        <Link className="dropdown-item" to="/skinandhair">Skin and Hair</Link>
        <Link className="dropdown-item" to="/skincare">Skin Care</Link>
        <Link className="dropdown-item" to="/smoothies">Smoothies</Link>
        <Link className="dropdown-item" to="/other">Other</Link>
      </div>
      <div className={`col-12 ${activePath("furnitures")}`}>
        <Link to="/furnitures">Collections</Link>
      </div>
      <div className={`col-12 ${activePath("lighting")}`}>
        <Link to="/lighting">Meal Programs</Link>
      </div>
      <div className={`col-12 ${activePath("products")}`}>
        <Link to="/products">Keto products</Link>
      </div>
      <div className={`col-12 ${activePath("blog")}`}>
        <Link to="/blog">blog</Link>
      </div>
      <div className={`col-12 ${activePath("growtv")}`}>
        <Link to="/growtv">grow tv</Link>
      </div>
    </div>
  )
}
export default DemoMenu
